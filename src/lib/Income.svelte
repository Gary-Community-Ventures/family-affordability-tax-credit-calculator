<script lang="ts">
	import type { IncomeType } from './mfbApi';
	export let income: IncomeType = {
		frequency: '',
		amount: null,
		hours: null
	};
	export let handleRemove: () => void;
	export let id: string = '';
	export let submitted: boolean = false;

	import Input from './Input.svelte';
	import Select from './Select.svelte';
	import AddButton from './AddButton.svelte';
	import newErrorMessage from './handleError';

	$: {
		if (income.frequency !== 'hourly') {
			income.hours = null;
		}
	}
</script>

<div>
	<div>
		<p class="subquestion">How often are you paid this income?</p>
		<span class="input-container">
			<Select
				bind:value={income.frequency}
				id={`${id}-income-frequency`}
				label="Frequency"
				errorMessage={newErrorMessage(submitted).condition(
					income.frequency === '',
					'This field is required'
				).message}
			>
				<option value="weekly">Weekly</option>
				<option value="biweekly">2 Weeks</option>
				<option value="semimonthly">Twice a Month</option>
				<option value="monthly">monthly</option>
				<option value="hourly">Hourly</option>
			</Select>
			<AddButton on:click={handleRemove} icon="&#x2212;">Remove Income</AddButton>
		</span>
	</div>
	<div>
		<p class="subquestion">How much do you make</p>
		<Input
			bind:value={income.amount}
			id={`${id}-income-amount`}
			label="Amount"
			errorMessage={newErrorMessage(submitted).condition(
				income.amount === null,
				'This field is required'
			).message}
		/>
	</div>
	{#if income.frequency === 'hourly'}
		<div>
			<p class="subquestion">How many hours do you work?</p>
			<Input
				bind:value={income.hours}
				id={`${id}-income-hours-per-week`}
				label="Hours"
				errorMessage={newErrorMessage(submitted).condition(
					income.hours === null,
					'This field is required'
				).message}
			/>
		</div>
	{/if}
</div>

<style>
	.subquestion {
		font-size: 1.3em;
		margin: 0;
		padding: 1em 0 0.6em 0;
	}
</style>
