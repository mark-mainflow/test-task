<script lang="ts">
	import type { CustomLink } from '$lib/types';
	import Underline from './Underline.svelte';

	type Props = CustomLink;

	let { class: className, isActive, content, transitionKey, ...rest }: Props = $props();
</script>

<a
	{...rest}
	role="link"
	tabindex="0"
	class={[
		'relative text-white opacity-60 transition-opacity hover:opacity-100',
		{ '!opacity-100': isActive },
		className
	]}
>
	{content}
	{#if isActive && transitionKey}
		<Underline class="absolute -bottom-4 left-0 right-0 mx-auto" key={transitionKey} />
	{/if}
</a>
