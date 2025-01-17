import type { Locales } from './i18n/i18n-types';

export default function googleTranslateSelect(node: HTMLDivElement, lang: Locales) {
	const id = 'translate_input_' + crypto.randomUUID();
	node.id = id;

	const attachGoogleTranslate = () => {
		// @ts-ignore
		new google.translate.TranslateElement(
			// @ts-ignore
			{ pageLanguage: lang, layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL },
			id
		);
	};

	try {
		attachGoogleTranslate();
	} catch (error) {
		document
			.querySelector('#google-translate-script')
			?.addEventListener('load', attachGoogleTranslate);
	}
}
