<script lang="ts">
	import { browser } from '$app/environment';

	export let open: boolean = false;

	let dialog: HTMLDialogElement;

	let currentScroll = 0;

	$: {
		if (dialog !== undefined) {
			if (open) {
				dialog.showModal();
			} else {
				dialog.close();
			}
		}
	}

	function handleClickOutsideDialog(event: MouseEvent) {
		if (!open) {
			return;
		}
		const rect = dialog.getBoundingClientRect();
		const isInDialog =
			rect.top <= event.clientY &&
			event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX &&
			event.clientX <= rect.left + rect.width;
		if (!isInDialog) {
			open = false;
		}
	}

	$: {
		if (!browser) {
			break $;
		}
		if (open) {
			window.addEventListener('mousedown', handleClickOutsideDialog);
		} else {
			window.removeEventListener('mousedown', handleClickOutsideDialog);
		}
	}
</script>

<dialog bind:this={dialog}>
	<div>
		<button type="button" on:click={() => (open = false)} aria-label="close">&#215;</button>
		<slot />
	</div>
</dialog>

<style>
	div {
		position: relative;
		padding: 1em;
	}

	button {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 3em;
		cursor: pointer;
		background-color: unset;
		border: unset;
	}

	dialog {
		padding: 0;
	}

	dialog::backdrop {
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
		width: 100%;
		height: 100%;
	}
</style>
