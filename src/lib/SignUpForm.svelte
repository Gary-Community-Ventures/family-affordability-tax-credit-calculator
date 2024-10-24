<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	import TextInput from './TextInput.svelte';
	import newErrorMessage from './handleError';
	import { digitsOnly } from './util';

	export let uuid: string;
	export let id: string;
	export let lang: string;

	const dispatch = createEventDispatcher<{ done: undefined }>();

	let loading = false;
	let submitted = false;
	let hasServerError = false;

	let firstName = '';
	let lastName = '';
	let email = '';
	let phone = '';
	$: phone = digitsOnly(phone);
	let consent = false;

	let consentErrorMessage = '';
	$: consentErrorMessage = newErrorMessage(submitted).condition(
		!consent,
		'Please check this box'
	).message;

	function hasError() {
		if (firstName === '') {
			return true;
		}

		if (lastName === '') {
			return true;
		}

		if (email === '' && phone === '') {
			return true;
		}

		if (consentErrorMessage !== '') {
			return true;
		}

		return false;
	}
</script>

<form
	method="POST"
	action="/hubspot?/create"
	use:enhance={({ cancel }) => {
		hasServerError = false;
		loading = true;
		submitted = true;

		if (hasError()) {
			loading = false;
			cancel();
		}

		return async ({ update, result }) => {
			if (result.type === 'error' || result.type === 'failure') {
				loading = false;
				hasServerError = true;
				return;
			}

			await update({ reset: false });

			loading = false;
			dispatch('done');
		};
	}}
>
	<p class="secondary-heading">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa iure id voluptate
		nesciunt ullam labore tempore iusto mollitia maiores.
	</p>
	<input type="hidden" value={uuid} name="uuid" />
	<input type="hidden" value={id} name="id" />
	<input type="hidden" value={lang} name="language" />
	<div class="input-container">
		<TextInput
			label="First Name"
			id="first-name"
			bind:value={firstName}
			errorMessage={newErrorMessage(submitted).condition(firstName === '', 'This field is required')
				.message}
		/>
	</div>
	<div class="input-container">
		<TextInput
			label="Last Name"
			id="last-name"
			bind:value={lastName}
			errorMessage={newErrorMessage(submitted).condition(lastName === '', 'This field is required')
				.message}
		/>
	</div>
	<div class="input-container">
		<TextInput
			label="Email"
			type="email"
			id="email"
			bind:value={email}
			errorMessage={newErrorMessage(submitted)
				.condition(email === '' && phone === '', 'This field is required')
				.condition(
					email !== '' && !/^.+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email),
					'please enter a valid email'
				).message}
		/>
	</div>
	<div class="input-container">
		<TextInput
			label="Phone"
			type="tel"
			id="phone"
			bind:value={phone}
			errorMessage={newErrorMessage(submitted)
				.condition(email === '' && phone === '', 'This field is required')
				.condition(phone !== '' && phone.length !== 10, 'please enter a valid phone number')
				.message}
		/>
	</div>
	<div class="input-container">
		<div class="consent-container">
			<span>
				<input
					type="checkbox"
					id="consent-checkbox"
					name="consent"
					class:has-error={consentErrorMessage !== ''}
					bind:checked={consent}
				/>
			</span>
			<label for="consent-checkbox" class="consent-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae at porro totam eos maxime
				eum magnam. Minus laudantium cupiditate asperiores quia, alias sapiente voluptate nulla
				praesentium culpa earum in porro deleniti odit pariatur aliquid nostrum. Quis itaque
				facilis, earum, illum fuga id laborum, illo omnis officia atque praesentium sequi accusamus
				aliquam magnam soluta eveniet aspernatur rem maiores debitis iste cumque et? Reiciendis,
				minus debitis. Perspiciatis doloribus alias distinctio numquam iusto sint dolorem quae
				quaerat sapiente! Deleniti id optio corporis libero iure omnis voluptate modi et ad esse
				pariatur enim, obcaecati architecto placeat quae quisquam nihil dolorum officia aperiam
				tempora cum?
			</label>
		</div>
		{#if consentErrorMessage !== ''}
			<strong class="error-message">{consentErrorMessage}</strong>
		{/if}
	</div>
	<div class="submit-button-container">
		<button type="submit" class="primary-button" disabled={loading}>
			{#if !loading}
				SUBMIT
			{:else}
				LOADING
			{/if}
		</button>
	</div>
	{#if hasServerError}
		<div>
			<strong class="error-message">Something went wrong on the server</strong>
		</div>
	{/if}
</form>

<style>
	.secondary-heading {
		text-align: center;
		padding-bottom: 1em;
	}

	.input-container {
		padding: 0.7em;
	}

	.consent-container {
		display: flex;
		gap: 0.3em;
	}

	#consent-checkbox {
		font-size: 1.2em;
		width: 1em;
		height: 1em;
		margin: 0;
	}

	.consent-text {
		font-size: 0.8em;
	}

	.error-message {
		color: red;
		font-size: 0.8em;
	}

	input.has-error {
		outline: 1px solid red;
	}

	.submit-button-container {
		display: flex;
		justify-content: center;
	}
</style>
