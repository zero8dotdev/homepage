export interface PostMeta {
	title: string;
	description: string;
	date: string;
	readTime: string;
	featured?: boolean;
}

interface PostModule {
	metadata: PostMeta;
}

export function getAllPosts() {
	const modules = import.meta.glob<PostModule>('/src/content/blog/*.svx', { eager: true });

	return Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.split('/').at(-1)!.replace('.svx', '');
			return { slug, ...mod.metadata };
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
