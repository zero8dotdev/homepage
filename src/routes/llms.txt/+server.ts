import type { RequestHandler } from '@sveltejs/kit';
import { getAllPosts } from '$lib/data/posts';
import { siteConfig } from '$lib/data/site';
import { projects } from '$lib/data/site';

export const GET: RequestHandler = () => {
	const posts = getAllPosts();

	const postList =
		posts.length > 0
			? posts.map((p) => `- [${p.title}](${siteConfig.url}/blog/${p.slug}): ${p.description}`).join('\n')
			: '- No posts published yet.';

	const projectList = projects
		.map((p) => `- [${p.name}](${p.href}): ${p.description}`)
		.join('\n');

	const body = `# ${siteConfig.title}

> ${siteConfig.description}

## About

Ashutosh Tripathi is a frontend engineer and developer tools specialist with over a decade of experience across React, browser-native video streaming, and open source tooling. He works fully remote and async.

## Projects

${projectList}

## Writing

${postList}

## Contact

- Email: ${siteConfig.email}
- GitHub: https://github.com/ashu17706
- X: https://x.com/zero8dotdev
- LinkedIn: https://www.linkedin.com/in/itszero8/
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'max-age=3600'
		}
	});
};
