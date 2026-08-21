import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const GITHUB = 'https://github.com/zero8dotdev/avkash';
const HOME = 'https://zero8.dev';

const PROXY_PREFIXES = ['74.125.', '66.249.', '66.102.', '209.85.', '108.177.', '142.250.', '17.', '2607:f8b0:', '2404:6800:'];
const isProxy = (ip: string | null) => !ip || PROXY_PREFIXES.some(p => ip.startsWith(p));

export const GET: RequestHandler = async ({ params, platform, request }) => {
	const { id } = params;
	const kv = platform?.env?.CLICKS;
	const isGh = id.endsWith('-gh');
	const baseId = isGh ? id.slice(0, -3) : id;
	const dest = isGh ? GITHUB : HOME;

	if (kv) {
		const record: ContactRecord = (await kv.get(baseId, 'json')) ?? { id: baseId };
		const ip = request.headers.get('CF-Connecting-IP');
		const entry: TrackEvent = {
			ts: new Date().toISOString(),
			ip,
			country: request.headers.get('CF-IPCountry'),
			ua: request.headers.get('User-Agent'),
			proxy: isProxy(ip)
		};

		if (isGh) {
			record.ghClicks = [...(record.ghClicks ?? []), entry];
		} else {
			record.clicks = [...(record.clicks ?? []), entry];
		}

		await kv.put(baseId, JSON.stringify(record));
	}

	redirect(302, dest);
};

interface TrackEvent {
	ts: string;
	ip: string | null;
	country: string | null;
	ua: string | null;
	proxy: boolean;
}

interface ContactRecord {
	id: string;
	name?: string;
	email?: string;
	sentAt?: string;
	opens?: TrackEvent[];
	clicks?: TrackEvent[];
	ghClicks?: TrackEvent[];
}
