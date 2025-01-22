import { locales } from '$lib/i18n/i18n-util';
import { WHITE_LABELS } from '$lib/whiteLabelData';

export const prerender = true;

export function entries() {
	const prerenderOptions = [];

	for (const locale of locales) {
		for (const whiteLabel of WHITE_LABELS) {
			prerenderOptions.push({
				lang: locale,
				whiteLabel: whiteLabel
			});
		}
	}

	return prerenderOptions
}
