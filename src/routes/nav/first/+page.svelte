<script>
	const { data } = $props();
</script>

<div>
	<h1>First</h1>
	{#await data.delayed}
		<p>Loading...</p>
	{:then value}
		<p>Delayed: {value}</p>
	{:catch error}
		<p>Error: {error}</p>
	{/await}
</div>
