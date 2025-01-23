<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = HTMLButtonAttributes;

  let { class: className,  children, ...rest }: Props = $props();
</script>

<button class={['bg-green-500 px-10 py-2 rounded-3xl text-white font-bold hover:opacity-90 active:!bg-green-600', className]} {...rest}>{@render children?.()}</button>

 
