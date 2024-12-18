<script lang="ts">
	import t from '$lib/i18n/i18n-svelte';
	import Income from './Income.svelte';
	import type { IncomeType } from './mfbApi';
	import YesNo from './YesNo.svelte';
	import Input from './Input.svelte';
	import AddButton from './AddButton.svelte';
	import newErrorMessage from './handleError';

	export let handleSubmit: (
		isMarried: boolean,
		childAges: number[],
		incomes: IncomeType[]
	) => void | Promise<void>;

	const MAX_HOUSEHOLD_SIZE = 8;

	let loading = false;
	let hasError = false;

	let isMarried = false;
	let hasIncome = false;

	let zeroTo4: number | null = 0;
	let fiveTo16: number | null = 0;

	let householdSize = 0;
	$: householdSize = (zeroTo4 ?? 0) + (fiveTo16 ?? 0) + (isMarried ? 1 : 0) + 1;

	let submitted = false;

	let incomes: IncomeType[] = [];

	$: {
		if (hasIncome && incomes.length === 0) {
			addIncome();
		} else if (!hasIncome) {
			incomes = [];
		}
	}

	function addIncome() {
		incomes = [...incomes, { frequency: '', amount: null, hours: null }];
	}

	function removeIncome(index: number) {
		incomes = incomes.filter((_, i) => index !== i);

		if (incomes.length === 0) {
			hasIncome = false;
		}
	}

	async function onSubmit() {
		submitted = true;
		if (
			loading ||
			householdSize > MAX_HOUSEHOLD_SIZE ||
			incomes.some(
				(income) =>
					income.frequency === '' ||
					income.amount === null ||
					(income.frequency === 'hourly' && income.hours === null)
			)
		) {
			return;
		}

		loading = true;
		hasError = false;

		const childAges = [...Array(zeroTo4 ?? 0).fill(4), ...Array(fiveTo16 ?? 0).fill(10)];
		try {
			await handleSubmit(isMarried, childAges as number[], incomes);
		} catch (error) {
			hasError = true;
			console.error(error);
		}
		loading = false;
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<h2 class="secondary-heading">{$t.FORM.TITLE()}</h2>
	<div class="colored-section question-container">
		<YesNo
			bind:value={isMarried}
			label={$t.FORM.QUESTIONS.MARRIED.QUESTION()}
			id="married"
			yesText={$t.FORM.QUESTIONS.MARRIED.MARRIED()}
			noText={$t.FORM.QUESTIONS.MARRIED.SINGLE()}
		/>
	</div>
	<div class="question-container colored-section">
		<p class="question">{$t.FORM.QUESTIONS.CHILDREN.ZERO_TO_4.QUESTION()}</p>
		<Input
			label={$t.FORM.QUESTIONS.CHILDREN.ZERO_TO_4.LABEL()}
			bind:value={zeroTo4}
			id="zero-four"
			errorMessage={newErrorMessage(submitted).condition(
				householdSize > MAX_HOUSEHOLD_SIZE,
				$t.FORM.QUESTIONS.CHILDREN.ERROR()
			).message}
		/>
	</div>
	<div class="question-container">
		<p class="question">{$t.FORM.QUESTIONS.CHILDREN.FIVE_TO_16.QUESTION()}</p>
		<Input
			label={$t.FORM.QUESTIONS.CHILDREN.FIVE_TO_16.LABEL()}
			bind:value={fiveTo16}
			id="zero-four"
			errorMessage={newErrorMessage(submitted).condition(
				householdSize > MAX_HOUSEHOLD_SIZE,
				$t.FORM.QUESTIONS.CHILDREN.ERROR()
			).message}
		/>
	</div>
	<div class="colored-section question-container">
		<YesNo
			bind:value={hasIncome}
			label={isMarried
				? $t.FORM.QUESTIONS.INCOME.QUESTION_WITH_SPOUSE()
				: $t.FORM.QUESTIONS.INCOME.QUESTION()}
			id="has-income"
		/>
		{#if hasIncome}
			{#each incomes as item, i (i)}
				<div>
					<Income bind:income={item} handleRemove={() => removeIncome(i)} {submitted} />
				</div>
				{#if i < incomes.length - 1}
					<div class="line" />
				{/if}
			{/each}
			<div class="add-button-container">
				<AddButton on:click={addIncome}>{$t.FORM.QUESTIONS.INCOME.ADD_INCOME()}</AddButton>
			</div>
		{/if}
	</div>
	<div class="button-container">
		<button type="submit" disabled={loading} class="primary-button">
			{#if !loading}
				{$t.FORM.SUBMIT()}
			{:else}
				{$t.FORM.LOADING()}
			{/if}
		</button>
	</div>
	{#if hasError}
		<div>
			<strong class="error-message">{$t.FORM.ERROR()}</strong>
		</div>
	{/if}
</form>

<style>
	form {
		padding: 1em;
	}

	.colored-section {
		background-color: #faf9f9;
	}

	.question-container {
		padding: 1em 0;
	}

	.add-button-container {
		padding: 1em 0;
	}

	.button-container {
		padding: 1em 0;
		display: flex;
		justify-content: center;
	}

	.error-message {
		color: red;
		font-size: 0.8em;
	}

	.line {
		border-bottom: 1px solid #707070;
		width: 90%;
		max-width: 30em;
		margin: 1.5em 0 0 1em;
	}

	.question {
		margin: 0;
		padding: 0.5em 0;
		font-size: 1.3em;
	}
</style>
