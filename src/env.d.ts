/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly DEV: boolean;
	readonly KEYSTATIC_SECRET?: string;
	readonly KEYSTATIC_CLOUD_PROJECT?: string;
	readonly GITHUB_CLIENT_ID?: string;
	readonly GITHUB_CLIENT_SECRET?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}