<script lang="ts">
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

	const MAX_CHILD_AMOUNT = 6;

	let loading = false;
	let hasError = false;

	let isMarried = false;
	let hasChildren = false;
	let hasIncome = false;
	let childAges: (number | null)[] = [];

	let submitted = false;

	$: {
		if (hasChildren && childAges.length === 0) {
			addChild();
		} else if (!hasChildren) {
			childAges = [];
		}
	}

	function addChild() {
		if (childAges.length >= MAX_CHILD_AMOUNT) {
			return;
		}
		childAges = [...childAges, null];
	}

	function removeChild(index: number) {
		childAges = childAges.filter((_, i) => index !== i);

		if (childAges.length === 0) {
			hasChildren = false;
		}
	}

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
			childAges.some((age) => age === null) ||
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
	<h2 class="secondary-heading">Tell us about your household</h2>
	<div class="colored-section question-container">
		<YesNo bind:value={isMarried} label="Married" id="married" />
	</div>
	<div class="question-container">
		<YesNo bind:value={hasChildren} label="Has Children" id="has-children" />
		{#if hasChildren}
			{#each childAges as item, i (i)}
				<div>
					<p class="subquestion">How old is child {i + 1}?</p>
					<span class="input-container">
						<Input
							id={`child-${i}-age`}
							label="Age"
							bind:value={item}
							errorMessage={newErrorMessage(submitted).condition(
								item === null,
								'this field is required'
							).message}
						/>
						<AddButton on:click={() => removeChild(i)} icon="&#x2212;">Remove Child</AddButton>
					</span>
				</div>
			{/each}
			<div class="add-button-container">
				{#if childAges.length < MAX_CHILD_AMOUNT}
					<AddButton on:click={addChild}>Add Child</AddButton>
				{/if}
			</div>
		{/if}
	</div>
	<div class="colored-section question-container">
		<YesNo bind:value={hasIncome} label="Has Income" id="has-income" />
		{#if hasIncome}
			{#each incomes as item, i (i)}
				<div>
					<Income bind:income={item} handleRemove={() => removeIncome(i)} {submitted} />
				</div>
			{/each}
			<div class="add-button-container">
				{#if childAges.length < MAX_CHILD_AMOUNT}
					<AddButton on:click={addIncome}>Add Income</AddButton>
				{/if}
			</div>
		{/if}
	</div>
	<div class="button-container">
		<button type="submit" disabled={loading} class="primary-button">
			{#if !loading}
				CALCULATE MY TAX CREDITS
			{:else}
				LOADING
			{/if}
		</button>
	</div>
	{#if hasError}
		<div>
			<strong class="error-message">Something went wrong</strong>
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

	.subquestion {
		font-size: 1.3em;
		margin: 0;
		padding: 1em 0 0.6em 0;
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
</style>
