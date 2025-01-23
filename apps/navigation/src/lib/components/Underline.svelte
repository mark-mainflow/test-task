<script lang="ts">
	import { receive, send } from '@repo/ui';

	type Props = {
		class?: string;
		key: string | number;
	};

	let { class: className, key }: Props = $props();
</script>

<div
	in:receive={{ key }}
	out:send={{ key }}
	class={['absolute h-1 w-14 rounded-full bg-white', className]}
></div>
