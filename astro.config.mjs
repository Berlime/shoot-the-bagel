import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import compress from "@playform/compress";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://shoot-the-bagel.pages.dev",
	adapter: cloudflare({
		imageService: 'compile',
		platformProxy: {
			enabled: true,
		},
	}),
	// compatibility requirements for Cloudflare Pages
	vite: {
		ssr: {
			external: ["stream", "util", "os", "fs", "svgo"],
		},
	},
	redirects: {
		"/admin": "/keystatic",
	},
	// i18n configuration must match src/config/translations.json.ts
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	markdown: {
		shikiConfig: {
			// Shiki Themes: https://shiki.style/themes
			theme: "css-variables",
			wrap: false,
		},
	},
	integrations: [
		// example auto import component into mdx files
		AutoImport({
			imports: [
				// https://github.com/delucis/astro-auto-import
				"@components/Admonition/Admonition.astro",
			],
		}),
		mdx(),
		react(),
		icon(),
		keystatic(),
		tailwind(),
		sitemap(),
		compress({
			HTML: true,
			JavaScript: true,
			CSS: false,
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}),
	],

	vite: {
		// stop inlining short scripts to fix issues with ClientRouter: https://github.com/withastro/astro/issues/12804
		build: {
			assetsInlineLimit: 0,
		},
		// get rid of Dart Sass deprecation warning
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler",
				},
			},
		},
	},
});
