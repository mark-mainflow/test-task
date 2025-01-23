<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<section
	class="from flex h-[100svh] items-center bg-radial-[at_50%_100%] from-blue-950 to-slate-950 to-100%"
>
	<Navigation
		class="mx-auto w-full max-w-[500px]"
		links={[
			{
				content: 'Animation',
				href: '#animation'
			},
			{
				content: 'Branding',
				href: '#branding'
			},
			{
				content: 'Illustration',
				href: '#illustration'
			}
		]}
		current="#branding"
		transitionKey="navigation"
	/>
</section>
