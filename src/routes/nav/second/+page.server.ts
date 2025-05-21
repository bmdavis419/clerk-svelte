export const load = async () => {
	const delayed = new Promise<number>((resolve) => setTimeout(() => resolve(Math.random()), 2000));
	return { delayed };
};
