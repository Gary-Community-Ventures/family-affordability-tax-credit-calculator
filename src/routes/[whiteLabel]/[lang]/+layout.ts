import type { LayoutLoad } from './$types';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale, locales } from '$lib/i18n/i18n-util';
import { loadLocale } from '$lib/i18n/i18n-util.sync';
import { error } from '@sveltejs/kit';

export const load = (async (event) => {
	if (!locales.some((locale) => locale === event.params.lang)) {
		throw error(404, 'not found');
	}

	const locale = detectLocale(() => [event.params.lang]);

	loadLocale(locale);

	setLocale(locale);

	return event.data;
}) satisfies LayoutLoad;
