import { error } from '@sveltejs/kit';
import { render } from 'svelte/server';
import { postSchema } from '$lib/data/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await import(`../../../content/blog/${params.slug}.svx`);
		const result = postSchema.safeParse(post.metadata);

		if (!result.success) {
			const errors = result.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join(', ');
			error(500, `Invalid frontmatter in ${params.slug}.svx: ${errors}`);
		}

		if (result.data.draft) {
			error(404, `Post "${params.slug}" not found`);
		}

		const { body } = render(post.default);
		return {
			html: body,
			meta: { ...result.data, slug: params.slug }
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e) throw e;
		error(404, `Post "${params.slug}" not found`);
	}
};
