/**
 * Global site settings
 */

import { type SiteSettingsProps } from "./types/configDataTypes";

// The below locales need to match what you've put in your `astro.config.mjs` file
export const locales = ["zh", "en"] as const;
export const defaultLocale = "en" as const;

// localeMap is used to map languages to their respective locales - used for formatDate function
export const localeMap = {
  zh: "zh",
	en: "en-US",
	
} as const;

// text to show in the language switcher for each locale
export const languageSwitcherMap = {
  zh: "ZH",
	en: "EN",
	
	// en: "English",
	// 
} as const;

// site settings that don't change between languages
export const siteSettings: SiteSettingsProps = {
	useViewTransitions: true,
	useAnimations: true,
};

export default siteSettings;
