import { db } from '$lib/db.server.js';
import { redirect } from '@sveltejs/kit';
import { fail, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const postSchema = z.object({
	name: z.string().min(3).max(100),
	description: z.string().min(4).optional()
});

export const load = async () => {
	const form = await superValidate(zod(postSchema));

	return {
		form
	};
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(postSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		if (form.data.description === 'liip') {
			return setError(form, 'description', 'hahahahhaahha');
		}
		await db.post.create({ data: form.data });

		redirect(303, '/');
	}
};
