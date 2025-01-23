<script>
	import { Navbar } from '$lib/components';
	import ContentBlock from './ContentBlock.svelte';
	import Hero from './Hero.svelte';
</script>

<section class="flex min-h-[100svh] flex-col lg:flex-row">
	<Navbar />
	<Hero class="max-lg:w-full lg:grow" />
	<ContentBlock class="w-full lg:w-2/5" />
</section>
