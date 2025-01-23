import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			borderRadius: {
				'1/4': '25%'
			},
			screens: {
				xs: '375px'
			}
		}
	},

	plugins: []
} satisfies Config;
