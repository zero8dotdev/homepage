import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark' | 'system';

function getSystem(): 'light' | 'dark' {
	if (!browser) return 'dark';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const initial: Theme = browser ? ((localStorage.getItem('theme') as Theme) ?? 'system') : 'system';

export const theme = writable<Theme>(initial);

export function applyTheme(t: Theme) {
	const resolved = t === 'system' ? getSystem() : t;
	document.documentElement.classList.remove('light', 'dark');
	document.documentElement.classList.add(resolved);
}

theme.subscribe((t) => {
	if (!browser) return;
	localStorage.setItem('theme', t);
	applyTheme(t);
});
