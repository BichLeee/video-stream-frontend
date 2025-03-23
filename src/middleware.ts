import { NextRequest, NextResponse } from "next/server";

const locales = ["vi", "en"];

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;

    // Redirect to /en if the URL is "/"
    if (pathname === "/") {
        request.nextUrl.pathname = "/en";
        return NextResponse.redirect(request.nextUrl);
    }

    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = "en";
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};
