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
		extend: {
			fontSize: {
				'fluid-m': 'clamp(1rem, 1.553vw + 0.636rem, 2.5rem)'
			},
			spacing: {
				'fluid-main-x': 'clamp(2rem, 5.696vw + 0.665rem, 7.5rem)'
			},
			colors: {
				'bg-grey': '#a3b6c6',
				blue: {
					100: '#000533'
				}
			}
		}
	},

	plugins: [typography]
} satisfies Config;

// TODO: Add default styling like margins & font sizes etc.
