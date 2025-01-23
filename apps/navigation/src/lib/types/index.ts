import type { HTMLAnchorAttributes } from 'svelte/elements';

export type CustomLink = HTMLAnchorAttributes & {
	content?: string;
	isActive?: boolean;
	href: string;
	transitionKey?: string | number;
};
