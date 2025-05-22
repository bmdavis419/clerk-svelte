<script>
	import { getAuthStore } from '$lib/auth/client/AuthStore.svelte';

	const authStore = getAuthStore();
</script>

<div class="space-y-6">
	<div class="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-800">
		<h1 class="mb-4 text-2xl font-bold">Welcome</h1>
		<p class="text-zinc-600 dark:text-zinc-300">
			This is your homepage with Clerk authentication integration.
		</p>
	</div>
</div>
