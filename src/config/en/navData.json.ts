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
		description: "Learn about our company, mission, and team"
	},

	{
		text: "Services",
		megaMenuColumns: [
			{
				title: "Development",
				items: [
					{
						text: "Websites",
						link: "/services/websites",
						icon: "tabler/home-heart",
						description: "Custom website development and design services"
					},
					{
						text: "Microsoft 365",
						link: "/services/microsoft-365",
						icon: "tabler/brand-windows",
						description: "Microsoft 365 setup, migration, and support"
					},
					{
						text: "Interactive",
						link: "/coming-soon",
						icon: "tabler/wand",
						description: "Interactive web applications and experiences"
					},
					{
						text: "Ai for Business",
						link: "/coming-soon",
						icon: "tabler/message-chatbot",
						description: "AI solutions to automate and optimize your business"
					},

				],
			},
			{
				title: "Marketing",
				items: [
					{
						text: "E-mail Marketing",
						link: "/coming-soon",
						icon: "tabler/send",
						description: "Email campaign management and automation"
					},
					{
						text: "WhatsApp Marketing",
						link: "/coming-soon",
						icon: "tabler/brand-whatsapp",
						description: "WhatsApp business solutions and marketing"
					},
					{
						text: "Search Engine",
						link: "/coming-soon",
						icon: "tabler/settings-search",
						description: "SEO optimization and search engine marketing"
					},
					{
						text: "Google Ads",
						link: "/coming-soon",
						icon: "tabler/brand-google-analytics",
						description: "Google Ads campaign management and optimization"
					},
					
				],
			},
			{
				title: "Networking",
				items: [
					{
						text: "SOHO Network",
						link: "/coming-soon",
						icon: "tabler/router",
						description: "Small office/home office network setup and management"
					},
					{
						text: "File Servers",
						link: "/coming-soon",
						icon: "tabler/server",
						description: "File server setup, maintenance, and security"
					},
					{
						text: "Cloud Engineering",
						link: "/coming-soon",
						icon: "tabler/cloud",
						description: "Cloud infrastructure and migration services"
					},
				],
			},
			{
				title: "Others",
				items: [
					{
						text: "Devices",
						link: "/coming-soon",
						icon: "tabler/cpu",
						description: "Device procurement and management solutions"
					},
					{
						text: "Softwares",
						link: "/coming-soon",
						icon: "tabler/layout-grid",
						description: "Software licensing and management services"
					},
					{
						text: "Computer Hardwares",
						link: "/coming-soon",
						icon: "tabler/devices-pc",
						description: "Hardware procurement and maintenance"
					},
				],
			},
		],
	},

	{
		text: "Insights",
		link: "/blog",
		description: "Latest news, tips, and insights from our team"
	},
	{
		text: "Contact",
		link: "/contact",
		description: "Get in touch with our team"
	},
];

export default navConfig;