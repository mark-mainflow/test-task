<script>
	import Card from '$lib/components/Card.svelte';
	import BingIcon from '$lib/components/icons/BingIcon.svelte';
	import { twFullConfig } from '$lib/twFullConfig';
</script>

<section class="bg-gradient bg-gradient-layering flex h-[100svh] items-center justify-center">
	<Card class="aspect-square w-[min(60vw,300px)]">
		<BingIcon class="xs:mb-5 mb-3 w-1/2" fill={twFullConfig.theme.colors.gray['500']} />
		<span class="xs:text-2xl text-lg font-light text-gray-500">Bing</span>
	</Card>
</section>

<style lang="postcss">
	.bg-gradient {
		background: linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 100%),
			radial-gradient(
				ellipse 100% 250% at 0% 0%,
				theme('colors.cyan.300') 0%,
				rgba(0, 0, 0, 0) 50%
			),
			radial-gradient(
				ellipse 150% 70% at 60% 0%,
				theme('colors.blue.500/70%') 10%,
				theme('colors.fuchsia.300/70%') 70%,
				rgba(0, 0, 0, 0) 100%
			);
	}
</style>
