import { error } from '@sveltejs/kit';
import { getPostsByTag, getAllTags } from '$lib/data/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const posts = getPostsByTag(params.tag);

	if (posts.length === 0) {
		error(404, `No posts found with tag "${params.tag}"`);
	}

	return {
		tag: params.tag,
		posts,
		allTags: getAllTags()
	};
};
