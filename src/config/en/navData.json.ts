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
					},
					{
						text: "Intranets",
						link: "/coming-soon",
						icon: "tabler/chevrons-up-right",
					},
					{
						text: "Automations",
						link: "/coming-soon", 
						icon: "tabler/refresh-dot",
					},
					{
						text: "Interactive",
						link: "/coming-soon",
						icon: "tabler/wand",
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
					},
					{
						text: "WhatsApp Marketing",
						link: "/coming-soon",
						icon: "tabler/brand-whatsapp",
					},
					{
						text: "Chatbots",
						link: "/coming-soon",
						icon: "tabler/message-chatbot",
					},
					{
						text: "Search Engine",
						link: "/coming-soon",
						icon: "tabler/settings-search",
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
					},
					{
						text: "File Servers",
						link: "/coming-soon",
						icon: "tabler/server",
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
					},
					{
						text: "Softwares",
						link: "/coming-soon",
						icon: "tabler/layout-grid",
					},
					{
						text: "Computer Hardwares",
						link: "/coming-soon",
						icon: "tabler/devices-pc",
					},
				],
			},
		],
	},

	{
		text: "Insights",
		link: "/blog",
	},
	{
		text: "Contact",
		link: "/contact",
	},
];

export default navConfig;
