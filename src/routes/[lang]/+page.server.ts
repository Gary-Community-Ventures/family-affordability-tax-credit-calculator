import { locales } from '$lib/i18n/i18n-util';

export const prerender = true;

export function entries() {
	return locales.map((locale) => {
		return {
			lang: locale
		};
	});
}
