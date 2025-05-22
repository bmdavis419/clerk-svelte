<script lang="ts">
	import '../app.css';
	import { setAuthStore } from '$lib/auth/client/AuthStore.svelte';
	import UserButton from '$lib/auth/client/UserButton.svelte';

	setAuthStore();

	let { children } = $props();
</script>

<svelte:head>
	<title>Svelte + Clerk</title>
	<meta name="description" content="Demo showcase of Svelte + Clerk" />
</svelte:head>

<div class="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
	<nav class="flex w-full items-center justify-between bg-zinc-100 p-4 shadow-md dark:bg-zinc-800">
		<div class="flex gap-6">
			<a href="/" class="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Home</a>
			<a href="/nav/first" class="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
				>First</a
			>
			<a href="/nav/second" class="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
				>Second</a
			>
			<a href="/nav/auth" class="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
				>Auth</a
			>
			<a
				href="/nav/protected"
				class="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Protected</a
			>
			<a href="/nav/blog" class="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
				>Blog</a
			>
		</div>
		<UserButton />
	</nav>
	<main class="mx-auto max-w-7xl p-6">
		{@render children()}
	</main>
</div>
