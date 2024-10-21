<script context="module" lang="ts">
	export type IncomeType = {
		frequency: string;
		amount: number | null;
		hours: number | null;
	};
</script>

<script lang="ts">
	export let income: IncomeType = {
		frequency: '',
		amount: null,
		hours: null
	};

	import { selectOnFocus } from './actions';
	export let id: string = '';

	$: {
		if (income.frequency !== 'hourly') {
			income.hours = null;
		}
	}
</script>

<div>
	<div>
		<label for={`${id}-income-frequency`}>Income frequency</label>
	</div>
	<div>
		<select bind:value={income.frequency} id={`${id}-income-frequency`}>
			<option value="weekly">Weekly</option>
			<option value="biweekly">2 Weeks</option>
			<option value="twiceAMonth">Twice a Month</option>
			<option value="monthly">monthly</option>
			<option value="hourly">Hourly</option>
		</select>
	</div>
	<div>
		<label for={`${id}-income-amount`}>Income amount</label>
	</div>
	<div>
		<input
			type="number"
			bind:value={income.amount}
			id={`${id}-income-amount`}
			min="0"
			use:selectOnFocus
		/>
	</div>
	{#if income.frequency === 'hourly'}
		<div>
			<label for={`${id}-income-hours-per-week`}>Hours per week</label>
		</div>
		<div>
			<input
				type="number"
				bind:value={income.hours}
				id={`${id}-income-hours-per-week`}
				min="0"
				use:selectOnFocus
			/>
		</div>
	{/if}
</div>

<style>
	/* your styles go here */
</style>
