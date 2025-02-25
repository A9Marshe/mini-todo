import { i18n, Locale } from "@/i18n-config";
import { NextRequest } from "next/server";

export function removeLocaleFromUrl(pathname: string): string {
  let newPathname = pathname;
  const firstSegment = pathname.split("/")[1];
  if (i18n.locales.includes(firstSegment as "ar" | "en")) {
    newPathname = pathname.slice(firstSegment.length + 1);
  }

  return newPathname;
}

export function extractLocaleFromUrl(request: NextRequest): Locale | null {
  const url = request.nextUrl.clone();
  const firstSegment = url.pathname.split("/")[1] as Locale;
  console.log("url pathname is: ,", url.pathname);
  console.log(" in extract locale, first segment is: ", firstSegment);

  if (i18n.locales.includes(firstSegment as "ar" | "en")) {
    return firstSegment;
  }

  return null;
}
