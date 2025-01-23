<script lang="ts">
	import { send, receive } from '@repo/ui';
	import { SmileIcon, SmileNeutralIcon } from '$lib/components/icons';
	import { twFullConfig } from '$lib/twFullConfig';
	import { flip } from 'svelte/animate';

	type Props = {
		completed: boolean;
		id: string;
		text: string;
		onclick?: (id: string, completed: boolean) => void;
	};

	let { completed, id, text, onclick }: Props = $props();
</script>

<button
	class={[
		'flex w-full cursor-pointer items-center justify-between',
		{ '!text-slate-400 line-through': completed }
	]}
	in:receive={{ key: id }}
	out:send={{ key: id }}
	onclick={() => onclick?.(id, !completed)}
>
	<div class="">{text}</div>
	{#if completed}
		<SmileIcon fill={twFullConfig.theme.colors.green['500']} />
	{:else}
		<SmileNeutralIcon fill={twFullConfig.theme.colors.slate['400']} />
	{/if}
</button>
