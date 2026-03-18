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
	<meta property="og:title" content="zero8.dev · A decade of making hard things feel simple." />
	<meta property="og:description" content="Frontend engineer and developer tools specialist. 10 years building software people can reason about." />
	<meta property="og:url" content="https://zero8.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://zero8.dev/ogtest.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="zero8.dev · A decade of making hard things feel simple." />
	<meta name="twitter:description" content="Frontend engineer and developer tools specialist. 10 years building software people can reason about." />
</svelte:head>

<HeroSection />
<AboutSection />
<ProjectsSection />
<CraftSection />
<FrontendBlogs />
<ContactSection />
