// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'es'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	MAIN: {
		/**
		 * T​A​X​ ​C​R​E​D​I​T​ ​C​A​L​C​U​L​A​T​O​R
		 */
		TITLE: string
		DESCRIPTION: string
	}
	FORM: {
		TITLE: string
		QUESTIONS: {
			MARRIED: {
				QUESTION: string
			}
			CHILDREN: {
				QUESTION: string
				AGEqUESTION: string
				ADDcHILD: string
			}
			INCOME: {
				QUESTION: string
				QUESTION_WITH_SPOUSE: string
				HELP_TEXT: string
				FREQUENCY_QUESTION: string
				AMOUNT_QUESTION: string
				HOURS_WORKED_QUESTION: string
				ADD_INCOME: string
			}
		}
		YES_OR_NO_INPUT: {
			YES: string
			NO: string
		}
		SUBMIT: string
	}
	RESULTS: {
		TITLE: string
		CREDITS_FOUND_TITLE: string
		CREDIT_NAMES: {
			/**
			 * E​a​r​n​e​d​ ​I​n​c​o​m​e​ ​T​a​x​ ​C​r​e​d​i​t
			 */
			eitc: string
			/**
			 * C​o​l​o​r​a​d​o​ ​E​a​r​n​e​d​ ​I​n​c​o​m​e​ ​T​a​x​ ​C​r​e​d​i​t
			 */
			coeitc: string
			/**
			 * C​h​i​l​d​ ​T​a​x​ ​C​r​e​d​i​t
			 */
			ctc: string
			/**
			 * C​o​l​o​r​a​d​o​ ​C​h​i​l​d​ ​T​a​x​ ​C​r​e​d​i​t
			 */
			coctc: string
			/**
			 * C​o​l​o​r​a​d​o​ ​F​a​m​i​l​y​ ​A​f​f​o​r​d​a​b​i​l​i​t​y​ ​T​a​x​ ​C​r​e​d​i​t
			 */
			fatc: string
		}
		REQUIRED_DOCUMENTS: {
			SOCIAL_SECURITY_NUMBER: string
			TEN_NINTY_NINE: string
			W2: string
		}
		BUTTONS: {
			FILE_ONLINE: string
			FILE_IN_PERSON: string
			REMIND_ME: string
		}
		DISCLAIMER: string
		OTHER_BENEFITS: {
			TITLE: string
			DESCRIPTION: string
			BUTTON: string
		}
	}
	CONTACT_INFO: {
		TITLE: string
		INPUTS: {
			FIRST_NAME: string
			LAST_NAME: string
			EMAIL: string
			PNONE: string
		}
		TOS: string
		SUBMIT: string
	}
}

export type TranslationFunctions = {
	MAIN: {
		/**
		 * TAX CREDIT CALCULATOR
		 */
		TITLE: () => LocalizedString
		DESCRIPTION: () => LocalizedString
	}
	FORM: {
		TITLE: () => LocalizedString
		QUESTIONS: {
			MARRIED: {
				QUESTION: () => LocalizedString
			}
			CHILDREN: {
				QUESTION: () => LocalizedString
				AGEqUESTION: () => LocalizedString
				ADDcHILD: () => LocalizedString
			}
			INCOME: {
				QUESTION: () => LocalizedString
				QUESTION_WITH_SPOUSE: () => LocalizedString
				HELP_TEXT: () => LocalizedString
				FREQUENCY_QUESTION: () => LocalizedString
				AMOUNT_QUESTION: () => LocalizedString
				HOURS_WORKED_QUESTION: () => LocalizedString
				ADD_INCOME: () => LocalizedString
			}
		}
		YES_OR_NO_INPUT: {
			YES: () => LocalizedString
			NO: () => LocalizedString
		}
		SUBMIT: () => LocalizedString
	}
	RESULTS: {
		TITLE: () => LocalizedString
		CREDITS_FOUND_TITLE: () => LocalizedString
		CREDIT_NAMES: {
			/**
			 * Earned Income Tax Credit
			 */
			eitc: () => LocalizedString
			/**
			 * Colorado Earned Income Tax Credit
			 */
			coeitc: () => LocalizedString
			/**
			 * Child Tax Credit
			 */
			ctc: () => LocalizedString
			/**
			 * Colorado Child Tax Credit
			 */
			coctc: () => LocalizedString
			/**
			 * Colorado Family Affordability Tax Credit
			 */
			fatc: () => LocalizedString
		}
		REQUIRED_DOCUMENTS: {
			SOCIAL_SECURITY_NUMBER: () => LocalizedString
			TEN_NINTY_NINE: () => LocalizedString
			W2: () => LocalizedString
		}
		BUTTONS: {
			FILE_ONLINE: () => LocalizedString
			FILE_IN_PERSON: () => LocalizedString
			REMIND_ME: () => LocalizedString
		}
		DISCLAIMER: () => LocalizedString
		OTHER_BENEFITS: {
			TITLE: () => LocalizedString
			DESCRIPTION: () => LocalizedString
			BUTTON: () => LocalizedString
		}
	}
	CONTACT_INFO: {
		TITLE: () => LocalizedString
		INPUTS: {
			FIRST_NAME: () => LocalizedString
			LAST_NAME: () => LocalizedString
			EMAIL: () => LocalizedString
			PNONE: () => LocalizedString
		}
		TOS: () => LocalizedString
		SUBMIT: () => LocalizedString
	}
}

export type Formatters = {}
