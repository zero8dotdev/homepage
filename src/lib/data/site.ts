const SITE_URL = 'https://zero8.dev';

export const siteConfig = {
	url: SITE_URL,
	title: 'zero8.dev',
	description:
		'Personal site of Ashutosh Tripathi — frontend engineer, developer tools specialist, and open source builder.',
	author: 'Ashutosh Tripathi',
	email: 'hello@zero8.dev',
	twitter: '@zero8dotdev',
	ogImage: {
		url: `${SITE_URL}/og-image.jpg`,
		width: 1200,
		height: 630
	}
};

export const navLinks = [
	{ href: '/blog', text: 'Writing' },
	{ href: '/#work', text: 'Work' },
	{ href: '/#contact', text: 'Contact' }
];

export const hero = {
	eyebrow: 'Ashutosh Tripathi · Frontend Engineer',
	headline: 'I build software people\ncan reason about.',
	subline:
		'Frontend engineer. React, browser-native video streaming, and developer tools. A decade of remote and async work.',
	ctas: [
		{ label: 'Read my writing', href: '/blog' },
		{ label: 'See my work', href: '/#work' }
	]
};

export const about = {
	paragraphs: [
		"I spent the last decade building products across frontend and developer tooling, with a long stretch deep in the video streaming space. The thread through all of it: software should be transparent enough for users to build a mental model of what it's doing.",
		"Lately I'm spending most of my time in open source, particularly around AI memory and how engineering teams share context across agents and sessions. Smriti came out of that.",
		'I also consult and take on contracts in frontend engineering and developer tools.'
	]
};

export const craftAreas = [
	{
		title: 'DX & API Design',
		description: 'The gap between powerful and learnable. How you name things, shape APIs, and write error messages is a product decision.'
	},
	{
		title: 'Frontend Performance',
		description: "What users feel but can't name. Perceived speed, interaction responsiveness, and the invisible work that makes UIs feel snappy."
	},
	{
		title: 'Video & Streaming',
		description: 'HLS, adaptive bitrate, player internals, and the infrastructure that makes live and on-demand video feel instant.'
	},
	{
		title: 'Documentation',
		description: 'Writing that teaches, not just describes. Docs are a product surface. They should meet users where they are.'
	},
	{
		title: 'Browser Internals',
		description: 'Understanding the platform you build on. Rendering pipelines, layout engines, and what actually happens when you call a DOM API.'
	},
	{
		title: 'Developer Tooling',
		description: 'CLIs, SDKs, and the feedback loop. Tools shape how developers think. The best ones get out of the way and let you focus.'
	}
];

export const projects = [
	{
		name: 'Smriti',
		description: 'Shared memory for AI-powered engineering teams. Captures and indexes Claude Code, Cursor, and Codex sessions locally, then shares team knowledge through git. No cloud required.',
		role: 'Concept, CLI design, search architecture, development',
		stack: ['Bun', 'TypeScript', 'SQLite', 'BM25', 'node-llama-cpp', 'Ollama'],
		href: 'https://github.com/zero8dotdev/smriti'
	},
	{
		name: 'Avkash',
		description: "India's open-source HR platform: leave management, team policies, and Slack integration for modern workplaces. Self-hostable, with Razorpay billing and row-level security built in.",
		role: 'Product, design, architecture, development',
		stack: ['Next.js 15', 'TypeScript', 'Supabase', 'Slack API', 'Razorpay', 'Tailwind CSS'],
		href: 'https://github.com/zero8dotdev/avkash'
	}
];

export const blogPosts: {
	id: number;
	title: string;
	description: string;
	date: string;
	readTime: string;
	href: string;
	featured: boolean;
}[] = [];
