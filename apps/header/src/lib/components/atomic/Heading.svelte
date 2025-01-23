<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
		children: Snippet;
	};

	let { class: className, children }: Props = $props();
</script>

<h1 class={["text-7xl sm:text-9xl leading-xs font-['Cormorant_Garamond']", className]}>{@render children()}</h1>
