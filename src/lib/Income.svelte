<script lang="ts">
	import t from '$lib/i18n/i18n-svelte';
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
		<p class="subquestion">{$t.FORM.QUESTIONS.INCOME.FREQUENCY.QUESTION()}</p>
		<span class="input-container">
			<Select
				bind:value={income.frequency}
				id={`${id}-income-frequency`}
				label={$t.FORM.QUESTIONS.INCOME.FREQUENCY.LABEL()}
				errorMessage={newErrorMessage(submitted).condition(
					income.frequency === '',
					$t.FORM.QUESTIONS.INCOME.ERROR()
				).message}
			>
				<option value="weekly">{$t.FORM.QUESTIONS.INCOME.FREQUENCY.OPTIONS.WEEKLY()}</option>
				<option value="biweekly">{$t.FORM.QUESTIONS.INCOME.FREQUENCY.OPTIONS.BIWEEKLY()}</option>
				<option value="semimonthly"
					>{$t.FORM.QUESTIONS.INCOME.FREQUENCY.OPTIONS.SEMIMONTHLY()}</option
				>
				<option value="monthly">{$t.FORM.QUESTIONS.INCOME.FREQUENCY.OPTIONS.MONTHLY()}</option>
				<option value="hourly">{$t.FORM.QUESTIONS.INCOME.FREQUENCY.OPTIONS.HOURLY()}</option>
			</Select>
			<AddButton on:click={handleRemove} icon="&#x2212;"
				>{$t.FORM.QUESTIONS.INCOME.REMOVE_INCOME()}</AddButton
			>
		</span>
	</div>
	<div>
		<p class="subquestion">{$t.FORM.QUESTIONS.INCOME.AMOUNT.QUESTION()}</p>
		<Input
			bind:value={income.amount}
			id={`${id}-income-amount`}
			label={$t.FORM.QUESTIONS.INCOME.AMOUNT.LABEL()}
			errorMessage={newErrorMessage(submitted).condition(
				income.amount === null,
				$t.FORM.QUESTIONS.INCOME.ERROR()
			).message}
		/>
	</div>
	{#if income.frequency === 'hourly'}
		<div>
			<p class="subquestion">{$t.FORM.QUESTIONS.INCOME.HOURS.QUESTION()}</p>
			<Input
				bind:value={income.hours}
				id={`${id}-income-hours-per-week`}
				label={$t.FORM.QUESTIONS.INCOME.HOURS.LABEL()}
				errorMessage={newErrorMessage(submitted).condition(
					income.hours === null,
					$t.FORM.QUESTIONS.INCOME.ERROR()
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
