import { env } from '$env/dynamic/public';
import * as clerkPkg from '@clerk/clerk-js';
import type { UserResource } from '@clerk/types';
import { getContext, setContext } from 'svelte';

class AuthStore {
	clerk: clerkPkg.Clerk;
	isInitialized = $state(false);
	user = $state<UserResource | null>(null);

	constructor() {
		const clerkPubKey = env.PUBLIC_CLERK_PUBLISHABLE_KEY;
		this.clerk = new clerkPkg.Clerk(clerkPubKey);
		this.clerk.load().then(() => {
			this.isInitialized = true;
		});

		$effect(() => {
			if (this.isInitialized) {
				console.log('ADDING LISTENER');
				const listener = this.clerk.addListener((event) => {
					if (event.user) {
						this.user = event.user;
					} else {
						this.user = null;
					}
				});

				return () => {
					listener();
				};
			}
		});
	}
}

const DEFAULT_KEY = '$_auth_store';

export const getAuthStore = (key = DEFAULT_KEY) => {
	const store = getContext<AuthStore>(key);
	if (!store) {
		throw new Error(
			`AuthStore not found. Please ensure you have initalized the AuthStore in your app.`
		);
	}
	return store;
};

export const setAuthStore = (key = DEFAULT_KEY) => {
	const store = new AuthStore();
	return setContext(key, store);
};
