<script lang="ts">
	export let data;
</script>

<h1>Detail</h1>
<nav>
	<a href="/">List</a>
	<span>{data.post.id}</span>
</nav>

<div>Name: {data.post.name}</div>
<div>Description {data.post.description}</div>
