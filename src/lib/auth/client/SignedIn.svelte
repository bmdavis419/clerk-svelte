<script lang="ts">
	import { getAuthStore } from './AuthStore.svelte';
	import type { Snippet } from 'svelte';

	const authStore = getAuthStore();

	const { children } = $props<{
		children: Snippet;
	}>();
</script>

{#if authStore.isInitialized && authStore.user}
	{@render children()}
{/if}
