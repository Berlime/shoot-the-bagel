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
						icon: "tabler/star",
					},
					{
						text: "Intranets",
						link: "/coming-soon",
						icon: "tabler/diamonds",
					},
					{
						text: "Automations",
						link: "/coming-soon", 
						icon: "tabler/circle",
					},
					{
						text: "Interactive",
						link: "/coming-soon",
						icon: "tabler/circle",
					},

				],
			},
			{
				title: "Marketing",
				items: [
					{
						text: "E-mail Marketing",
						link: "/coming-soon",
						icon: "tabler/edit-circle",
					},
					{
						text: "WhatsApp Marketing",
						link: "/coming-soon",
						icon: "tabler/edit-circle",
					},
					{
						text: "Chatbots",
						link: "/coming-soon",
						icon: "tabler/category",
					},
					{
						text: "Search Engine",
						link: "/coming-soon",
						icon: "tabler/pencil",
					},
				],
			},
			{
				title: "Networking",
				items: [
					{
						text: "SOHO Network",
						link: "/coming-soon",
						icon: "tabler/wand",
					},
					{
						text: "File Servers",
						link: "/coming-soon",
						icon: "tabler/address-book",
					},
				],
			},
			{
				title: "Others",
				items: [
					{
						text: "Devices",
						link: "/coming-soon",
						icon: "tabler/user",
					},
					{
						text: "Softwares",
						link: "/coming-soon",
						icon: "tabler/lock-square",
					},
					{
						text: "Computer Hardwares",
						link: "/coming-soon",
						icon: "tabler/script",
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
