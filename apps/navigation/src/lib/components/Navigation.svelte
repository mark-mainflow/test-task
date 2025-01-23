<script lang="ts">
	import Link from './Link.svelte';
	import type { CustomLink } from '$lib/types';

	type Props = {
		class?: string;
		// external sources should set active link through current prop
		links: Array<Omit<CustomLink, 'isActive'>>;
		current?: string;
		// key used for underline animation
		transitionKey?: CustomLink['transitionKey'];
	};

	let { class: className, current: currentProp, transitionKey, links }: Props = $props();

	let current = $state(currentProp);
</script>

<nav class={['relative flex justify-around', className]}>
	{#each links as link}
		<Link
			{...link}
			{transitionKey}
			isActive={current === link.href}
			onclick={() => {
				current = link.href;
			}}
		/>
	{/each}
</nav>
