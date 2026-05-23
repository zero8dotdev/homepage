import type { RequestHandler } from '@sveltejs/kit';
import { getAllPosts, getAllTags } from '$lib/data/posts';
import { siteConfig } from '$lib/data/site';

export const GET: RequestHandler = () => {
	const posts = getAllPosts();
	const today = new Date().toISOString().split('T')[0];

	const staticPages = [
		{ loc: `${siteConfig.url}/`, priority: '1.0', changefreq: 'weekly', lastmod: today },
		{ loc: `${siteConfig.url}/work`, priority: '0.9', changefreq: 'monthly', lastmod: today },
		{ loc: `${siteConfig.url}/blog`, priority: '0.8', changefreq: 'weekly', lastmod: today }
	];

	const postPages = posts.map(({ slug, date }) => ({
		loc: `${siteConfig.url}/blog/${slug}`,
		priority: '0.7',
		changefreq: 'monthly',
		lastmod: date ? new Date(date).toISOString().split('T')[0] : today
	}));

	const tagPages = getAllTags().map(({ tag }) => ({
		loc: `${siteConfig.url}/blog/tag/${tag}`,
		priority: '0.4',
		changefreq: 'weekly',
		lastmod: today
	}));

	const urls = [...staticPages, ...postPages, ...tagPages]
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
