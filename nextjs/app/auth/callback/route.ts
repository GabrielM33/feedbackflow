import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Database } from "@/lib/supabase/database-types";

// This route handles the Supabase auth callback
// It exchanges the code for a session and redirects to the appropriate page
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    // Create a Supabase client for the route handler
    const supabase = createRouteHandlerClient<Database>({ cookies });

    // Exchange the code for a session
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  // Default to dashboard unless a specific redirect was set
  const redirectTo = requestUrl.searchParams.get("redirect") || "/dashboard";

  return NextResponse.redirect(new URL(redirectTo, requestUrl.origin));
}
