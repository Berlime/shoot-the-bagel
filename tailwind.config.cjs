/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
	// this enables you to cancel out dark mode using the class "light" for specific sections if desired
	darkMode: ["variant", "&:is(.dark *):not(.light *)"],

	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			xs: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				// use any standard tailwind colors from here https://tailwindcss.com/docs/customizing-colors
				// or generate with https://uicolors.app/create
				primary: {
					'50': '#f0f3fe',
					'100': '#dde4fc',
					'200': '#c2d0fb',
					'300': '#98b2f8',
					'400': '#678bf3',
					'500': '#4363ee',
					'600': '#3b4fe4',
					'700': '#2531d0',
					'800': '#2429a9',
					'900': '#232985',
					'950': '#1a1b51',
				},
				base: colors.neutral,

				"dark-bg": "hsl(0, 0%, 1%)",

				info: "#7dd3fc",
				"info-content": "#082f49",
				success: "#6ee7b7",
				"success-content": "#022c22",
				warning: "#fcd34d",
				"warning-content": "#111827",
				error: "#fca5a5",
				"error-content": "#450a0a",
			},
			// add "transition-button" which is "transition-colors" plus box-shadow
			transitionProperty: {
				button:
					"box-shadow, color, background-color, border-color, text-decoration-color, fill, stroke",
			},
			animation: {
				"marquee-integrations": "marquee-integrations 100s linear infinite",
				marquee2: "marquee2 70s linear infinite",
				"marquee-testimonials": "marquee-testimonials 60s linear infinite",
				borderRotation: "borderRotation 10s linear infinite",
				flash: "flash 5s ease-out infinite",
			},
			keyframes: {
				"marquee-integrations": {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(calc(-100% - 0rem))",
					},
				},
				marquee2: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(calc(-100% - 5rem))",
					},
				},
				"marquee-testimonials": {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(calc(-100% - 1.5rem))",
					},
				},
				borderRotation: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				flash: {
					from: {
						opacity: 0,
					},
					"90%": {
						opacity: 0,
					},
					"92%": {
						opacity: 0.6,
					},
					"93%": {
						opacity: 0.2,
					},
					"96%": {
						opacity: 0.9,
					},
					to: {
						opacity: 0,
					},
				},
			},
		},
		fontFamily: {
			sans: [
				"Inter", // this is loaded from CDN in`BaseHead.astro`
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica",
				"Arial",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
			],
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
