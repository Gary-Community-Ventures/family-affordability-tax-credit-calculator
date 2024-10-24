<script lang="ts">
	export let label: string;
	export let value: string = '';
	export let id: string;
	export let errorMessage: string = '';

	let actualId: string;
	$: actualId = `${id}-select`;

	let hasError = false;
	$: hasError = errorMessage !== '';
</script>

<span class:has-error={hasError}>
	<select bind:value id={actualId} class:selected={value !== ''}>
		<slot />
	</select>
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

	.has-error select,
	.has-error select:focus {
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

	select:focus {
		outline-color: var(--primary-color);
	}

	select:focus + label,
	select.selected + label {
		translate: -0.5em -1em;
		scale: 0.8;
		color: var(--primary-color);
	}
</style>
