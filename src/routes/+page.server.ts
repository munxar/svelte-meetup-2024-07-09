import { db } from '$lib/db.server.js';

export const load = async () => {
	const items = await db.post.findMany();

	return {
		items
	};
};

export const actions = {
	default: async () => {}
};
