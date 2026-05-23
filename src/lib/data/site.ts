const SITE_URL = 'https://zero8.dev';

export const siteConfig = {
	url: SITE_URL,
	title: 'zero8.dev',
	description:
		'Personal site of Ashutosh Tripathi — software engineer building developer tools, AI memory infrastructure, and self-improving agent systems.',
	author: 'Ashutosh Tripathi',
	email: 'hello@zero8.dev',
	twitter: '@zero8dotdev',
	ogImage: {
		dark: `${SITE_URL}/og-dark.svg`,
		light: `${SITE_URL}/og-light.svg`,
		url: `${SITE_URL}/og-dark.svg`,
		width: 1200,
		height: 630
	}
};

export const navLinks = [
	{ href: '/blog', text: 'Writing' },
	{ href: '/work', text: 'Work' },
	{ href: '/#contact', text: 'Contact' }
];

export const hero = {
	eyebrow: 'Ashutosh Tripathi · Software Engineer',
	headline: 'I build software people\ncan reason about.',
	subline:
		'Developer tools and AI-native systems. I design the infrastructure that lets agents — human and automated — operate without friction. A decade of product engineering.',
	ctas: [
		{ label: 'Read my writing', href: '/blog' },
		{ label: 'See my work', href: '/work' }
	]
};

export const about = {
	paragraphs: [
		"I build systems where the contract between components is precise enough that both engineers and AI agents can reason about what's happening. As co-founder and CTO of InboxStack, I'm building email deliverability intelligence that turns ESP signals, reputation data, and send patterns into clear explanations — so teams know what broke before it becomes a revenue problem.",
		"Smriti comes from the same instinct applied to the development layer. Every AI session starts fresh — decisions lost, context duplicated, zero continuity across teammates. Smriti captures Claude Code, Cursor, and Codex sessions locally, indexes them with hybrid search, and synthesises context on demand using a local LLM. Team knowledge syncs through git. Nothing touches the cloud.",
		'Before that, a decade across frontend engineering, video streaming infrastructure, and developer experience. I also consult on developer tools, API design, and the systems that surround AI-assisted engineering workflows.'
	]
};

export const craftAreas = [
	{
		title: 'Agent System Design',
		description: 'Pipelines where every stage operates with clear typed contracts. Designing the interfaces, queue handoffs, and worker boundaries that let automated systems — and the engineers debugging them — always know what to expect.'
	},
	{
		title: 'AI Memory & Context',
		description: 'The memory layer that stops agents starting from scratch. Indexing, retrieval, and on-demand synthesis — making past decisions and team context available without manual curation.'
	},
	{
		title: 'DX & API Design',
		description: 'The gap between powerful and learnable. How you name things, shape APIs, and write error messages is a product decision.'
	},
	{
		title: 'Developer Tooling',
		description: 'CLIs, SDKs, and the feedback loop. Tools shape how developers think. The best ones get out of the way and let you focus.'
	},
	{
		title: 'Frontend Performance',
		description: "What users feel but can't name. Perceived speed, interaction responsiveness, and the invisible work that makes UIs feel snappy."
	},
	{
		title: 'Video & Streaming',
		description: 'HLS, adaptive bitrate, player internals, and the infrastructure that makes live and on-demand video feel instant.'
	}
];

export type ProjectStatus = 'live' | 'sunset' | 'delivered';

export type Project = {
	name: string;
	description: string;
	role: string;
	stack: string[];
	href: string | null;
	status: ProjectStatus;
	featured: boolean;
};

export const projects: Project[] = [
	{
		name: 'Smriti',
		description: 'Shared memory for AI-powered engineering teams. Captures and indexes Claude Code, Cursor, and Codex sessions locally, then shares team knowledge through git. No cloud required.',
		role: 'Concept, CLI design, search architecture, development',
		stack: ['Bun', 'TypeScript', 'SQLite', 'BM25', 'node-llama-cpp', 'Ollama'],
		href: 'https://github.com/zero8dotdev/smriti',
		status: 'live',
		featured: true
	},
	{
		name: 'Avkash',
		description: "India's open-source HR platform: leave management, team policies, and Slack integration for modern workplaces. Self-hostable, with Razorpay billing and row-level security built in.",
		role: 'Product, design, architecture, development',
		stack: ['Next.js 15', 'TypeScript', 'Supabase', 'Slack API', 'Razorpay', 'Tailwind CSS'],
		href: 'https://github.com/zero8dotdev/avkash',
		status: 'live',
		featured: true
	},
	{
		name: 'Godspeed Web',
		description: 'A visual platform to create, manage, and deploy Godspeed Framework projects — taking a low-code framework to no-code. Built to remove the CLI entirely for teams who want to ship without the setup.',
		role: 'Product, design, architecture, development',
		stack: ['TypeScript', 'JavaScript'],
		href: null,
		status: 'sunset',
		featured: false
	},
	{
		name: 'Workflow Management',
		description: 'A workflow automation platform for Veolia Japan — teams could build, configure, and publish operational workflows without touching code. The frontend was the hard part: a visual drag-and-drop builder, dynamic multi-step forms rendered from a workflow schema, complex state management across branching flows, and role-based views that controlled what each team member could see and act on at every stage.',
		role: 'Frontend architecture, development',
		stack: ['React', 'TypeScript'],
		href: null,
		status: 'delivered',
		featured: false
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
