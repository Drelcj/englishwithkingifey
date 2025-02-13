import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { privateRoutes } from "./routes";

export default auth(async (req) => {
  const { nextUrl } = req;
  const session = req.auth;
  const path = nextUrl.pathname;

  // Allow API routes
  if (path.startsWith("/api")) return NextResponse.next();

  // Redirect unauthenticated users from private routes
  if (privateRoutes.includes(path) && !session?.user) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  // Handle authenticated users
  if (session?.user) {
    // Redirect from auth pages to appropriate dashboard
    if (path.startsWith("/auth")) {
      return NextResponse.redirect(
        new URL(
          session.user.role === "ADMIN" ? "/admin/dashboard" : "/dashboard",
          nextUrl
        )
      );
    }

    // Admin route protection
    if (path.startsWith("/admin")) {
      if (session.user.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/dashboard", nextUrl));
      }
      return NextResponse.next();
    }

    // Force admins to the admin dashboard if they are on the regular dashboard
  if (path.startsWith("/dashboard") && session.user.role === "ADMIN") {
    return NextResponse.redirect(new URL("/admin/dashboard", nextUrl));
  }
}

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};