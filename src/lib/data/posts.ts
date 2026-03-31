import { z } from 'zod';

const dateFormat = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Must be YYYY-MM-DD');

export const postSchema = z.object({
	title: z.string().min(1, 'Required').max(70, 'Exceeds 70 chars (SEO title limit)'),
	description: z.string().min(50, 'Too short (min 50 chars)').max(155, 'Exceeds 155 chars (meta description limit)'),
	date: dateFormat,
	readTime: z.string().optional(),
	featured: z.boolean().optional().default(false),
	image: z.string().optional(),
	draft: z.boolean().optional().default(false),
	updated: dateFormat.optional(),
	canonical: z.url('Must be a valid URL').optional(),
	author: z.string().optional(),
	tags: z.array(z.string()).optional().default([]),
	series: z.string().optional(),
	seriesOrder: z.number().int().positive().optional()
});

export type PostMeta = z.infer<typeof postSchema> & { readTime: string };

interface PostModule {
	metadata: Record<string, unknown>;
}

function estimateReadTime(source: string): string {
	// Strip frontmatter, HTML tags, SVG paths, and script blocks
	const content = source
		.replace(/---[\s\S]*?---/, '')
		.replace(/<script[\s\S]*?<\/script>/g, '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	const words = content.split(' ').filter((w) => w.length > 1).length;
	const minutes = Math.max(1, Math.round(words / 238));
	return `${minutes} min read`;
}

export function getAllPosts() {
	const modules = import.meta.glob<PostModule>('/src/content/blog/*.svx', { eager: true });
	const sources = import.meta.glob('/src/content/blog/*.svx', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

	return Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.split('/').at(-1)!.replace('.svx', '');
			const result = postSchema.safeParse(mod.metadata);

			if (!result.success) {
				const errors = result.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n');
				throw new Error(`Invalid frontmatter in ${slug}.svx:\n${errors}`);
			}

			const data = result.data;

			if (!data.readTime) {
				const raw = sources[path];
				data.readTime = raw ? estimateReadTime(raw) : '1 min read';
			}

			return { slug, ...data, readTime: data.readTime! };
		})
		.filter((post) => !post.draft)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags() {
	const posts = getAllPosts();
	const tagMap = new Map<string, number>();

	for (const post of posts) {
		for (const tag of post.tags) {
			tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
		}
	}

	return Array.from(tagMap.entries())
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string) {
	return getAllPosts().filter((post) => post.tags.includes(tag));
}
