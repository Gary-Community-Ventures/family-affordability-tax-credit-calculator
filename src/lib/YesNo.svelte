<script lang="ts">
	import t from '$lib/i18n/i18n-svelte';
	export let label: string;
	export let value: boolean = false;
	export let id: string;
	export let yesText = $t.FORM.YES_OR_NO_INPUT.YES();
	export let noText = $t.FORM.YES_OR_NO_INPUT.NO();
</script>

<div class="container">
	<p>{label}</p>
	<div>
		<input type="radio" id={`${id}-yes`} bind:group={value} value={true} />
		<label for={`${id}-yes`}>{yesText}</label>
	</div>
	<div>
		<input type="radio" id={`${id}-no`} bind:group={value} value={false} />
		<label for={`${id}-no`}>{noText}</label>
	</div>
</div>

<style>
	.container {
		font-size: 1.3em;
	}

	p {
		margin: 0;
		padding: 0.2em 0;
	}

	label {
		display: inline-block;
		font-size: 0.85em;
		translate: 0 -0.2em;
	}

	input {
		font-size: 0.7em;
		width: 1.5em;
		height: 1.5em;
		margin-top: 0.2em;
	}
</style>
