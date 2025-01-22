import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			s: '425px',
			m: '768px',
			l: '1024px',
			xl: '1440px',
			'2xl': '1920px',
			'3xl': '2560px'
		},
		fontFamily: {
			sans: ['montserrat', 'sans-serif'],
			serif: ['yink', 'serif']
		},
		colors: {
			grey: {
				100: '#a3b6c6',
				400: '#c7d4e0'
			},
			blue: {
				100: '#000533',
				400: '#1682d3',
				800: '#2dbce8'
			},
			yellow: {
				100: '#dd7f0e',
				400: '#f7bb26'
			},
			white: '#ffffff',
			black: '#000000'
		},
		extend: {
			fontSize: {
				'fluid-m': 'clamp(1rem, 1.553vw + 0.636rem, 2.5rem)'
			},
			spacing: {
				'fluid-main-x': 'clamp(2rem, 5.696vw + 0.665rem, 7.5rem)'
			}
		}
	},

	plugins: [typography]
} satisfies Config;

// TODO: Add default styling like margins & font sizes etc.
