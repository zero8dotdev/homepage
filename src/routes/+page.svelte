<script lang="ts">
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
	import CraftSection from '$lib/components/sections/CraftSection.svelte';
	import FrontendBlogs from '$lib/components/sections/FrontendBlogs.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
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
	<meta name="twitter:title" content="zero8.dev · A decade of making hard things feel simple." />
	<meta name="twitter:description" content="Frontend engineer and developer tools specialist. 10 years building software people can reason about." />
	<meta name="twitter:image" content="https://zero8.dev/og-image.jpg" />
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
