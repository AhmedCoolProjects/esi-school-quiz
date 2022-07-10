/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['cupcake', 'dark', 'cmyk', 'synthwave']
	},
	plugins: [require('daisyui')]
};
