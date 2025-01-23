<script lang="ts">
	type Props = {
		class?: string;
		variant?: 'dark' | 'white';
		orientation?: 'horizontal' | 'vertical';
	};

	let { class: className, variant = 'dark', orientation = 'horizontal' }: Props = $props();
</script>

<div
	class={[
		'',
		{
			'bg-black': variant === 'dark',
			'bg-white': variant === 'white',
			'h-px w-full': orientation === 'horizontal',
			'h-full w-px': orientation === 'vertical'
		},
		className
	]}
></div>
