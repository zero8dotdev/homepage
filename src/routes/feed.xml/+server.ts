import type { RequestHandler } from '@sveltejs/kit';
import { getAllPosts } from '$lib/data/posts';
import { siteConfig } from '$lib/data/site';

export const GET: RequestHandler = () => {
	const posts = getAllPosts();

	const items = posts
		.map(
			({ slug, title, description, date }) => `    <item>
      <title>${escapeXml(title)}</title>
      <description>${escapeXml(description)}</description>
      <link>${siteConfig.url}/blog/${slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${slug}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
    </item>`
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.title)}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/rss+xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
