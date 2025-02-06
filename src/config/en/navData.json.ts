/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	// {
	// 	text: "Overview",
	// 	link: "/overview",
	// },

	{
		text: "About",
		link: "/about",
		icon: "tabler/user",
	},

	// mega menu - leave this comment out
	// {
	// 	text: "Pages",
	// 	megaMenuColumns: [
	// 		{
	// 			title: "Development",
	// 			items: [
	// 				{
	// 					text: "Websites",
	// 					link: "/services/websites",
	// 					icon: "tabler/star",
	// 				},
	// 				{
	// 					text: "Intranets",
	// 					link: "/services/intranets",
	// 					icon: "tabler/diamonds",
	// 				},
	// 				{
	// 					text: "SysAdmin",
	// 					link: "/examples/landing3",
	// 					icon: "tabler/circle",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Branding",
	// 			items: [
	// 				{
	// 					text: "Logo Design",
	// 					link: "/blog/tsconfig-paths-setup",
	// 					icon: "tabler/edit-circle",
	// 				},
	// 				{
	// 					text: "Photography",
	// 					link: "/examples/blog-post-2",
	// 					icon: "tabler/edit-circle",
	// 				},
	// 				{
	// 					text: "Categories",
	// 					link: "/categories",
	// 					icon: "tabler/category",
	// 				},
	// 				{
	// 					text: "Blog Index 1",
	// 					link: "/blog",
	// 					icon: "tabler/pencil",
	// 				},
	// 				{
	// 					text: "Blog Index 2",
	// 					link: "/examples/blog-index-2",
	// 					icon: "tabler/pencil",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Elements and Forms",
	// 			items: [
	// 				{
	// 					text: "MDX Pages",
	// 					link: "/elements",
	// 					icon: "tabler/wand",
	// 				},
	// 				{
	// 					text: "Contact",
	// 					link: "/contact",
	// 					icon: "tabler/address-book",
	// 				},
	// 				{
	// 					text: "Login",
	// 					link: "/login",
	// 					icon: "tabler/login",
	// 				},
	// 				{
	// 					text: "Signup",
	// 					link: "/signup",
	// 					icon: "tabler/user",
	// 				},
	// 				{
	// 					text: "Password Reset",
	// 					link: "/password-reset",
	// 					icon: "tabler/password",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Other Pages",
	// 			items: [
	// 				{
	// 					text: "About",
	// 					link: "/about",
	// 					icon: "tabler/user",
	// 				},
	// 				{
	// 					text: "Privacy Policy",
	// 					link: "/privacy-policy",
	// 					icon: "tabler/lock-square",
	// 				},
	// 				{
	// 					text: "Terms of Use",
	// 					link: "/terms",
	// 					icon: "tabler/script",
	// 				},
	// 				{
	// 					text: "Page not found",
	// 					link: "/not-a-link",
	// 					icon: "tabler/error-404",
	// 				},
	// 				{
	// 					text: "RSS Feed",
	// 					link: "/rss.xml",
	// 					newTab: true,
	// 					icon: "tabler/rss",
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	// End of mega menu - leave this comment out

	{
		text: "Insights",
		link: "/blog",
		icon: "tabler/diamonds",
	},
	{
		text: "Contact",
		link: "/contact",
		icon: "tabler/address-book",
	},
];

export default navConfig;
