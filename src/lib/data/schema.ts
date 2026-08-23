import { siteConfig, company, projects } from './site';

const SITE_URL = siteConfig.url;

export const profiles = {
	github: 'https://github.com/ashu17706',
	githubOrg: 'https://github.com/zero8dotdev',
	x: 'https://x.com/zero8dotdev',
	linkedin: 'https://www.linkedin.com/in/itszero8/'
};

// Stable entity ids — referenced across pages so Google merges them into one graph.
export const PERSON_ID = `${SITE_URL}/#person`;
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const personEntity = {
	'@type': 'Person',
	'@id': PERSON_ID,
	name: siteConfig.author,
	alternateName: 'zero8',
	url: SITE_URL,
	email: `mailto:${siteConfig.email}`,
	jobTitle: 'Software Engineer',
	description:
		'Software engineer building developer tools, AI memory infrastructure, and self-improving agent systems. A decade of product engineering.',
	worksFor: { '@id': ORG_ID },
	sameAs: [profiles.github, profiles.x, profiles.linkedin],
	knowsAbout: [
		'Developer Tools',
		'AI Agent Systems',
		'AI Memory & Context Engineering',
		'API Design',
		'Frontend Performance',
		'Video Streaming Infrastructure'
	]
};

export const organizationEntity = {
	'@type': 'Organization',
	'@id': ORG_ID,
	name: 'Zero8',
	legalName: company.legalName,
	url: SITE_URL,
	email: siteConfig.email,
	logo: {
		'@type': 'ImageObject',
		url: `${SITE_URL}/logo-mark.png`
	},
	founder: { '@id': PERSON_ID },
	foundingDate: '2024',
	taxID: company.gstin,
	identifier: {
		'@type': 'PropertyValue',
		propertyID: 'CIN',
		value: company.cin
	},
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'B10, Block 5, Aradhana Greens Apartment',
		addressLocality: 'Dehradun',
		addressRegion: 'Uttarakhand',
		postalCode: '248001',
		addressCountry: 'IN'
	},
	sameAs: [profiles.githubOrg, profiles.x]
};

export const websiteEntity = {
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	url: SITE_URL,
	name: 'zero8.dev',
	alternateName: ['Zero8', 'zero8 dev'],
	description: siteConfig.description,
	publisher: { '@id': PERSON_ID },
	inLanguage: 'en'
};

/** Full brand graph for the homepage: site + person + company + profile page. */
export const homeGraph = {
	'@context': 'https://schema.org',
	'@graph': [
		websiteEntity,
		personEntity,
		organizationEntity,
		{
			'@type': 'ProfilePage',
			'@id': `${SITE_URL}/#webpage`,
			url: SITE_URL,
			name: 'zero8.dev · I build software people can reason about.',
			isPartOf: { '@id': WEBSITE_ID },
			about: { '@id': PERSON_ID },
			mainEntity: { '@id': PERSON_ID },
			inLanguage: 'en'
		}
	]
};

interface BlogPostingInput {
	title: string;
	description: string;
	url: string;
	image: string;
	datePublished: string;
	dateModified?: string;
	tags?: string[];
}

/** BlogPosting schema for a post page. Author/publisher are defined inline so the page is self-contained. */
export function blogPostingSchema(post: BlogPostingInput) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': `${post.url}#article`,
		headline: post.title,
		description: post.description,
		url: post.url,
		mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
		image: post.image,
		datePublished: post.datePublished,
		dateModified: post.dateModified ?? post.datePublished,
		author: personEntity,
		publisher: organizationEntity,
		isPartOf: { '@id': WEBSITE_ID },
		...(post.tags?.length ? { keywords: post.tags.join(', ') } : {}),
		inLanguage: 'en'
	};
}

/** BreadcrumbList — the last item is the current page and carries no URL, per Google's spec. */
export function breadcrumbSchema(items: { name: string; url?: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			...(item.url ? { item: item.url } : {})
		}))
	};
}

function softwareEntity(name: string, operatingSystem: string) {
	const p = projects.find((proj) => proj.name === name);
	if (!p?.href) return null;
	return {
		'@type': ['SoftwareApplication', 'SoftwareSourceCode'],
		'@id': `${SITE_URL}/work#${name.toLowerCase()}`,
		name: p.name,
		description: p.description,
		url: p.href,
		...(p.href.includes('github.com') ? { codeRepository: p.href } : {}),
		applicationCategory: 'DeveloperApplication',
		operatingSystem,
		programmingLanguage: 'TypeScript',
		keywords: p.stack.join(', '),
		author: { '@id': PERSON_ID },
		publisher: { '@id': ORG_ID },
		isAccessibleForFree: true,
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
	};
}

/** Graph for /work: the flagship software projects, tied to the person/org entities. */
export const workGraph = {
	'@context': 'https://schema.org',
	'@graph': [
		personEntity,
		organizationEntity,
		softwareEntity('Smriti', 'macOS, Linux'),
		softwareEntity('Avkash', 'Linux, macOS (self-hosted)')
	].filter(Boolean)
};

/** Blog schema for the writing index. */
export const blogGraph = {
	'@context': 'https://schema.org',
	'@type': 'Blog',
	'@id': `${SITE_URL}/blog#blog`,
	url: `${SITE_URL}/blog`,
	name: 'Writing · zero8.dev',
	description:
		'Essays on developer tools, AI memory, agent systems, email deliverability, and the craft of software engineering — written by Ashutosh Tripathi.',
	author: personEntity,
	publisher: { '@id': ORG_ID },
	isPartOf: { '@id': WEBSITE_ID },
	inLanguage: 'en'
};
