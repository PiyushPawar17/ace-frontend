/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'neutral-100': '#15161E',
				'neutral-80': '#222330',
				'neutral-60': '#7F8190',
				blue: '#0097E8',
				red: '#EA4452'
			},
			gridTemplateColumns: {
				desktop: 'minmax(324px, auto) minmax(0, 1fr)'
			}
		}
	},
	plugins: []
};
