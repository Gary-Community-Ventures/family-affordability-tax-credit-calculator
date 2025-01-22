<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { WHITE_LABEL_COLORS } from '$lib/whiteLabelData';

	let whiteLabel = $page.params.whiteLabel;

	$: {
		if (!browser) {
			break $;
		}

		const colors = WHITE_LABEL_COLORS[whiteLabel] ?? WHITE_LABEL_COLORS._default;

		document.documentElement.style.setProperty('--primary-color', colors.primary);
		document.documentElement.style.setProperty('--secondary-color', colors.secondary);

		if (colors.headerColor !== undefined) {
			document.documentElement.style.setProperty('--header-color', colors.headerColor);
		} else {
			document.documentElement.style.setProperty('--header-color', 'var(--primary-color)');
		}
	}
</script>

<slot />
