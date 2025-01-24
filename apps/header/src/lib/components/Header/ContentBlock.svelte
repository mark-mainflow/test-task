<script lang="ts">
	import { Button, Text } from '$lib/components';
  import Sidebar from './Sidebar.svelte';

  type Props = {
    class?: string;
  }

  let { class: className }: Props = $props();
</script>

<div class={["bg-beige relative flex min-h-[100svh] flex-col items-stretch justify-end bg-orange-50 py-12", className]}>
  <Sidebar class="absolute top-0 bottom-0 right-4 lg:right-12">
    {#snippet left()}
      <Text>Ref. 66877787</Text>
    {/snippet}
    {#snippet right()}
      <Text>White loose dress</Text>
    {/snippet}
  </Sidebar>
  <div class="ml-1/10 mr-12">
    <img
      class="ml-auto lg:ml-4 min-[1080px]:ml-[15%] xl:ml-[30%] aspect-[4/6] w-full sm:w-2/4 lg:w-60 object-cover"
      alt="extremely cool man in sunglasses standing"
      src="/img/extremely-cool-man.webp"
    />
    <div class="mt-8 flex flex-col sm:flex-row items-end justify-between space-x-8 space-y-8">
      <img
        class="aspect-[4/6] sm:w-80 lg:w-44 object-cover"
        alt="extremely cool man in sunglasses standing with hand in a pocket"
        src="/img/extremely-cool-man-2.webp"
      />
      <Button class="w-full max-w-[250px]">SHOP NOW</Button>
    </div>
  </div>
</div>