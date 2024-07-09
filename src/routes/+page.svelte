<script lang="ts">
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<form>
	<input type="text" name="q" value={data.q} />
	<button>search</button>
</form>
<a href="/create">Add</a>
{#each data.items as item}
	<div><a href="/{item.id}">{item.id}</a> {item.name}</div>
{/each}
