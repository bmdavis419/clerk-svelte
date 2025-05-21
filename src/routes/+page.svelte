<script lang="ts">
	import { AuthStore } from './AuthStore.svelte';

	const authStore = new AuthStore();

	let signInDiv: HTMLDivElement;

	$effect(() => {
		if (authStore.isInitialized) {
			// authStore.clerk.mountSignIn(signInDiv);
		}
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<!-- <div bind:this={signInDiv}></div> -->
