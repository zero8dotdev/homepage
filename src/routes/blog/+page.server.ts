import type { PageServerLoad } from './$types';
import { getAllPosts, getAllTags } from '$lib/data/posts';

export const load: PageServerLoad = async () => {
	return {
		posts: getAllPosts(),
		tags: getAllTags()
	};
};
