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

Ashutosh Tripathi is a software engineer, co-founder and CTO of InboxStack. He designs the infrastructure that makes engineers and AI agents work without friction — from Smriti (shared AI memory for engineering teams) to InboxStack (a self-improving email deliverability intelligence platform with a six-stage typed pipeline). A decade of product engineering, fully remote and async.

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
