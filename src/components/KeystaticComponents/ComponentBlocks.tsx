import { locales } from "@config/siteSettings.json";
import { fields } from "@keystatic/core";
import { block, wrapper } from "@keystatic/core/content-components";

// preview components
import KeystaticAdmonition from "./KeystaticAdmonition";
import KeystaticAffiliateLink from "./KeystaticAffiliateLink";

const Admonition = wrapper({
	label: "Admonition",
	ContentView: (props) => (
		<KeystaticAdmonition variant={props.value.variant}>{props.children}</KeystaticAdmonition>
	),
	schema: {
		variant: fields.select({
			label: "Variant",
			options: [
				{ value: "info", label: "Info" },
				{ value: "tip", label: "Tip" },
				{ value: "caution", label: "Caution" },
				{ value: "danger", label: "Danger" },
			],
			defaultValue: "info",
		}),
		// This makes it so you can edit what is inside the admonition
		content: fields.child({
			kind: "block",
			formatting: { inlineMarks: "inherit", softBreaks: "inherit" },
			links: "inherit",
			editIn: "both",
			label: "Admonition Content",
			placeholder: "Enter your admonition content here",
		}),
	},
});

/**
 *
 * @param imagePath Path to to the image (including locale)
 * @param locale Locale of the image
 * @returns component that works in the passed context
 */
const AffiliateLink = (imagePath: string, locale: (typeof locales)[number]) =>
	block({
		label: "Product Card",
		// ContentView: () => null,
		ContentView: (props) => (
			<KeystaticAffiliateLink
				image={props.value.image}
				description={props.value.description}
				linkText={props.value.linkText}
				linkUrl={props.value.linkUrl}
			/>
		),
		schema: {
			image: fields.image({
				label: "Image",
				directory: `${imagePath}`,
				publicPath: `../../${locale}/`,
				validation: { isRequired: true },
			}),
			description: fields.text({
				label: "Short product description",
				validation: { isRequired: true },
			}),
			linkText: fields.text({
				label: "Link Text",
				validation: { isRequired: true },
			}),
			linkUrl: fields.url({
				label: "Link URL",
				validation: { isRequired: true },
			}),
		},
	});

const Newsletter = block({
	label: "Newsletter",
	ContentView: () => null,
	schema: {},
});

export default {
	Newsletter,
	Admonition,
	AffiliateLink,
};
