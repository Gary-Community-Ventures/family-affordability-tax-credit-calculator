<script lang="ts">
	export let icon = '+';
</script>

<button on:click type="button">
	{icon}
	<slot />
</button>

<style>
	button {
		background: none;
		color: var(--primary-color);
		border: none;
		font-weight: bold;
		font-size: 1em;
		opacity: 1;
		border-radius: 999999em;
		padding: 0.3em 0.8em;
		cursor: pointer;
	}

	button:hover {
		background-color: color-mix(in srgb, var(--secondary-color) 40%, transparent);
	}
</style>
