<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	type Props = HTMLAttributes<HTMLDivElement>;

	let { class: className, children, ...rest }: Props = $props();
</script>

<div class={['', className]} {...rest}>{@render children?.()}</div>
