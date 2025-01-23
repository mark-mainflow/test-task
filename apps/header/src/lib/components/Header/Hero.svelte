<script lang="ts">
	import { Heading, SocialLink, Text } from '$lib/components';
	import Bullet from '../atomic/Bullet.svelte';
	import Divider from '../atomic/Divider.svelte';

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<div
	class={[
		"flex flex-col items-start justify-end bg-[url('/img/woman-shot-close.webp')] bg-cover pl-16 pr-12 text-white lg:pr-8",
		className
	]}
>
	<div class=" flex min-h-[700px] w-full flex-col justify-between pb-8 max-lg:mt-36 sm:h-2/3">
		<div class="h-20 w-full items-center justify-between space-y-8 sm:flex">
			<Text class="sm:max-w-20">Summer Collection 2020</Text>
			<div class="flex max-w-80 items-center space-x-4">
				<Text>Next</Text>
				<Divider class="min-w-24" variant="white" />
				<Text>Previous</Text>
			</div>
		</div>
		<Heading class="max-w-[600px] max-sm:order-first">Summer 2020</Heading>
		<div
			class="flex h-20 w-full flex-col items-center justify-between max-sm:space-y-8 sm:flex-row"
		>
			<div class="mr-auto space-x-8">
				<SocialLink class="" href="/" target="_blank">FB</SocialLink>
				<SocialLink class="" href="/" target="_blank">PIN</SocialLink>
				<SocialLink class="" href="/" target="_blank">IG</SocialLink>
			</div>
			<nav class="flex space-x-20">
				<Bullet />
				<Bullet />
				<Bullet isActive />
			</nav>
		</div>
	</div>
</div>
