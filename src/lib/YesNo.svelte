<script lang="ts">
	export let label: string;
	export let value: boolean = false;
	export let id: string;
</script>

<div class="container">
	<p>{label}</p>
	<div>
		<input type="radio" id={`${id}-yes`} bind:group={value} value={true} />
		<label for={`${id}-yes`}>Yes</label>
	</div>
	<div>
		<input type="radio" id={`${id}-no`} bind:group={value} value={false} />
		<label for={`${id}-no`}>No</label>
	</div>
</div>

<style>
	.container {
		font-size: 1.3em;
	}

	p {
		margin: 0;
		padding: .2em 0;
	}

	label {
		display: inline-block;
		font-size: .85em;
		translate: 0 -.2em;
	}

	input {
		font-size: .7em;
		width: 1.5em;
		height: 1.5em;
		margin-top: 0.2em;
	}
</style>
