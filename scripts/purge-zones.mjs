#!/usr/bin/env node
/**
 * Purge the Cloudflare edge cache for every active zone after a deploy.
 *
 * Why: pages are served with cache-control: max-age=14400, and that edge
 * cache survives deploys — so new/updated blog posts, the sitemap, and the
 * RSS feed can be stale for up to 4h after `pnpm run deploy`. Purging on
 * deploy makes new content visible immediately.
 *
 * Reads active zones from wrangler.toml (uncommented `zone_name` lines).
 * Auth: CLOUDFLARE_API_TOKEN from the environment or .env (needs
 * Zone → Cache Purge permission).
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Load .env if the token isn't already in the environment.
if (!process.env.CLOUDFLARE_API_TOKEN && existsSync(resolve(root, '.env'))) {
	for (const line of readFileSync(resolve(root, '.env'), 'utf8').split('\n')) {
		const m = line.match(/^([A-Z0-9_]+)=["']?([^"']*)["']?\s*$/);
		if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
	}
}

const token = process.env.CLOUDFLARE_API_TOKEN;
if (!token) {
	console.error('CLOUDFLARE_API_TOKEN not set — skipping cache purge.');
	process.exit(1);
}

// Active zones = uncommented zone_name lines in wrangler.toml, deduped.
const toml = readFileSync(resolve(root, 'wrangler.toml'), 'utf8');
const zones = [
	...new Set(
		toml
			.split('\n')
			.filter((l) => /^\s*zone_name\s*=/.test(l))
			.map((l) => l.match(/"([^"]+)"/)?.[1])
			.filter(Boolean)
	)
];

console.log(`Purging edge cache for ${zones.length} zone(s)...`);

const api = 'https://api.cloudflare.com/client/v4';
const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

let failures = 0;
for (const zone of zones) {
	try {
		const lookup = await fetch(`${api}/zones?name=${zone}`, { headers }).then((r) => r.json());
		const id = lookup.result?.[0]?.id;
		if (!id) throw new Error(lookup.errors?.[0]?.message ?? 'zone not found');

		const purge = await fetch(`${api}/zones/${id}/purge_cache`, {
			method: 'POST',
			headers,
			body: JSON.stringify({ purge_everything: true })
		}).then((r) => r.json());
		if (!purge.success) throw new Error(purge.errors?.[0]?.message ?? 'purge failed');

		console.log(`  ✓ ${zone}`);
	} catch (err) {
		failures++;
		console.error(`  ✗ ${zone}: ${err.message}`);
	}
}

if (failures) {
	console.error(`${failures}/${zones.length} zones failed to purge.`);
	process.exit(1);
}
console.log('All zones purged.');
