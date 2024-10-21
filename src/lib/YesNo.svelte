<script lang="ts">
	export let label: string;
	export let value: boolean = false;
	export let id: string;
</script>

<div>
	<div>{label}</div>
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
	/* your styles go here */
</style>
