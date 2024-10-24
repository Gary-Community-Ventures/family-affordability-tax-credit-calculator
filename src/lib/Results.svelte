<script lang="ts">
	import type { TaxCredit } from './mfbApi';
	import PopUp from './PopUp.svelte';
	import t from '$lib/i18n/i18n-svelte';
	import SignUpForm from './SignUpForm.svelte';
	import { PUBLIC_MFB_FRONTEND_DOMAIN } from '$env/static/public';
	import { onMount } from 'svelte';

	export let taxCredits: TaxCredit[];
	export let uuid: string;
	export let id: string;
	export let lang: string = 'en';

	let formattedLang = lang;
	$: formattedLang = lang === 'en' ? 'en-us' : lang;

	let total = 0;
	$: total = taxCredits.reduce((acc, credit) => acc + credit.value, 0);

	let dialogOpen = false;

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
</script>

<div class="container" bind:this={container}>
	<h2 class="benefits-header">
		<div class="primary-heading">FILE 2024 TAXES &#38; RECEIVE</div>
		<div class="primary-heading">{formatNumber(total)} IN TAX CREDITS</div>
	</h2>

	<div class="results-lists">
		{#if eligbleCredits.length > 0}
			<div class="section">
				<h3 class="secondary-heading">{eligbleCredits.length} Tax Credits Found:</h3>
				<ul>
					{#each eligbleCredits as credit}
						<li>{$t.RESULTS.CREDIT_NAMES[credit.id]()}: {formatNumber(credit.value)}</li>
					{/each}
				</ul>
			</div>
		{/if}

		<div class="section">
			<h3 class="secondary-heading">Required documents</h3>
			<ul>
				<li>Social security number</li>
				<li>1099 for all household members in tax unit</li>
				<li>Form W-2 for all household members in tax unit</li>
			</ul>
		</div>
	</div>

	<div class="section links">
		<div class="link-container">
			<a href="https://google.com" class="primary-button">Something</a>
		</div>
		<div class="link-container">
			<a href="https://google.com" class="primary-button">Something else</a>
		</div>
		<div class="link-container">
			<button class="primary-button" on:click={() => (dialogOpen = !dialogOpen)}
				>Remind me to file</button
			>
		</div>
	</div>

	<p class="disclaimer">
		*this is like a super long disclaimer Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Nam at ex libero accusantium, enim magni expedita. Autem, veniam voluptatum magnam ipsam
		reprehenderit dolorum ducimus corporis rerum animi magni corrupti id?Lorem ipsum, dolor sit amet
		consectetur adipisicing elit. Voluptatibus, quos quaerat? Voluptatibus reiciendis, eaque odit
		temporibus sunt perferendis, maiores perspiciatis doloribus voluptatem quos ratione dolor
		ducimus ab laudantium, totam in!
	</p>
</div>

<h2 class="primary-heading">MFB</h2>
<p class="mfb-description">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea facilis doloribus
	consequuntur at nostrum quidem quod illo, voluptatum esse suscipit ipsa blanditiis. Et aperiam
	optio eos quam ut qui?
</p>
<div class="mfb-link-container">
	<a href={`${PUBLIC_MFB_FRONTEND_DOMAIN}/${formattedLang}/${uuid}/step-1/`} class="primary-button"
		>MyFriendBen</a
	>
</div>

<PopUp bind:open={dialogOpen}>
	<SignUpForm {uuid} {id} {lang} on:done={() => (dialogOpen = false)} />
</PopUp>

<style>
	.container {
		padding: 1rem;
		display: grid;
		grid-template-rows: 0.2fr 0.6fr 0.2fr;
		grid-template-columns: 1fr;
	}

	h2.benefits-header {
		display: flex;
		gap: 0.5em;
		flex-direction: column;
		width: fit-content;
		margin: 0;
	}

	.section {
		padding: 1.5em 0;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	ul {
		margin: 0;
		font-size: 1.3em;
		padding: 0 1em;
	}

	.link-container, .mfb-link-container {
		display: flex;
		justify-content: center;
	}

	.primary-button {
		width: 15em;
		text-align: center;
	}

	.disclaimer {
		font-size: 0.9em;
		font-style: italic;
	}

	.mfb-description {
		text-align: center;
	}

	@media (min-width: 68rem) {
		.container {
			padding: 1rem;
			display: grid;
			grid-template-rows: 2fr 6fr 2fr;
			grid-template-columns: 5fr 5fr;
		}

		.disclaimer {
			grid-row: 3 / span 1;
			grid-column: 1 / span 2;
		}

		.results-lists {
			grid-row: 1 / span 2;
			grid-column: 2 / span 1;
			border: 2px solid var(--primary-color);
			padding: 1em;
		}

		.links {
			justify-content: end;
			padding-bottom: 0;
		}

		.link-container {
			justify-content: start;
		}
	}
</style>
