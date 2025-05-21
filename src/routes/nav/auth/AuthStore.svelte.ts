import { env } from '$env/dynamic/public';
import { Clerk } from '@clerk/clerk-js';

export class AuthStore {
	clerk: Clerk;
	isInitialized = $state(false);

	constructor() {
		const clerkPubKey = env.PUBLIC_CLERK_PUBLISHABLE_KEY;
		this.clerk = new Clerk(clerkPubKey);
		this.clerk.load().then(() => {
			this.isInitialized = true;
		});
	}
}
