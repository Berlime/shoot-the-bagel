/**
 * * This is the Keystatic configuration file. It is used to define the collections and fields that will be used in the Keystatic CMS.
 *
 * ! This works in conjunction with Astro content collections. If you update one, you must update the other.
 *
 * Access keystatic interface at /admin or /keystatic
 * This works in local mode in dev, then cloud mode in prod
 * Cloud deployment is free to sign up (up to 3 users per team)
 * Docs: https://keystatic.com/docs/cloud
 * Create a Keystatic Cloud account here: https://keystatic.cloud/
 */

import Collections from "@components/KeystaticComponents/Collections";
import { config } from "@keystatic/core";

export default config({
	// works in local mode in dev, then cloud mode in prod
	storage: import.meta.env.DEV === true 
		? { kind: "local" }
		: { kind: "cloud" },
	
	// cloud deployment is free to sign up (up to 3 users per team)
	// docs: https://keystatic.com/docs/cloud
	// create a Keystatic Cloud account here: https://keystatic.cloud/
	cloud: { 
		project: "cosmic-themes/amplify",
		// Add your GitHub OAuth credentials here for cloud mode
		// clientId: import.meta.env.GITHUB_CLIENT_ID,
		// clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
	},
	
	ui: {
		brand: { name: "Amplify CMS" },
		navigation: {
			"Content": ["blogEN", "authors", "otherPagesEN"],
		},
	},
	
	collections: {
		blogEN: Collections.Blog("en"),
		authors: Collections.Authors(""),
		otherPagesEN: Collections.OtherPages("en"),
	},
});
