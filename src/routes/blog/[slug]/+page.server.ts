import { error } from '@sveltejs/kit';
import { render } from 'svelte/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await import(`../../../content/blog/${params.slug}.svx`);
		const { body } = render(post.default);
		return {
			html: body,
			meta: { ...post.metadata, slug: params.slug }
		};
	} catch {
		error(404, `Post "${params.slug}" not found`);
	}
};
