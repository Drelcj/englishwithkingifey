import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { privateRoutes } from "./routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const url = "http://localhost:3000";

  // 1. Handle API routes
  if (nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 2. Get authentication status safely
  const session = await auth();
  const isLoggedIn = !!session?.user;

  // 3. Handle authenticated users
  if (isLoggedIn) {
    // Redirect away from auth pages
    if (nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/dashboard", url));
    }

    // Admin route protection
    if (nextUrl.pathname.startsWith("/admin")) {
      // Type-safe role check
      if (session.user?.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/dashboard", url));
      }
    }
  } else {
    // Handle unauthenticated users
    if (privateRoutes.includes(nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/auth/login", url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};