<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let todo: any;

	function remove() {
		dispatch('remove', { todo });
	}

	function toggleStatus() {
		dispatch('update', {
			todo: {
				...todo,
				complete: !todo.complete
			}
		});
	}
</script>

<tr class="bg-white border-b">
	{#if todo.complete}
		<td class="px-6 py-4"><span>{todo.no}</span></td>
		<td class="px-6 py-4"><span class="is-complete">{todo.name}</span></td>
		<td class="px-6 py-4"><span class="is-complete">{todo.age}</span></td>
		<td class="px-6 py-4">
			<button on:click={toggleStatus} class="bg-blue cursor-pointer text-lg hover:bg-blue-500">
				↪️
			</button>
		</td>
	{:else}
		<td class="px-6 py-4"><span>{todo.no}</span></td>
		<td class="px-6 py-4"><span>{todo.name}</span></td>
		<td class="px-6 py-4"><span>{todo.age}</span></td>
		<td class="px-6 py-4">
			<button
				on:click={toggleStatus}
				class="bg-primary-color cursor-pointer text-lg hover:bg-primaryDark"
			>
				✔️
			</button>
		</td>
	{/if}
	<td class="px-6 py-4">
		<button on:click={remove} class="bg-white cursor-pointer text-lg hover:bg-gray-2"> 🗑️ </button>
	</td>
</tr>

<!-- <table class="border-solid w-full text-center">
	<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Edit Data</th>
		<th>Delete Data</th>
	</tr>
	<tr>
		
	</tr>
</table> -->

<style>
	.is-complete {
		text-decoration: line-through;
		color: green;
		display: inline-block;
	}
	button {
		border-radius: 50%;
		width: 2.25em;
		height: 2.25em;
		line-height: 1.3em;
		text-align: center;
		margin-left: 0.75em;
		padding: 0;
	}
</style>
