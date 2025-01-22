import { WHITE_LABELS } from '$lib/whiteLabelData';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './[lang]/$types';

export const load: LayoutLoad = ({ params }) => {
	redirect(302, `/${params.whiteLabel}/en`);
};

export const prerender = true;

export const entries = () => {
	return WHITE_LABELS.map((whiteLabel) => {
		return { whiteLabel: whiteLabel };
	});
};
