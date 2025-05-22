<script lang="ts">
	import { dark } from '@clerk/themes';
	import { getAuthStore } from './AuthStore.svelte';

	const authStore = getAuthStore();

	let userButtonDiv: HTMLDivElement;

	$effect(() => {
		if (authStore.isInitialized) {
			authStore.clerk.mountUserButton(userButtonDiv, {
				appearance: {
					baseTheme: dark
				}
			});
		}
	});
</script>

<div>
	<div bind:this={userButtonDiv}></div>
</div>
