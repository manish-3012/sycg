import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { CustomUser } from "./app/api/auth/[...nextauth]/options";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // console.log("Middleware called for path:", pathname);

  // Allow access to /login and /admin/login without authentication
  if (pathname === "/login" || pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = await getToken({ req: request });
  // console.log("Middleware - Token:", token);

  // Protect all routes starting with /admin, except /admin/login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!token) {
      return NextResponse.redirect(
        new URL(
          "/admin/login?error=Please login first to access this route",
          request.url
        )
      );
    }

    // Get user from token
    const user: CustomUser | null = token?.user as CustomUser;

    // If user is not an Admin, redirect to admin login
    if (user.role !== "Admin") {
      return NextResponse.redirect(
        new URL(
          "/admin/login?error=You do not have permission to access this route.",
          request.url
        )
      );
    }
  }

  // * Protected routes for user
  const userProtectedRoutes = [""];

  // Check for user protected routes
  if (userProtectedRoutes.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(
        new URL(
          "/login?error=Please login first to access this route",
          request.url
        )
      );
    }

    // Get user from token
    const user: CustomUser | null = token?.user as CustomUser;

    // If Admin tries to access user routes
    if (user.role === "Admin") {
      return NextResponse.redirect(
        new URL(
          "/login?error=Please login as a user to access this route.",
          request.url
        )
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}