import { countItems, getAllPosts, sortByValue } from "@js/blogUtils";
import { humanize } from "@js/textUtils";

// get the categories used in blog posts, to put into navbar
const posts = await getAllPosts("en");
const allCategories = posts.map((post) => post.data.categories).flat();
const countedCategories = countItems(allCategories);
const processedCategories = sortByValue(countedCategories);

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "OVERVIEW",
		link: "/overview/",
	},
	{
		text: "ABOUT",
		link: "/about/",
	},
	// {
	//   // get the categories used in blog posts, to put into a navbar dropdown
	//   text: "CATEGORIES",
	//   dropdown: processedCategories.map(([category, count]) => {
	//     return {
	//       text: humanize(category).toUpperCase(),
	//       link: `/categories/${category}/`,
	//     };
	//   }),
	// },
	...processedCategories.map(([category, count]) => ({
		// get the categories used in blog posts, to create a navlink for each
		text: humanize(category).toUpperCase(),
		link: `/categories/${category}/`,
	})),

	// {
	//   text: "CONTACT",
	//   link: "/contact/",
	// },
];

export default navConfig;
