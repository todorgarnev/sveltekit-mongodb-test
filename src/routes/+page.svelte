<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	$: ({ users } = data);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each users as user}
	<div>
		<span>{user.name}</span>
		<span>{user.age}</span>
	</div>
{/each}
