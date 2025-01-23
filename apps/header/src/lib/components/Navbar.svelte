<script>
	import { Text, LanguageSwitch } from '$lib/components';
	import { BurgerIcon } from '$lib/components/icons';
</script>

<header
	class="absolute left-0 right-0 top-0 z-[999] flex h-20 w-full items-center justify-between pl-16 pr-12"
>
	<div class="flex items-center space-x-4">
		<BurgerIcon class="" />
		<Text class="text-white ">Menu</Text>
	</div>
	<LanguageSwitch />
</header>
