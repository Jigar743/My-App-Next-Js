import { NextResponse } from "next/server";
import { publicRoute } from "./utils/helper";

export function middleware(request) {
  const token = request.cookies.get("token")?.value || "";
  const { pathname } = request.nextUrl;
  const isPublicRoute = publicRoute.includes(pathname);

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: [
    "/login",
    "/signup",
    "/otp-verification",
    "/forget-password",
    "/users/:path*",
    "/todos/:path*",
    "/",
  ], //  "/users/:path*", "/todos/:path*", "/"
};
