<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		variant?: 'outline' | 'primary';
		children: Snippet;
	};

	let { class: className, variant = 'outline', children }: Props = $props();
</script>

<button class={['flex justify-center items-center font-bold px-8 py-5', `variant-${variant}`, className]}>{@render children()}</button>


<style lang="postcss">
  .variant-outline {
    @apply border-2 border-black;
    @apply hover:bg-black hover:text-white transition-colors;
		@apply active:opacity-80;
  }
</style>
