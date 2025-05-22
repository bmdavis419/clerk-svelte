<script>
	const { data } = $props();
</script>

<div class="space-y-6">
	<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-800">
		<h1 class="mb-4 text-2xl font-bold">Second Page</h1>
		{#await data.delayed}
			<p class="text-zinc-600 dark:text-zinc-300">Loading...</p>
		{:then value}
			<p class="text-zinc-600 dark:text-zinc-300">Delayed: {value}</p>
		{:catch error}
			<p class="text-red-600 dark:text-red-400">Error: {error}</p>
		{/await}
	</div>
</div>
