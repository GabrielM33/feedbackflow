export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      feedback: {
        Row: {
          id: string;
          user_id: string;
          content: string;
          source: string;
          sentiment: string;
          created_at: string;
          updated_at: string;
          status: string;
          tags: string[] | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          content: string;
          source: string;
          sentiment?: string;
          created_at?: string;
          updated_at?: string;
          status?: string;
          tags?: string[] | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          content?: string;
          source?: string;
          sentiment?: string;
          created_at?: string;
          updated_at?: string;
          status?: string;
          tags?: string[] | null;
        };
      };
      responses: {
        Row: {
          id: string;
          feedback_id: string;
          content: string;
          created_at: string;
          updated_at: string;
          sent: boolean;
          sent_at: string | null;
        };
        Insert: {
          id?: string;
          feedback_id: string;
          content: string;
          created_at?: string;
          updated_at?: string;
          sent?: boolean;
          sent_at?: string | null;
        };
        Update: {
          id?: string;
          feedback_id?: string;
          content?: string;
          created_at?: string;
          updated_at?: string;
          sent?: boolean;
          sent_at?: string | null;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          user_id: string;
          business_name: string;
          business_type: string | null;
          subscription_tier: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          business_name: string;
          business_type?: string | null;
          subscription_tier?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          business_name?: string;
          business_type?: string | null;
          subscription_tier?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
