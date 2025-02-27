import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Database } from "@/lib/supabase/database-types";

// This route handles signing out a user
export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies });

  // Sign out the user
  await supabase.auth.signOut();

  // After sign out, redirect to home page
  return NextResponse.redirect(new URL("/", request.url));
}
