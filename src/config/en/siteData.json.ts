import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Terrys Travels",
	// Your website's title and description (meta fields)
	title: "Terrys Travels | The beautiful travel blog",
	description:
		"The beautiful travel blog theme",
	// Your information!
	author: {
		name: "Terry",
		email: "contact@terrystravels.com",
		twitter: "Terrys_Travels",
		slug: "main-author", // this must match an author slug in the authors content collection at src/data/authors/{slug}
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes Logo",
	},
};

export default siteData;
