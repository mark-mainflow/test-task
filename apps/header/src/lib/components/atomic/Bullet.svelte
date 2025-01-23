<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & { isActive?: boolean };

	let { class: className, isActive }: Props = $props();
</script>

<div
	class={['h-2 w-2 rounded-full bg-white opacity-50', { '!opacity-100': isActive }, className]}
></div>
