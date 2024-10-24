import type { Translation } from '../i18n-types';

const es = {
	MAIN: {
		TITLE: 'TAX CREDIT CALCULATOR',
		DESCRIPTION: ''
	},
	FORM: {
		TITLE: '',
		QUESTIONS: {
			MARRIED: {
				QUESTION: ''
			},
			CHILDREN: {
				QUESTION: '',
				AGEqUESTION: '',
				ADDcHILD: ''
			},
			INCOME: {
				QUESTION: '',
				QUESTION_WITH_SPOUSE: '',
				HELP_TEXT: '',
				FREQUENCY_QUESTION: '',
				AMOUNT_QUESTION: '',
				HOURS_WORKED_QUESTION: '',
				ADD_INCOME: ''
			}
		},
		YES_OR_NO_INPUT: {
			YES: '',
			NO: ''
		},
		SUBMIT: ''
	},
	RESULTS: {
		TITLE: '',
		CREDITS_FOUND_TITLE: '',
		CREDIT_NAMES: {
			EITC: '',
			COEITC: '',
			CTC: '',
			COCTC: '',
			FATC: ''
		},
		REQUIRED_DOCUMENTS: {
			SOCIAL_SECURITY_NUMBER: '',
			TEN_NINTY_NINE: '',
			W2: ''
		},
		BUTTONS: {
			FILE_ONLINE: '',
			FILE_IN_PERSON: '',
			REMIND_ME: ''
		},
		DISCLAIMER: '',
		OTHER_BENEFITS: {
			TITLE: '',
			DESCRIPTION: '',
			BUTTON: ''
		}
	},
	CONTACT_INFO: {
		TITLE: '',
		INPUTS: {
			FIRST_NAME: '',
			LAST_NAME: '',
			EMAIL: '',
			PNONE: ''
		},
		TOS: '',
		SUBMIT: ''
	}
} satisfies Translation;

export default es;
