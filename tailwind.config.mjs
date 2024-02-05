/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'BlueBG' : '#5E5D7A',
				'TextYellow' : '#FFD12E',
				'TextCyan' : '#36CFC6',
				'BTNBG': '#5E5D7A',
				'TitleColor': '#588B88',
			},
			fontFamily: {
				Poppins: ['Poppins'],
				Raleway: ['Raleway'],
			}
		},
	},
	plugins: [],
}
