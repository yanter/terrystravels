import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Dawnlight",
	// Your website's title and description (meta fields)
	title: "Dawnlight | The beautiful affiliate and blog website template by Cosmic Themes.",
	description:
		"The beautiful affiliate and blog theme for Astro designed by Cosmic Themes. Everything you need for a stunning blog and affiliate website.",
	// Your information!
	author: {
		name: "Ashley",
		email: "creator@cosmicthemes.com",
		twitter: "Cosmic_Themes",
		slug: "main-author", // this must match an author slug in the authors content collection at src/data/authors/{slug}
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes Logo",
	},
};

export default siteData;
