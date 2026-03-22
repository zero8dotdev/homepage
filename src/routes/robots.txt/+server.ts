import type { RequestHandler } from '@sveltejs/kit';

const robots = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: cohere-ai
Allow: /

Sitemap: https://zero8.dev/sitemap.xml
`;

export const GET: RequestHandler = () => {
	return new Response(robots, {
		headers: { 'Content-Type': 'text/plain' }
	});
};
