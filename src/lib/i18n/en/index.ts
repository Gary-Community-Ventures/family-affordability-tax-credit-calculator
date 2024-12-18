import type { BaseTranslation } from '../i18n-types';

const en = {
	MAIN: {
		TITLE: 'TAX CREDIT CALCULATOR',
		DESCRIPTION:
			'Most Colorado residents are eligible for several local and federal tax credits each year, which can save the average family between $5K-20K. All you have to do to claim these funds is file your taxes! Answer just a few questions using the calculator below to find out how these tax credits could benefit you, and then file your taxes using one of the services listed below.'
	},
	FORM: {
		TITLE: 'Tell Us About Your Household',
		QUESTIONS: {
			MARRIED: {
				QUESTION: 'Do you file taxes as single or jointly with a spouse?',
				MARRIED: 'With a Spouse',
				SINGLE: 'Single'
			},
			CHILDREN: {
				ZERO_TO_4: {
					QUESTION: 'How many children under age 5 do you have?',
					LABEL: 'Number of children'
				},
				FIVE_TO_16: {
					QUESTION: 'How many children between the ages of 6 and 16 do you have?',
					LABEL: 'Number of children'
				},
				ERROR: 'The max household size is 8'
			},
			INCOME: {
				QUESTION_WITH_SPOUSE: 'Do you or your spouse have an income?',
				QUESTION: 'Do you have an income?',
				FREQUENCY: {
					QUESTION: 'How often are you paid this income?',
					LABEL: 'Frequency',
					HELP_TEXT:
						'"Every 2 weeks" means you get paid every other week. "Twice a month" means you get paid two times a month on the same dates each month.',
					OPTIONS: {
						WEEKLY: 'Weekly',
						BIWEEKLY: '2 Weeks',
						SEMIMONTHLY: 'Twice a Month',
						MONTHLY: 'Monthly',
						HOURLY: 'Hourly'
					}
				},
				AMOUNT: {
					QUESTION: 'How much do you receive before taxes each pay period for this income?',
					LABEL: 'Amount'
				},
				HOURS: {
					QUESTION: 'What is your hourly rate?',
					LABEL: 'Hours'
				},
				ERROR: 'This field is required',
				REMOVE_INCOME: 'Remove Income',
				ADD_INCOME: 'ADD ANOTHER INCOME'
			}
		},
		YES_OR_NO_INPUT: {
			YES: 'Yes',
			NO: 'No'
		},
		SUBMIT: 'CALCULATE MY TAX CREDITS',
		LOADING: 'LOADING',
		ERROR: 'Something went wrong'
	},
	RESULTS: {
		TITLE_START: 'FILE 2024 TAXES & RECEIVE',
		TITLE_END: '{0:string} IN TAX CREDITS',
		CREDITS_FOUND_TITLE: '{0:number} Tax Credits Found:',
		CREDIT_NAMES: {
			eitc: 'Earned Income Tax Credit:',
			coeitc: 'Colorado Earned Income Tax Credit:',
			ctc: 'Child Tax Credit:',
			coctc: 'Colorado Child Tax Credit:',
			fatc: 'Colorado Family Affordability Tax Credit:'
		},
		REQUIRED_DOCUMENTS: {
			TITLE: 'Required Documents to File Taxes:',
			ID: 'Photo ID (driver’s license, state ID, or passport).',
			SSN: 'Social Security (SSN) card or Individual Taxpayer Identification Number (ITIN) letter for yourself and each person listed on the tax return.',
			BIRTH_DATES:
				"Birth dates for everyone on the tax return. You may need your children's birth certificates if you are claiming the Child Tax Credit (CTC).",
			W2: 'W2s, 1099s, and other tax-related documents.',
			BANK_ACCOUNT:
				'A checking/savings account and routing number to receive your refund by direct deposit, or your mailing address to have a check mailed to you.',
			PRIOR_TAX_RETURNS: 'Prior year tax returns, if you have them.',
			IP_PIN: 'Identity Protection PIN (IP PIN), if you have one. Learn more about an IP PIN',
			IP_PIN_LINK_TEXT: 'here'
		},
		FILE_FOR_FREE: {
			TITLE: 'FILE FOR FREE',
			ONLINE: 'FILE ONLINE',
			IN_PERSON: 'FILE IN-PERSON'
		},
		OTHER_FILING_OPTIONS: {
			TITLE: 'OTHER FILING OPTIONS',
			PAID: 'PAID FILING OPTIONS'
		},
		DISCLAIMER:
			'Based on the income information you provided, this is the total amount of credits you will be eligible for. The final refund you receive will be based on this number minus any liabilities you may owe. Filers who receive all or most of their income from a W-2 earning job will likely receive nearly all of the value of these credits in a refund.',
		MFB: {
			TITLE: 'OTHER BENEFITS',
			DESCRIPTION:
				'To see what other benefits you may be eligible, click the button below to visit MyFriendBen.',
			BUTTON: 'MEET MYFRIENDBEN'
		}
	}
} satisfies BaseTranslation;

export default en;
