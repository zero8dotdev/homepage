import type { RequestHandler } from '@sveltejs/kit';

interface PostModule {
	metadata: {
		title: string;
		date: string;
	};
}

export const GET: RequestHandler = () => {
	const modules = import.meta.glob<PostModule>('/src/content/blog/*.svx', { eager: true });

	const posts = Object.entries(modules).map(([path, mod]) => {
		const slug = path.split('/').at(-1)!.replace('.svx', '');
		return { slug, date: mod.metadata.date };
	});

	const today = new Date().toISOString().split('T')[0];

	const staticPages = [
		{ loc: 'https://zero8.dev/', priority: '1.0', changefreq: 'weekly', lastmod: today },
		{ loc: 'https://zero8.dev/blog', priority: '0.8', changefreq: 'weekly', lastmod: today }
	];

	const postPages = posts.map(({ slug, date }) => ({
		loc: `https://zero8.dev/blog/${slug}`,
		priority: '0.7',
		changefreq: 'monthly',
		lastmod: date ? new Date(date).toISOString().split('T')[0] : today
	}));

	const urls = [...staticPages, ...postPages]
		.map(
			({ loc, priority, changefreq, lastmod }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
