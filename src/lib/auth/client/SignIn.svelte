<script lang="ts">
	import { dark } from '@clerk/themes';
	import { getAuthStore } from './AuthStore.svelte';

	const authStore = getAuthStore();

	let signInDiv: HTMLDivElement;

	$effect(() => {
		if (authStore.isInitialized) {
			authStore.clerk.mountSignIn(signInDiv, {
				appearance: {
					baseTheme: dark
				}
			});
		}
	});
</script>

<div>
	<div bind:this={signInDiv}></div>
</div>
