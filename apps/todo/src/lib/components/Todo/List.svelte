<script lang="ts">
	import type { TTodo } from '$lib/types';
	import { flip } from 'svelte/animate';
	import Item from './Item.svelte';

	type Props = {
		class?: string;
		todos: TTodo[];
		onTodoChange: (id: string, completed: boolean) => void;
	};

	let { class: className, todos, onTodoChange }: Props = $props();
</script>

<ul class={['max-h-[250px] space-y-4 overflow-auto', className]}>
	{#if todos.length > 0}
		{#each todos as todo (todo.id)}
			<div animate:flip={{ duration: 200 }}>
				<Item {...todo} onclick={onTodoChange} />
			</div>
		{/each}
	{:else}
		<div class="text-center">Todo list is currently empty :(</div>
	{/if}
</ul>
