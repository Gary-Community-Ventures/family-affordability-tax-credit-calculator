<script>
	import Analytics from '$lib/Analytics.svelte';
</script>

<Analytics />

<main>
	<div>
		<slot />
	</div>
</main>

<style>
	:global(html) {
		box-sizing: border-box;
	}

	:global(*, *:before, *:after) {
		box-sizing: inherit;
	}

	:root {
		font-family: trade-gothic-next-condensed, sans-serif;
		accent-color: var(--primary-color);
		--primary-color: #264e5e;
		--secondary-color: #9dcdc9;
		--header-color: var(--primary-color);
	}

	:global(button) {
		font-family: trade-gothic-next-condensed, sans-serif;
	}

	/* fix the select on Safari */
	:global(select::-ms-expand) {
		display: none;
	}

	:global(select) {
		box-shadow: none;
		outline: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background: transparent;
		background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+);
		background-repeat: no-repeat;
		background-position-x: 21px;
		background-position-y: 0px;
		border: 1px solid #dfdfdf;
		padding: 5px;
		width: 44px;
	}

	:global(input:not([type='checkbox']), select) {
		height: 2em;
		width: 20em;
		font-size: 1em;
		padding: 0 0 0 0.6em;
		border-style: solid;
		border-width: 1px;
	}

	:global(body) {
		margin: 0;
		/* prevent shift when scroll bar is hidden */
		margin-right: calc(-1 * (100vw - 100%));
		overflow-x: hidden;
	}

	:global(.primary-button) {
		display: inline-block;
		background-color: var(--primary-color);
		border: none;
		color: white;
		transition: opacity 0.1s linear;
		padding: 0.5em 1.5em;
		font-weight: bold;
		font-size: 1.5em;
		cursor: pointer;
		text-decoration: none;
	}

	:global(.primary-button:hover) {
		opacity: 0.9;
	}

	:global(.primary-button:disabled) {
		background-color: gray;
		opacity: 0.7;
		cursor: default;
	}

	:global(.primary-heading) {
		background-color: var(--secondary-color);
		color: var(--header-color);
		font-size: 2rem;
		font-weight: bold;
		padding: 0.6rem 0.5rem;
		text-align: center;
		margin: 0;
	}

	:global(.secondary-heading) {
		color: var(--primary-color);
		font-size: 1.8rem;
		font-weight: bold;
		padding: 0.2rem 0;
		margin: 0;
	}

	:global(body:has(dialog[open])) {
		overflow: hidden;
		overflow-x: auto;
	}

	main {
		max-width: 80em;
		padding-bottom: 1rem;
		margin: auto;
	}
</style>
