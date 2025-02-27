"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "./database-types";

// Create a Supabase client for Server Components
export async function createClient() {
  return createServerComponentClient<Database>({ cookies });
}
