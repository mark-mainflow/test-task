<script lang="ts">
	import { Divider } from '$lib/components';
	import type { Snippet } from 'svelte';

	type Props = {
		class?: string;
    left: Snippet;
    right: Snippet;
	};

	let { class: className, left, right }: Props = $props();
</script>

<div class={['flex justify-center items-center space-y-12  text-nowrap', className]} style="writing-mode: vertical-lr; text-orientation: sideways">
  {@render left()}
	<Divider class='max-h-28 grow' orientation='vertical'/>
  {@render right()}
</div>
