<script>
	const { data } = $props();

	$inspect(data);
</script>

<div class="space-y-6">
	<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-800">
		<h1 class="mb-4 text-2xl font-bold">Protected Page</h1>
		<p class="text-zinc-600 dark:text-zinc-300">
			This page is only accessible to authenticated users.
		</p>
	</div>
</div>
