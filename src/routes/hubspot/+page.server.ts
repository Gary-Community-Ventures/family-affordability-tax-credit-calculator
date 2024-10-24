import upsertContact from '$lib/server/hubSpot';
import { type Actions, fail } from '@sveltejs/kit';

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const firstName = data.get('first-name')?.toString();
		const lastName = data.get('last-name')?.toString();
		const email = data.get('email')?.toString();
		const phone = data.get('phone')?.toString();
		const uuid = data.get('uuid')?.toString();
		const consent = data.get('consent')?.toString() === 'on' ? 'true' : 'false';
		const language = data.get('language')?.toString();
		const id = data.get('id')?.toString();

		if (
			firstName === undefined ||
			firstName === '' ||
			lastName === undefined ||
			lastName === '' ||
			uuid === undefined ||
			uuid === '' ||
			language === undefined ||
			language === '' ||
			id === undefined ||
			id === '' ||
			((email === undefined || email === '') && (phone === undefined || phone === ''))
		) {
			return fail(400, { message: 'missing fields' });
		}

		await upsertContact(
			firstName,
			lastName,
			email || null,
			phone || null,
			consent,
			language,
			uuid,
			id
		);
	}
};
