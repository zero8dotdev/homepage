<script lang="ts">
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
	import CraftSection from '$lib/components/sections/CraftSection.svelte';
	import FrontendBlogs from '$lib/components/sections/FrontendBlogs.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';
</script>

<svelte:head>
	<title>zero8.dev · A decade of making hard things feel simple.</title>
	<meta name="description" content="I build software people can reason about. 10 years across frontend engineering, developer tools, and the video streaming space." />
	<link rel="canonical" href="https://zero8.dev" />
	<meta property="og:title" content="zero8.dev · A decade of making hard things feel simple." />
	<meta property="og:description" content="Frontend engineer and developer tools specialist. 10 years building software people can reason about." />
	<meta property="og:url" content="https://zero8.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://zero8.dev/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:title" content="zero8.dev · A decade of making hard things feel simple." />
	<meta name="twitter:description" content="Frontend engineer and developer tools specialist. 10 years building software people can reason about." />
	<meta name="twitter:image" content="https://zero8.dev/og-image.jpg" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "Who is Ashutosh Tripathi?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Ashutosh Tripathi is a frontend engineer and developer tools specialist with over a decade of experience. He has worked across React, browser-native video streaming, and open source tooling, and has spent his career fully remote and async."
				}
			},
			{
				"@type": "Question",
				"name": "What does zero8.dev specialize in?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "zero8.dev focuses on frontend engineering, React development, browser-native video streaming (HLS, adaptive bitrate), and developer tools including CLIs, SDKs, and API design. Ashutosh also consults on developer experience and documentation."
				}
			},
			{
				"@type": "Question",
				"name": "What is Smriti?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Smriti is an open-source shared memory tool for AI-powered engineering teams. It captures and indexes Claude Code, Cursor, and Codex sessions locally, then shares team knowledge through git — no cloud required."
				}
			},
			{
				"@type": "Question",
				"name": "Is Ashutosh Tripathi available for freelance or contract work?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Yes. Ashutosh is available for contracts and consulting in frontend engineering and developer tools. You can reach him at hello@zero8.dev."
				}
			},
			{
				"@type": "Question",
				"name": "What does it mean to build software people can reason about?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "It means building transparent software where users can form a mental model of what the system is doing. This shows up in API design, error messages, UI feedback, and documentation — the invisible work that makes software feel trustworthy and learnable."
				}
			}
		]
	})}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify([
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Ashutosh Tripathi",
			"url": "https://zero8.dev",
			"email": "hello@zero8.dev",
			"jobTitle": "Frontend Engineer",
			"description": "Frontend engineer specializing in React, browser-native video streaming, and developer tools. A decade of remote and async work across open source and product engineering.",
			"knowsAbout": [
				"Frontend Engineering",
				"React",
				"Browser-native Video Streaming",
				"HLS",
				"Adaptive Bitrate Streaming",
				"Developer Tools",
				"API Design",
				"Browser Internals",
				"TypeScript",
				"SvelteKit",
				"Remote Work",
				"Async Collaboration",
				"Open Source",
				"AI Memory"
			],
			"sameAs": [
				"https://github.com/ashu17706",
				"https://x.com/zero8dotdev",
				"https://www.linkedin.com/in/itszero8/"
			]
		},
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "zero8.dev",
			"url": "https://zero8.dev",
			"description": "Personal site of Ashutosh Tripathi — frontend engineer, developer tools specialist, and open source builder.",
			"author": {
				"@type": "Person",
				"name": "Ashutosh Tripathi"
			}
		}
	])}</script>`}
</svelte:head>

<HeroSection />
<AboutSection />
<ProjectsSection />
<CraftSection />
<FrontendBlogs />
<ContactSection />
<FaqSection />
