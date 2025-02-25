export const i18n = {
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en",
  locales: ["en", "ar"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
