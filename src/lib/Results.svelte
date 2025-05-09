<script lang="ts">
	import type { TaxCredit } from './mfbApi';
	import t, { locale } from '$lib/i18n/i18n-svelte';
	import { onMount } from 'svelte';
	import { generateLinks, generateMfbLink, type Links } from './whiteLabelData';
	import { page } from '$app/stores';

	export let taxCredits: TaxCredit[];

	let total = 0;
	$: total = taxCredits.reduce((acc, credit) => acc + credit.value, 0);

	const formatNumber = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		trailingZeroDisplay: 'stripIfInteger',
		maximumFractionDigits: 0
	}).format;

	let eligbleCredits: TaxCredit[] = [];

	$: eligbleCredits = taxCredits
		.filter((credit) => credit.value > 0)
		.sort((a, b) => b.value - a.value);

	let container: HTMLElement;

	onMount(() => {
		container.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});

	let whiteLabel = $page.params.whiteLabel;
	let links: Links;
	$: {
		links = generateLinks($locale, whiteLabel);
	}

	let mfbLink = generateMfbLink($locale, whiteLabel);
</script>

<div class="container" bind:this={container}>
	<h2 class="benefits-header">
		<div class="primary-heading results-heading">{$t.RESULTS.TITLE_START()}</div>
		{#if $locale === 'es'}
			<div class="primary-heading results-heading">
				{$t.RESULTS.TITLE_MIDDLE(formatNumber(total))}
			</div>
		{/if}
		<div class="primary-heading results-heading">{$t.RESULTS.TITLE_END(formatNumber(total))}</div>
	</h2>

	{#if eligbleCredits.length > 0}
		<div class="results-lists">
			<div class="section tax-values">
				<h3 class="secondary-heading">{$t.RESULTS.CREDITS_FOUND_TITLE(eligbleCredits.length)}</h3>
				<ul>
					{#each eligbleCredits as credit}
						<li>{$t.RESULTS.CREDIT_NAMES[credit.id]()} {formatNumber(credit.value)}</li>
					{/each}
				</ul>
			</div>

			<!-- <div class="section"> -->
			<!-- 	<h3 class="secondary-heading">{$t.RESULTS.REQUIRED_DOCUMENTS.TITLE()}</h3> -->
			<!-- 	<ul> -->
			<!-- 		<li>{$t.RESULTS.REQUIRED_DOCUMENTS.ID()}</li> -->
			<!-- 		<li>{$t.RESULTS.REQUIRED_DOCUMENTS.SSN()}</li> -->
			<!-- 		<li>{$t.RESULTS.REQUIRED_DOCUMENTS.BIRTH_DATES()}</li> -->
			<!-- 		<li>{$t.RESULTS.REQUIRED_DOCUMENTS.W2()}</li> -->
			<!-- 		<li>{$t.RESULTS.REQUIRED_DOCUMENTS.BANK_ACCOUNT()}</li> -->
			<!-- 		<li>{$t.RESULTS.REQUIRED_DOCUMENTS.PRIOR_TAX_RETURNS()}</li> -->
			<!-- 		<li> -->
			<!-- 			{$t.RESULTS.REQUIRED_DOCUMENTS.IP_PIN()} -->
			<!-- 			<a -->
			<!-- 				href="http://irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin" -->
			<!-- 				class="ip-pin-link">{$t.RESULTS.REQUIRED_DOCUMENTS.IP_PIN_LINK_TEXT()}</a -->
			<!-- 			>. -->
			<!-- 		</li> -->
			<!-- 	</ul> -->
			<!-- </div> -->
		</div>
	{/if}

	<p class="disclaimer">* {$t.RESULTS.DISCLAIMER()}</p>

	<div class="section links">
		<h3 class="primary-heading ways-to-file">{$t.RESULTS.FILE_FOR_FREE.TITLE()}</h3>
		<div class="link-container">
			<a href={links.fileOnline} target="_blank" class="primary-button"
				>{$t.RESULTS.FILE_FOR_FREE.ONLINE()}</a
			>
		</div>
		<div class="link-container">
			<a href={links.fileInPerson} target="_blank" class="primary-button"
				>{$t.RESULTS.FILE_FOR_FREE.IN_PERSON()}</a
			>
		</div>
		<h3 class="primary-heading other-filing-options ways-to-file">
			{$t.RESULTS.OTHER_FILING_OPTIONS.TITLE()}
		</h3>
		<div class="link-container">
			<a href={links.paidFiling} target="_blank" class="primary-button"
				>{$t.RESULTS.OTHER_FILING_OPTIONS.PAID()}</a
			>
		</div>
		{#if whiteLabel === 'gac'}
			<div class="link-container">
				<a
					href="https://www.freetaxusa.com/?utm_source=get_ahead_colorado"
					target="_blank"
					class="primary-button">{$t.RESULTS.OTHER_FILING_OPTIONS.FREE_TAX_USA()}</a
				>
			</div>
		{/if}
	</div>
</div>

<h2 class="primary-heading">{$t.RESULTS.MFB.TITLE()}</h2>
<p class="mfb-description">{$t.RESULTS.MFB.DESCRIPTION()}</p>
<div class="mfb-link-container">
	<a href={mfbLink} class="primary-button" target="_blank">{$t.RESULTS.MFB.BUTTON()}</a>
</div>

<style>
	.container {
		padding: 1rem;
	}

	h2.benefits-header {
		display: flex;
		gap: 0.5em;
		flex-direction: column;
		width: fit-content;
		margin: 0;
	}

	.results-heading {
		text-align: start;
		width: fit-content;
	}

	.section {
		padding: 1.5em 0;
	}

	div.tax-values {
		padding-bottom: 1rem;
	}

	.links {
		display: flex;
		justify-content: end;
		flex-direction: column;
		gap: 0.5em;
	}

	ul {
		margin: 0;
		font-size: 1.3em;
		padding: 0 1em;
	}

	li {
		padding: 0.2em 0;
	}

	/* .ip-pin-link { */
	/* 	color: var(--primary-color); */
	/* } */

	.link-container,
	.mfb-link-container {
		display: flex;
		justify-content: center;
	}

	.primary-button {
		width: 15em;
		text-align: center;
	}

	.disclaimer {
		padding: 1rem 0;
		margin: 0;
		font-size: 0.9em;
		font-style: italic;
	}

	.mfb-description {
		text-align: center;
	}

	@media (min-width: 80rem) {
		h2.benefits-header {
			flex-wrap: nowrap;
			flex-direction: row;
			justify-content: center;
			gap: 0;
			background-color: var(--secondary-color);
			width: 100%;
		}
		/* .container { */
		/* 	padding: 1rem; */
		/* 	display: grid; */
		/* 	grid-template-rows: 2fr 6fr 1fr; */
		/* 	grid-template-columns: 5fr 5fr; */
		/* } */
		/**/
		/* h2.benefits-header { */
		/* 	grid-row: 1 / span 1; */
		/* 	grid-column: 1 span 1; */
		/* } */
		/**/
		/* .disclaimer { */
		/* 	grid-row: 3 / span 1; */
		/* 	grid-column: 1 / span 2; */
		/* } */
		/**/
		/* .results-lists { */
		/* 	grid-row: 1 / span 2; */
		/* 	grid-column: 2 / span 1; */
		/* 	border: 2px solid var(--primary-color); */
		/* 	padding: 1em; */
		/* } */
		/**/
		/* .links { */
		/* 	grid-row: 2 / span 1; */
		/* 	grid-column: 1 / span 1; */
		/* 	padding-bottom: 0; */
		/* } */
		/**/
		/* .link-container { */
		/* 	justify-content: start; */
		/* } */
		/**/
		/* .ways-to-file { */
		/* 	width: fit-content; */
		/* 	text-align: start; */
		/* } */
		/**/
		/* .other-filing-options { */
		/* 	margin-top: 1em; */
		/* } */
		/**/
		/* .section { */
		/* 	padding: 0; */
		/* } */
	}
</style>
