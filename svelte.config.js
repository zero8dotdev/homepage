import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

// mdsvex hardcodes rel="nofollow" on every absolute-URL link in markdown
// (via remark-external-links), which also hits links back to zero8.dev.
// Strip nofollow from internal links so link equity flows.
function rehypeUnNofollowInternal() {
	const isInternal = (href) =>
		href.startsWith('/') || /^https?:\/\/(www\.)?zero8\.dev(\/|$)/.test(href);
	return (tree) => {
		const visit = (node) => {
			if (node.tagName === 'a' && node.properties?.rel && isInternal(String(node.properties.href ?? ''))) {
				const rel = [].concat(node.properties.rel).filter((r) => r !== 'nofollow');
				if (rel.length) node.properties.rel = rel;
				else delete node.properties.rel;
			}
			for (const child of node.children ?? []) visit(child);
		};
		visit(tree);
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({ extensions: ['.svx'], rehypePlugins: [rehypeUnNofollowInternal] })
	],
	kit: {
		adapter: adapter(),
		alias: { $components: 'src/lib/components' }
	}
};

export default config;
