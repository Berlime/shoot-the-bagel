import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Berlime Solutions",
	// Your website's title and description (meta fields)
	title: "Berlime - A Web Design & Development Studio",
	description:
		"Done for you an amazing website for your business & projects. Perfect for small businesses, enterprise, developers, startups, and personal use.",

	// used on contact page and footer
	contact: {
		address1: "2 Venture Drive",
		address2: "#14-02 Vision Exchange, SG, 608526",
		phone: "+65 9894-4737",
		email: "kevin@berlime.com",
	},

	// Your information for blog post purposes
	author: {
		name: "Kevin VA",
		email: "kevin@berlime.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
