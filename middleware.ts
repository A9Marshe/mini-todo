import { NextRequest } from "next/server";
import localizeRequest from "./lib/middleware.utils";

export async function middleware(request: NextRequest) {
  // Check if the URL is the root path (localhost:3000)
  //   if (url.pathname === "/") {
  //     // Redirect to default locale (e.g., 'ar') + '/dashboard'
  //     url.pathname = `/${i18n.defaultLocale}/dashboard`;
  //     return NextResponse.redirect(url);
  //   }
  return await localizeRequest(request);
}
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
