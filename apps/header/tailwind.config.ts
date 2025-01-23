import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			lineHeight: {
				xs: '0.75',
				sm: '0.85'
			},
			spacing: {
				'1/10': '10%'
			}
		}
	},

	plugins: []
} satisfies Config;
