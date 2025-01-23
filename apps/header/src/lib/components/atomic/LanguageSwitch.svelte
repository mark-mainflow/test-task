<script lang="ts">
	import { Text } from '$lib/components';

	type Props = {
		locale?: TLocale;
	};

	let { locale = $bindable('eng') }: Props = $props();
</script>

<div class="flex items-center space-x-16">
	<Text
		class={[
			'cursor-pointer font-bold text-white opacity-50 lg:text-black',
			{ '!opacity-100': locale === 'eng' }
		]}
		onclick={() => (locale = 'eng')}
	>
		ENG
	</Text>
	<Text
		class={[
			'cursor-pointer font-bold text-white opacity-50 lg:text-black',
			{ '!opacity-100': locale === 'fr' }
		]}
		onclick={() => (locale = 'fr')}
	>
		FR
	</Text>
</div>
