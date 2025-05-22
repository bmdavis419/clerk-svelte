import { clerkClient } from '$lib/auth/server';

export const load = async ({ request }) => {
	const user = await clerkClient.authenticateRequest(request);

	console.log(user);

	return { user: user.isSignedIn ? 'good' : 'bad' };
};
