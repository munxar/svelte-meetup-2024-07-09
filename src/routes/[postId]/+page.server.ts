import { db } from '$lib/db.server.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const post = await db.post.findUnique({ where: { id: params.postId } });
	if (!post) {
		error(404);
	}
	return {
		post
	};
};
