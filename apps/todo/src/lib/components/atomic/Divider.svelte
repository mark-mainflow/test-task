<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<div class={['h-1 bg-slate-300', className]}></div>
