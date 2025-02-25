import { i18n } from "@/i18n-config";
import { NextRequest, NextResponse } from "next/server";
import { extractLocaleFromUrl } from "./utils/i18n";

export default async function localizeRequest(request: NextRequest) {
  const hasLocale = extractLocaleFromUrl(request);

  if (!hasLocale) {
    const url = request.nextUrl.clone();
    const { pathname } = url;
    console.log("no locale found, adding default");
    url.pathname = `/${i18n.defaultLocale}/${pathname}`;
    return NextResponse.redirect(url);
  } else {
    console.log("locale found, url is: ", request.nextUrl.pathname);
  }
}
