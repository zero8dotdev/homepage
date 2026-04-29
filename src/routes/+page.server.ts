import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/data/posts';

export const load: PageServerLoad = async () => {
	return {
		posts: getAllPosts().slice(0, 6)
	};
};
