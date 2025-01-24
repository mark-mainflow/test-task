<script lang="ts">
	import List from './List.svelte';
	import { Button, Divider, Input } from '$lib/components';
	import { onMount } from 'svelte';
	import type { TTodo } from '$lib/types';

	let todos = $state<TTodo[]>([]);
	let sortedTodos = $state<TTodo[]>([]);
	let inputValue = $state('');
	let error = $state('');

	onMount(() => {
		todos = JSON.parse(window.localStorage.getItem('todos') || '') || [];
	});

	$effect(() => {
		sortedTodos = todos.sort((a, b) => Number(b.completed) - Number(a.completed));
	});

	$effect(() => {
		window.localStorage.setItem('todos', JSON.stringify(todos));
	});

	const addTodo = (text: string) => {
		error = '';
		if (!text) return (error = `Todo description can't be empty`);

		const id = crypto.randomUUID();

		todos.push({ text, completed: false, id });
	};

	const onTodoChange = (id: string, completed: boolean) => {
		const currentTodo = todos.find((t) => t.id === id);

		if (!currentTodo) return;

		currentTodo.completed = completed;
	};

	const onKeyEvent = (e: KeyboardEvent) => {
		if (e.key !== 'Enter') return;

		addTodo(inputValue);
		inputValue = '';
	};
</script>

<div class="relative w-[clamp(320px,100%,400px)] bg-white py-8 shadow-md">
	<div class="flex flex-col items-center justify-center space-y-8 px-5">
		<div class="text-5xl font-semibold text-slate-600">
			{new Date().toLocaleString('en-US', { month: 'long' })}
		</div>

		<div class="font-semibold text-slate-300">
			{new Date().toLocaleString('en-us', { weekday: 'long' })},
			{new Date().getDate()}
		</div>
	</div>
	<Divider class="my-8 w-full" />
	<div class="px-5">
		<List todos={sortedTodos} class="mb-4" {onTodoChange} />

		<Input
			class="w-full"
			placeholder="Add Task"
			bind:value={inputValue}
			{error}
			onkeydown={onKeyEvent}
		/>

		<Button
			class="max- absolute bottom-0 left-0 right-0 mx-auto w-min translate-y-1/2"
			onclick={() => {
				addTodo(inputValue);
				inputValue = '';
			}}
		>
			Add
		</Button>
	</div>
</div>
