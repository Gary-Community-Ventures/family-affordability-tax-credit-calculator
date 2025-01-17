import type { Locales } from './i18n/i18n-types';

export default function googleTranslateSelect(node: HTMLDivElement, lang: Locales) {
	const id = 'translate_input_' + crypto.randomUUID();
	node.id = id;

	let retries = 0;

	const interval = setInterval(() => {
		try {
			// @ts-ignore
			new google.translate.TranslateElement(
				// @ts-ignore
				{ pageLanguage: lang, layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL },
				id
			);
			clearInterval(interval);
		} catch (error) {
			retries += 1;

			if (retries > 100) {
				clearInterval(interval);
				console.error('could not load Google Translate');
			}
		}
	}, 100);
}
