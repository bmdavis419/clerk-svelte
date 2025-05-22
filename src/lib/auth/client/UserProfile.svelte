<script lang="ts">
	import { dark } from '@clerk/themes';
	import { getAuthStore } from './AuthStore.svelte';

	const authStore = getAuthStore();

	let userInfoDiv: HTMLDivElement;

	$effect(() => {
		if (authStore.isInitialized) {
			authStore.clerk.mountUserProfile(userInfoDiv, {
				appearance: {
					baseTheme: dark
				}
			});
		}
	});
</script>

<div>
	<div bind:this={userInfoDiv}></div>
</div>
