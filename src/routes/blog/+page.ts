import type { PageLoad } from './$types';
import { getAllPosts } from '$lib/data/posts';

export const load: PageLoad = async () => {
	return { posts: getAllPosts() };
};
