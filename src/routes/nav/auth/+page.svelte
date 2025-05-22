<script lang="ts">
	import { getAuthStore } from '$lib/auth/client/AuthStore.svelte';
	import SignIn from '$lib/auth/client/SignIn.svelte';
	import UserProfile from '$lib/auth/client/UserProfile.svelte';

	const authStore = getAuthStore();

	$inspect(authStore.user);
</script>

<div class="flex w-full items-center justify-center">
	{#if authStore.user}
		<UserProfile />
	{:else}
		<SignIn />
	{/if}
</div>
