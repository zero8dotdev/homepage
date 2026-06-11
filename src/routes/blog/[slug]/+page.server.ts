import { error } from '@sveltejs/kit';
import { render } from 'svelte/server';
import { getAllPosts, postSchema } from '$lib/data/posts';
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

		// Related posts: most shared tags first, recency as tiebreaker.
		const related = getAllPosts()
			.filter((p) => p.slug !== params.slug)
			.map((p) => ({
				...p,
				shared: p.tags.filter((t) => result.data.tags.includes(t)).length
			}))
			.sort((a, b) => b.shared - a.shared || +new Date(b.date) - +new Date(a.date))
			.slice(0, 3)
			.map(({ slug, title, date, readTime }) => ({ slug, title, date, readTime }));

		return {
			html: body,
			meta: { ...result.data, slug: params.slug },
			related
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e) throw e;
		error(404, `Post "${params.slug}" not found`);
	}
};
