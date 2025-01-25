import { PUBLIC_MFB_API_KEY, PUBLIC_MFB_DOMAIN } from '$env/static/public';

export type IncomeType = {
	frequency: string;
	amount: number | null;
	hours: number | null;
};

export type TaxCredit = {
	id: TaxCreditId;
	value: number;
};

export type TaxCreditId =
	| 'co_tax_credit_ctc'
	| 'co_tax_credit_coctc'
	| 'co_tax_credit_eitc'
	| 'co_tax_credit_coeitc'
	| 'co_tax_credit_fatc';

export default class MfbApi {
	// provide a default age,
	// since we don't have ages for the head and spouse
	DEFAULT_AGE = 44;

	MFB_REQUEST_HEADER = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `TOKEN ${PUBLIC_MFB_API_KEY}`
	};

	TAX_CREDIT_NAMES: TaxCreditId[] = [
		'co_tax_credit_ctc',
		'co_tax_credit_coctc',
		'co_tax_credit_eitc',
		'co_tax_credit_coeitc',
		'co_tax_credit_fatc'
	];

	CHILD_TAX_CREDIT_NAME = 'co_tax_credit_ctc';

	uuid: string | null;
	id: string | null;
	isMarried: boolean;
	childAges: number[];
	incomes: IncomeType[];

	constructor() {
		this.isMarried = false;
		this.childAges = [];
		this.incomes = [];
		this.uuid = null;
		this.id = null;
	}

	updateData(isMarried: boolean, childAges: number[], incomes: IncomeType[]) {
		this.isMarried = isMarried;
		this.childAges = childAges;
		this.incomes = incomes;
	}

	async updateScreen() {
		const url = this.#upsertScreenUrl();
		const method = this.#upsertScreenMethod();
		const data = this.#createApiData();

		const res = await fetch(url, {
			method: method,
			headers: this.MFB_REQUEST_HEADER,
			body: JSON.stringify(data)
		});

		const resData = await res.json();

		if (this.uuid === null) {
			this.uuid = resData.uuid;
			this.id = resData.id;
		}
	}

	async getResults(): Promise<TaxCredit[]> {
		const url = this.#resultsUrl();

		const res = await fetch(url, {
			method: 'GET',
			headers: this.MFB_REQUEST_HEADER
		});

		const data = await res.json();

		const credits: TaxCredit[] = [];
		for (const program of data.programs) {
			if (this.TAX_CREDIT_NAMES.includes(program.external_name)) {
				if (this.CHILD_TAX_CREDIT_NAME === program.external_name) {
					program.extimated_value = this.#fixCtc(program.estimated_value);
				}
				credits.push({ id: program.external_name, value: program.estimated_value });
			}
		}

		// @ts-ignore TS does not know about the GA
		gtag('event', 'results_shown', { uuid: this.uuid });

		return credits;
	}

	#createApiData() {
		const urlParams = new URLSearchParams(window.location.search);
		const isTest = urlParams.get('test') !== null;

		const householdMembers: any[] = [];

		householdMembers.push(this.#createPerson(this.incomes, 'headOfHousehold'));

		if (this.isMarried) {
			householdMembers.push(this.#createPerson([], 'spouse'));
		}

		for (const age of this.childAges) {
			householdMembers.push(this.#createPerson([], 'child', age));
		}

		const data: any = {
			is_test: isTest,
			white_label: 'co_tax_calculator',
			referrer_code: 'getaheadtaxcalculator',
			household_size: householdMembers.length,
			household_members: householdMembers,
			expenses: []
		};

		return data;
	}

	#createPerson(incomes: IncomeType[], relationship: string, age: number = this.DEFAULT_AGE) {
		return {
			relationship: relationship,
			age: age,
			hasIncome: incomes.length > 0,
			income_streams: incomes.map((income) => {
				return {
					type: 'wages',
					frequency: income.frequency,
					amount: income.amount,
					hours_worked: income.hours
				};
			}),
			insurance: {}
		};
	}

	#upsertScreenUrl() {
		if (this.uuid !== null) {
			return `${PUBLIC_MFB_DOMAIN}/api/screens/${this.uuid}/`;
		}

		return `${PUBLIC_MFB_DOMAIN}/api/screens/`;
	}

	#upsertScreenMethod() {
		if (this.uuid !== null) {
			return 'PUT';
		}

		return 'POST';
	}

	#resultsUrl() {
		if (this.uuid === null) {
			throw new Error('create a screen first with `updateScreen`');
		}

		return `${PUBLIC_MFB_DOMAIN}/api/eligibility/${this.uuid}`;
	}

	#calcIncome() {
		let total = 0;

		for (const income of this.incomes) {
			switch (income.frequency) {
				case 'weekly':
					total += Number(income.amount) * 52;
					break;
				case 'biweekly':
					total += Number(income.amount) * 26;
					break;
				case 'semimonthly':
					total += Number(income.amount) * 24;
					break;
				case 'monthly':
					total += Number(income.amount) * 12;
					break;
				case 'yearly':
					total += Number(income.amount);
					break;
				case 'hourly':
					total += Number(income.amount) * Number(income.hours) * 52;
					break;
			}
		}

		return total;
	}

	#fixCtc(ctcAmount: number) {
		const income = this.#calcIncome();

		if (income < 2_500) {
			return Math.min(income * 0.1, ctcAmount);
		} else {
			return Math.min((income - 2_500) * 0.15 + income * 0.1, ctcAmount);
		}
	}
}
