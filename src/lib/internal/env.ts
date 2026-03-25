/**
 * Browser detection utility.
 *
 * Uses a standard check rather than SvelteKit's $app/environment
 * so the package works in non-SvelteKit environments.
 */
export const browser = typeof window !== 'undefined';
