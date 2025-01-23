<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes;

	let { class: className, children, ...rest }: Props = $props();
</script>

<a class={['text-xl font-semibold', className]} {...rest}>{@render children?.()}</a>
