import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return new Response('User-agent: *\nAllow: /\nSitemap: https://zero8.dev/sitemap.xml', {
		headers: { 'Content-Type': 'text/plain' }
	});
};
