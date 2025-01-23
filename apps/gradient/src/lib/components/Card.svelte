<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement>;

	let { class: className, children, ...rest }: Props = $props();
</script>

<div class={['bg-white rounded-1/4 flex flex-col items-center justify-center p-5 shadow-xl', className]}>
  {@render children?.()}
</div>
