import { PUBLIC_MFB_FRONTEND_DOMAIN } from '$env/static/public';
import { locale } from './i18n/i18n-svelte';
import type { Locales } from './i18n/i18n-types';

export type WhiteLabels =
	| 'gac'
	| 'pueblo_united_way'
	| 'dabc'
	| 'alg'
	| 'servicios'
	| 'jeffco'
	| 'adams'
	| 'arapahoe';

export const WHITE_LABELS: WhiteLabels[] = [
	'gac',
	'pueblo_united_way',
	'dabc',
	'alg',
	'servicios',
	'jeffco',
	'adams',
	'arapahoe'
];

export type Colors = {
	primary: string;
	secondary: string;
	headerColor?: string;
};

export const WHITE_LABEL_COLORS: {
	[key: string]: Colors | undefined;
	_default: Colors;
} = {
	_default: {
		primary: '#264e5e',
		secondary: '#9dcdc9'
	},
	gac: {
		primary: '#264e5e',
		secondary: '#9dcdc9'
	},
	pueblo_united_way: {
		primary: '#273f79',
		secondary: '#f29a38'
	},
	dabc: {
		primary: '#2d71b7',
		secondary: '#408f4e',
		headerColor: '#ffffff'
	},
	alg: {
		primary: '#e75245',
		secondary: '#e08f33',
		headerColor: '#000000'
	},
	servicios: {
		primary: '#7c2f35',
		secondary: '#e39d50'
	},
	jeffco: {
		primary: '#597827',
		secondary: '#495856',
		headerColor: '#ffffff'
	},
	adams: {
		primary: '#2a6438',
		secondary: '#296695',
		headerColor: '#ffffff'
	},
	arapahoe: {
		primary: '#a5243b',
		secondary: '#22355b',
		headerColor: '#ffffff'
	}
};

export type Links = {
	fileOnline: string;
	fileInPerson: string;
	paidFiling: string;
};

const BASE_LINKS: Links = {
	fileOnline: 'https://myfreetaxes.com/',
	fileInPerson: 'https://www.getaheadcolorado.org/fileinperson/',
	paidFiling: 'https://co.myfriendben.org/paid-tax-filing-options/'
};

const SPANISH_BASE_LINKS: Links = {
	fileOnline: 'https://myfreetaxes.com/es/',
	fileInPerson: 'https://www.getaheadcolorado.org/fileinperson/',
	paidFiling: 'https://co.myfriendben.org/opciones-de-presentacion-de-impuestos-pagados/'
};

export function generateLinks(lang: Locales, whiteLabel?: string): Links {
	let baseLinks = BASE_LINKS;
	let language = 'english';
	if (lang === 'es') {
		baseLinks = SPANISH_BASE_LINKS;
		language = 'spanish';
	}

	if (whiteLabel === undefined) {
		return baseLinks;
	}

	if (whiteLabel === 'gac') {
		whiteLabel = 'get_ahead';
	}

	return {
		fileOnline: `${baseLinks.fileOnline}?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_online&utm_id=${whiteLabel}&utm_term=${language}&utm_content=myfreetaxes`,
		fileInPerson: `${baseLinks.fileInPerson}?utm_source=online&utm_medium=calculator&utm_campaign=file_for_free_in_person&utm_id=${whiteLabel}&utm_term=${language}&utm_content=gac_file_in_person`,
		paidFiling: `${baseLinks.paidFiling}?utm_source=online&utm_medium=calculator&utm_campaign=paid_filing_options&utm_id=${whiteLabel}&utm_term=${language}&utm_content=mfb_page`
	};
}

export function generateMfbLink(lang: Locales, whiteLabel?: string) {
	let link = PUBLIC_MFB_FRONTEND_DOMAIN;

	// Automatically switch the language to Spanish
	if (lang === 'es') {
		link += '/es';
	}

	link += '/co/step-1';

	// Link to existing referrers in MFB
	if (whiteLabel === 'gac') {
		link += '?referrer=gac';
	} else if (whiteLabel === 'jeffco') {
		link += '?referrer=jeffcoHS';
	} else if (whiteLabel === 'adams') {
		link += '?referrer=achs';
	}

	return link;
}
