<script lang="ts">
	import TodoItem from './todo-item.svelte';
	import PouchDB from 'pouchdb-browser';
	import { onMount } from 'svelte';

	const localDB = new PouchDB('db');
	var remoteDB = new PouchDB('http://localhost:5984/test_couch');

	// localDB.replicate.to(remoteDB);
	// remoteDB.replicate.from(localDB);
	// console.log('Databases synchronized successfully');
	localDB
		.sync(remoteDB, {
			live: true,
			retry: true
		})
		.on('change', async () => {
			await updateTodos();
		})
		.on('error', (err: any) => {
			console.log('Replication error:', err);
		});

	let todos: any[] = [];
	let name = '';
	let age = '';

	async function updateTodos() {
		const allDocs = await localDB.allDocs({
			include_docs: true
		});
		todos = allDocs.rows.map((row: any, idx: number) => {
			return { no: idx + 1, ...row.doc };
		});
	}

	async function add(event: any) {
		const newTodo = {
			name: name,
			age: age,
			complete: false,
			createdAt: new Date().toISOString()
		};
		const addition = await localDB.post(newTodo);

		if (addition.ok) {
			// Fetch all todos from the local DB again
			await updateTodos();
		}
		name = '';
		age = '';
	}

	async function updateStatus(event: { detail: { todo: any } }) {
		const { todo } = event.detail;
		const update = await localDB.put(todo);
		if (update.ok) {
			await updateTodos();
		}
	}

	async function removeItem(event: { detail: { todo: any } }) {
		const { todo: todoToRemove } = event.detail;
		const removal = await localDB.remove(todoToRemove);
		if (removal.ok) {
			todos = todos.filter((todo) => {
				return todo._id !== todoToRemove._id;
			});
		}
	}

	// Load todos on first run
	onMount(async () => {
		await updateTodos();
	});
</script>

<div class="p-4">
	<form
		on:submit|preventDefault={add}
		class="flex flex-col justify-center items-center gap-4 shadow p-4 rounded-lg bg-orange"
	>
		<h2>Offline First Sveltekit + PouchDB + CouchDB</h2>
		<input type="text" placeholder="name" bind:value={name} class="form-input" />
		<input type="number" placeholder="age" bind:value={age} class="form-input" />
		<button type="submit" class=" btn-fill-error h-11 w-fill">Add data</button>
	</form>

	<div class="relative overflow-x-auto mt-4 h-300px shadow-lg">
		<table class="w-full text-sm text-left rtl:text-right text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="px-6 py-3"> No </th>
					<th scope="col" class="px-6 py-3"> Name </th>
					<th scope="col" class="px-6 py-3"> Age </th>
					<th scope="col" class="px-6 py-3"> Edit Status </th>
					<th scope="col" class="px-6 py-3"> Delete Data </th>
				</tr>
			</thead>
			<tbody>
				{#each todos as todo}
					<TodoItem {todo} on:remove={removeItem} on:update={updateStatus} />
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style></style>
