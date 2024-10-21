<script lang="ts">
	import Income, { type IncomeType } from './Income.svelte';
	import YesNo from './YesNo.svelte';
	import { selectOnFocus } from './actions';

	let isMarried = false;
	let hasChildren = false;
	let hasIncome = false;
	let childAges: number[] = [];

	$: {
		if (hasChildren && childAges.length === 0) {
			addChild();
		}
	}

	function addChild() {
		childAges = [...childAges, 0];
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

	$: console.log(incomes);
</script>

<form>
	<div>
		<YesNo bind:value={isMarried} label="Married" id="married" />
	</div>
	<div>
		<YesNo bind:value={hasChildren} label="Has Children" id="has-children" />
		{#if hasChildren}
			{#each childAges as item, i (i)}
				<div>
					<input type="number" bind:value={item} use:selectOnFocus min="0" />
					<button type="button" on:click={() => removeChild(i)}>Remove</button>
				</div>
			{/each}
			<div>
				<button type="button" on:click={addChild}>Add Child</button>
			</div>
		{/if}
	</div>
	<div>
		<YesNo bind:value={hasIncome} label="Has Income" id="has-income" />
		{#if hasIncome}
			{#each incomes as item, i (i)}
				<div>
					<Income bind:income={item} />
					<button type="button" on:click={() => removeIncome(i)}>Remove</button>
				</div>
			{/each}
			<div>
				<button type="button" on:click={addIncome}>Add Income</button>
			</div>
		{/if}
	</div>
	<button type="submit">Submit</button>
</form>

<style>
	/* your styles go here */
</style>
