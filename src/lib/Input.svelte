<script lang="ts">
	import { selectOnFocus } from './actions';

	export let label: string;
	export let value: number | null = null;
	export let id: string;
	export let errorMessage: string = '';

	let actualId: string;
	$: actualId = `${id}-input`;

	let hasError = false;
	$: hasError = errorMessage !== '';
</script>

<span class:has-error={hasError}>
	<input type="number" bind:value id={actualId} placeholder="" min="0" use:selectOnFocus />
	<label for={actualId} style:color={hasError ? 'red' : ''}>{label}</label>
	{#if hasError}
		<strong class="error-message">{errorMessage}</strong>
	{/if}
</span>

<style>
	span {
		position: relative;
		width: fit-content;
		display: inline-flex;
		flex-direction: column;
	}

	.has-error input,
	.has-error input:focus {
		border-color: red;
		outline-color: red;
	}

	.error-message {
		color: red;
		font-size: 0.8em;
	}

	label {
		position: absolute;
		top: 0.25em;
		text-align: center;
		left: 0.5em;
		background-color: white;
		padding: 0 0.3em;
		transition: all 0.2s;
		font-size: 1.2em;
		color: rgba(0, 0, 0, 0.6);
	}

	input:focus {
		outline-color: var(--primary-color);
	}

	input:focus + label,
	input:not(:placeholder-shown) + label {
		translate: -0.5em -1em;
		scale: 0.8;
		color: var(--primary-color);
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
	}
</style>
