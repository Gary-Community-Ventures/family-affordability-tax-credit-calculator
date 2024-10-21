export function selectOnFocus(node: HTMLInputElement) {
	const listener = () => node.select();

	node.addEventListener('focus', listener);

	return {
		destroy() {
			node.removeEventListener('focus', listener);
		}
	};
}
