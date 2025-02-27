import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Database } from "@/lib/supabase/database-types";

// This middleware handles Supabase authentication for our routes
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient<Database>({ req, res });

  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession();

  // Access the URL being requested
  const { pathname } = req.nextUrl;

  // Get the user's session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Authentication logic for protected routes
  const isAuthRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/feedback") ||
    pathname.startsWith("/analytics");

  // Redirect to login if accessing a protected route without a session
  if (isAuthRoute && !session) {
    const redirectUrl = new URL("/auth/login", req.url);
    redirectUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect to dashboard if already logged in and accessing auth routes
  if (
    (pathname.startsWith("/auth/login") ||
      pathname.startsWith("/auth/register")) &&
    session
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
}

// Apply middleware to match all routes except static assets and API routes
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/webhook).*)"],
};
