<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { allErrors, errors, form, enhance } = superForm(data.form);
</script>

<h1>Create Item</h1>

<form method="post" use:enhance>
	<input class:error={$errors?.name} type="text" name="name" bind:value={$form.name} />
	{#if $errors?.name}
		<span>{$errors.name}</span>
	{/if}

	<textarea name="description" bind:value={$form.description}></textarea>
	<div>
		<a href="/">Cancel</a>
		<button>Create</button>
	</div>

	{#each $allErrors as error}
		<div>{error.messages}</div>
	{/each}
</form>

<style>
	.error {
		border-color: red;
	}
</style>
