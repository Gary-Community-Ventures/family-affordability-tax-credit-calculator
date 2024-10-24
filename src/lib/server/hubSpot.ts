import { HUB_SPOT_API_KEY } from '$env/static/private';
import hubspot from '@hubspot/api-client';

const hubspotClient = new hubspot.Client({ accessToken: HUB_SPOT_API_KEY });

export default async function upsertContact(
	firstName: string,
	lastName: string,
	email: string | null,
	phone: string | null,
	consent: string,
	language: string,
	uuid: string,
	id: string
) {
	const properties: { [key: string]: string } = {
		firstname: firstName,
		lastname: lastName,
		ab01___tcpa_consent_to_contact: consent,
		hs_language: language,
		full_name: `${firstName} ${lastName}`,
		ab01___screener_id: id,
		ab01___uuid: uuid,
		remind_to_file_taxes: 'true'
	};

	if (email !== null) {
		properties.email = email;
	}

	if (phone !== null) {
		properties.phone = '+1' + phone;
	}

	const simplePublicObjectInputForCreate = {
		properties
	};

	try {
		await hubspotClient.crm.contacts.basicApi.create(simplePublicObjectInputForCreate);
	} catch (e) {
		// @ts-ignore
		if (e.code !== 409 || e.body?.category !== 'CONFLICT' || e.body?.message === undefined) {
			throw e;
		}

		// @ts-ignore
		const existingId = e.body.message.split(':')[1].trim();

		await hubspotClient.crm.contacts.basicApi.update(existingId, simplePublicObjectInputForCreate);
	}
}
