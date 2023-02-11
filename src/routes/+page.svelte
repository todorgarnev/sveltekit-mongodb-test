<script lang="ts">
	import { enhance } from "$app/forms";
	import CreateUser from "$lib/components/CreateUser.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	$: ({ users } = data);
</script>

<h1>Users</h1>

{#each users as user}
	<form class="user" method="POST" use:enhance>
		<span>{user.name}</span>
		<span>{user.age}</span>
		<button formaction={`?/delete&id=${user._id}`}>Delete</button>
	</form>
{/each}


<CreateUser />

<style>
	.user:not(:last-child) {
		margin-bottom: 1rem;
	}

	button {
		margin-left: 1rem;
		cursor: pointer;
	}
</style>