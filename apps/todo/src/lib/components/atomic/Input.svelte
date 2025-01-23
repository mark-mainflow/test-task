<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = HTMLInputAttributes & { value?: string; error?: string };

	let { class: className, error, value = $bindable(''), ...rest }: Props = $props();
</script>

<input
	class={[
		'block border border-slate-300 px-5 py-3 font-light text-gray-700 placeholder:text-slate-400',
		{ '!border-red-500': error },
		className
	]}
	bind:value
	{...rest}
/>
{#if error}
	<span class="text-red-500">{error}</span>
{/if}
