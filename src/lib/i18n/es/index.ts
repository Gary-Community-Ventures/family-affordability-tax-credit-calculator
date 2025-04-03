import type { Translation } from '../i18n-types';

const es = {
	MAIN: {
		TITLE: 'CALCULADORA DE CREDITO FISCAL',
		DESCRIPTION:
			'¡Las familias con niños en Colorado ahora tienen acceso a más créditos fiscales que nunca! En 2025, las familias pueden recibir entre 2k y 10k por niño en créditos al presentar sus impuestos. En menos de 60 segundos, podrás descubrir cuánto podrías beneficiarte respondiendo estas sencillas preguntas.'
	},
	FORM: {
		TITLE: 'Cuéntenos sobre su hogar',
		QUESTIONS: {
			MARRIED: {
				QUESTION: '¿Declara impuestos como soltero o conjuntamente con su cónyuge?',
				MARRIED: 'Con un cónyuge',
				SINGLE: 'Soltero'
			},
			CHILDREN: {
				ZERO_TO_4: {
					QUESTION: '¿Cuántos hijos menores de 6 años tenías al finalizar el 2024?',
					LABEL: 'Número de niños'
				},
				FIVE_TO_16: {
					QUESTION: '¿Cuántos hijos entre 6 y 16 años tenías al finalizar el 2024?',
					LABEL: 'Número de niños'
				},
				ERROR: 'El tamaño máximo del hogar es 8'
			},
			INCOME: {
				QUESTION_WITH_SPOUSE: '¿Tiene usted o su cónyuge ingresos?',
				QUESTION: '¿Tienes ingresos?',
				FREQUENCY: {
					QUESTION: '¿Con qué frecuencia recibe estos ingresos?',
					LABEL: 'Frecuencia',
					HELP_TEXT:
						'"Cada 2 semanas" significa que le pagan cada dos semanas. "Dos veces al mes" significa que le pagan dos veces al mes en las mismas fechas cada mes.',
					OPTIONS: {
						WEEKLY: 'Semanalmente',
						BIWEEKLY: '2 semanas',
						SEMIMONTHLY: 'Dos veces al mes',
						MONTHLY: 'Mensual',
						HOURLY: 'Cada hora'
					}
				},
				AMOUNT: {
					QUESTION: '¿Cuánto recibe antes de impuestos en cada período de pago por este ingreso?',
					LABEL: 'Cantidad'
				},
				HOURS: {
					QUESTION: '¿Cuál es su tarifa por hora?',
					LABEL: 'Horas'
				},
				ERROR: 'Este campo es obligatorio',
				REMOVE_INCOME: 'Eliminar ingresos',
				ADD_INCOME: 'AÑADIR OTRO INGRESO'
			}
		},
		YES_OR_NO_INPUT: {
			YES: 'Sí',
			NO: 'No'
		},
		SUBMIT: 'CALCULAR MIS CRÉDITOS FISCALES',
		LOADING: 'CARGANDO',
		ERROR: 'algo salió mal'
	},
	RESULTS: {
		TITLE_START: 'PRESENTAR IMPUESTOS 2024',
		TITLE_MIDDLE: 'Y RECIBA {0:string} EN',
		TITLE_END: 'CRÉDITOS FISCALES',
		CREDITS_FOUND_TITLE: '{0:number} Créditos fiscales encontrados:',
		CREDIT_NAMES: {
			co_tax_credit_eitc: 'Crédito fiscal por ingreso del trabajo:',
			co_tax_credit_coeitc: 'Crédito fiscal por ingreso del trabajo de Colorado:',
			co_tax_credit_ctc: 'Crédito fiscal por hijos:',
			co_tax_credit_coctc: 'Crédito fiscal por hijos de Colorado:',
			co_tax_credit_fatc: 'Crédito fiscal por asequibilidad familiar de Colorado:'
		},
		REQUIRED_DOCUMENTS: {
			TITLE: 'Documentos requeridos para presentar impuestos:',
			ID: 'Identificación con fotografía (licencia de conducir, identificación estatal o pasaporte).',
			SSN: 'Tarjeta de Seguro Social (SSN) o carta de Número de Identificación Individual del Contribuyente (ITIN) para usted y cada persona que figura en la declaración de impuestos.',
			BIRTH_DATES:
				'Fechas de nacimiento de todas las personas en la declaración de impuestos. Es posible que necesite los certificados de nacimiento de sus hijos si solicita el Crédito tributario por hijos (CTC).',
			W2: 'W2, 1099 y otros documentos relacionados con impuestos.',
			BANK_ACCOUNT:
				'Una cuenta corriente/de ahorros y un número de ruta para recibir su reembolso mediante depósito directo, o su dirección postal para que le envíen un cheque por correo.',
			PRIOR_TAX_RETURNS: 'Declaraciones de impuestos del año anterior, si las tiene.',
			IP_PIN:
				'PIN de protección de identidad (IP PIN), si tiene uno. Obtenga más información sobre un PIN de IP',
			IP_PIN_LINK_TEXT: 'aquí'
		},
		FILE_FOR_FREE: {
			TITLE: 'PRESENTAR GRATIS',
			ONLINE: 'PRESENTAR EN LÍNEA',
			IN_PERSON: 'PRESENTAR EN PERSONA'
		},
		OTHER_FILING_OPTIONS: {
			TITLE: 'OTRAS OPCIONES DE PRESENTACIÓN',
			PAID: 'OPCIONES DE PRESENTACIÓN PAGADAS',
			FREE_TAX_USA: 'FREETAXUSA ONLINE FILING'
		},
		DISCLAIMER:
			'Según la información de ingresos que proporcionó, esta es la cantidad total de créditos para los que puede ser elegible. El reembolso final que reciba se basará en este número menos cualquier obligación que pueda tener. Los contribuyentes que reciben todo o la mayor parte de sus ingresos de un trabajo con salario W-2 probablemente recibirán casi todo el valor de estos créditos en un reembolso.',
		MFB: {
			TITLE: 'OTROS BENEFICIOS',
			DESCRIPTION:
				'Para ver qué otros beneficios puede ser elegible, haga clic en el botón a continuación para visitar MyFriendBen.',
			BUTTON: 'CONOCE A MYFRIENDBEN'
		}
	}
} satisfies Translation;

export default es;
