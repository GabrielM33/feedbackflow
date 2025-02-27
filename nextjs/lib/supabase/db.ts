import { createClient as createServerClient } from "./server";
import { createClient as createClientClient } from "./client";
import { Database } from "./database-types";

type Feedback = Database["public"]["Tables"]["feedback"]["Row"];
type FeedbackInsert = Database["public"]["Tables"]["feedback"]["Insert"];
type FeedbackUpdate = Database["public"]["Tables"]["feedback"]["Update"];

type Response = Database["public"]["Tables"]["responses"]["Row"];
type ResponseInsert = Database["public"]["Tables"]["responses"]["Insert"];
type ResponseUpdate = Database["public"]["Tables"]["responses"]["Update"];

type UserProfile = Database["public"]["Tables"]["user_profiles"]["Row"];
type UserProfileInsert =
  Database["public"]["Tables"]["user_profiles"]["Insert"];

// Define a type for the feedback stats item
type FeedbackStatsItem = {
  sentiment: string;
  status: string;
  created_at: string;
};

// Feedback CRUD Operations
export const feedbackService = {
  // Server-side operations (for server components)
  server: {
    // Get all feedback for a user
    async getAll(userId: string): Promise<Feedback[]> {
      const supabase = await createServerClient();
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching feedback:", error);
        return [];
      }

      return data || [];
    },

    // Get a single feedback by ID
    async getById(id: string): Promise<Feedback | null> {
      const supabase = await createServerClient();
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching feedback by ID:", error);
        return null;
      }

      return data;
    },

    // Get feedback stats
    async getStats(userId: string) {
      const supabase = await createServerClient();
      const { data, error } = await supabase
        .from("feedback")
        .select("sentiment, status, created_at")
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching feedback stats:", error);
        return { positive: 0, negative: 0, neutral: 0, total: 0 };
      }

      const stats = {
        positive: data.filter(
          (item: FeedbackStatsItem) => item.sentiment === "positive"
        ).length,
        negative: data.filter(
          (item: FeedbackStatsItem) => item.sentiment === "negative"
        ).length,
        neutral: data.filter(
          (item: FeedbackStatsItem) => item.sentiment === "neutral"
        ).length,
        total: data.length,
      };

      return stats;
    },
  },

  // Client-side operations
  client: {
    // Create new feedback
    async create(feedback: FeedbackInsert): Promise<Feedback | null> {
      const supabase = createClientClient();
      const { data, error } = await supabase
        .from("feedback")
        .insert(feedback)
        .select()
        .single();

      if (error) {
        console.error("Error creating feedback:", error);
        return null;
      }

      return data;
    },

    // Update feedback
    async update(
      id: string,
      updates: FeedbackUpdate
    ): Promise<Feedback | null> {
      const supabase = createClientClient();
      const { data, error } = await supabase
        .from("feedback")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        console.error("Error updating feedback:", error);
        return null;
      }

      return data;
    },

    // Delete feedback
    async delete(id: string): Promise<boolean> {
      const supabase = createClientClient();
      const { error } = await supabase.from("feedback").delete().eq("id", id);

      if (error) {
        console.error("Error deleting feedback:", error);
        return false;
      }

      return true;
    },
  },
};

// Response CRUD Operations
export const responseService = {
  // Server-side operations
  server: {
    // Get all responses for a feedback
    async getByFeedbackId(feedbackId: string): Promise<Response[]> {
      const supabase = await createServerClient();
      const { data, error } = await supabase
        .from("responses")
        .select("*")
        .eq("feedback_id", feedbackId)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching responses:", error);
        return [];
      }

      return data || [];
    },
  },

  // Client-side operations
  client: {
    // Create new response
    async create(response: ResponseInsert): Promise<Response | null> {
      const supabase = createClientClient();
      const { data, error } = await supabase
        .from("responses")
        .insert(response)
        .select()
        .single();

      if (error) {
        console.error("Error creating response:", error);
        return null;
      }

      return data;
    },

    // Update response
    async update(
      id: string,
      updates: ResponseUpdate
    ): Promise<Response | null> {
      const supabase = createClientClient();
      const { data, error } = await supabase
        .from("responses")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        console.error("Error updating response:", error);
        return null;
      }

      return data;
    },

    // Delete response
    async delete(id: string): Promise<boolean> {
      const supabase = createClientClient();
      const { error } = await supabase.from("responses").delete().eq("id", id);

      if (error) {
        console.error("Error deleting response:", error);
        return false;
      }

      return true;
    },
  },
};

// User Profile CRUD Operations
export const userProfileService = {
  // Server-side operations
  server: {
    // Get user profile
    async getByUserId(userId: string): Promise<UserProfile | null> {
      const supabase = await createServerClient();
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (error) {
        console.error("Error fetching user profile:", error);
        return null;
      }

      return data;
    },
  },

  // Client-side operations
  client: {
    // Create or update user profile
    async createOrUpdate(
      profile: UserProfileInsert
    ): Promise<UserProfile | null> {
      const supabase = createClientClient();

      // Check if profile exists
      const { data: existingProfile } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", profile.user_id)
        .single();

      if (existingProfile) {
        // Update existing profile
        const { data, error } = await supabase
          .from("user_profiles")
          .update({
            business_name: profile.business_name,
            business_type: profile.business_type,
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", profile.user_id)
          .select()
          .single();

        if (error) {
          console.error("Error updating user profile:", error);
          return null;
        }

        return data;
      } else {
        // Create new profile
        const { data, error } = await supabase
          .from("user_profiles")
          .insert({
            ...profile,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .select()
          .single();

        if (error) {
          console.error("Error creating user profile:", error);
          return null;
        }

        return data;
      }
    },
  },
};
