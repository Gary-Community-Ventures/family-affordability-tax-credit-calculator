<script lang="ts">
	import t, { locale } from '$lib/i18n/i18n-svelte';
	import Form from '$lib/Form.svelte';
	import MfbApi, { type IncomeType, type TaxCredit } from '$lib/mfbApi';
	import Results from '$lib/Results.svelte';
	import { page } from '$app/stores';
	import googleTranslateSelect from '$lib/googleTranslate';

	const mfbApi = new MfbApi();

	let taxCredits: TaxCredit[] = [];

	async function handleSubmit(isMarried: boolean, childAges: number[], incomes: IncomeType[]) {
		taxCredits = [];
		mfbApi.updateData(isMarried, childAges, incomes);
		await mfbApi.updateScreen();
		taxCredits = await mfbApi.getResults();
	}
</script>

<div class="header">
	<h1 class="primary-heading">{$t.MAIN.TITLE()}</h1>
	<p>{$t.MAIN.DESCRIPTION()}</p>
</div>

<div use:googleTranslateSelect={$locale} class="translate-input"></div>

<Form {handleSubmit} />

{#if mfbApi.uuid !== null && mfbApi.id !== null && taxCredits.length !== 0}
	<Results {taxCredits} lang={$page.params.lang} />
{/if}

<style>
	.header {
		padding: 1rem;
		margin: 0;
	}

	.translate-input {
		padding-left: 1rem;
	}
</style>
