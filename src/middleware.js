import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { publicRoute } from "./utils/helper";

export function middleware(request) {
  const token = request.cookies.get("token")?.value || "";
  const { pathname } = request.nextUrl;
  const isPublicRoute = publicRoute.includes(pathname);

  if (!token && !isPublicRoute) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ["/", "/login", "/signup", "/users/:path*", "/todos/:path*"],
};
