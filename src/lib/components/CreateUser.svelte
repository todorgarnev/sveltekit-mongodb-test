<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<form action="?/create" method="POST" use:enhance>
	<input type="text" name="name" placeholder="Name" />
	<input type="number" name="age" placeholder="Age" />
	<button type="submit">Add</button>
</form>

<style>
	form {
		margin-top: 2rem;
	}
</style>
