# Supabase Setup for FeedbackFlow AI

This guide explains how to set up Supabase as the database and authentication provider for the FeedbackFlow AI application.

## Setting Up Supabase

1. **Create a Supabase Account**

   Go to [Supabase](https://supabase.com/) and sign up for an account if you don't already have one.

2. **Create a New Project**

   - Create a new project in Supabase
   - Choose a name (e.g., "feedbackflow")
   - Choose a strong password for the database

3. **Get Your Project Credentials**

   Once your project is created, go to the project dashboard and:

   - Navigate to Project Settings > API
   - Copy the "Project URL" and "anon/public" API key
   - Add these values to your `.env.local` file:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

## Database Setup

1. **Create Database Tables**

   - Go to the SQL Editor in your Supabase dashboard
   - Copy the contents of `lib/supabase/schema.sql` from this project
   - Run the SQL commands to create the necessary tables, triggers, and policies

2. **Enable Email Authentication**

   - Go to Authentication > Providers
   - Ensure "Email" is enabled
   - Configure any additional auth providers you want to use (e.g., Google, GitHub)

3. **Configure Email Templates**

   - Go to Authentication > Email Templates
   - Customize the "Confirm signup", "Reset password", and other templates to match your brand

## Row Level Security (RLS)

The SQL schema automatically sets up Row Level Security (RLS) for all tables, ensuring that:

- Users can only access their own profiles
- Users can only access their own feedback
- Users can only access responses to their own feedback

## Using Supabase in the Application

### Authentication

The application uses Supabase Auth for user authentication, with the following features:

- Sign up with email/password
- Sign in with email/password
- Third-party login (Google, GitHub)
- Password reset
- Protected routes via middleware

### Database Operations

Database operations are handled through the utility functions in:

- `lib/supabase/db.ts`

These functions provide typed access to the database tables with proper error handling and are organized by server-side and client-side operations.

### Key Components

- `lib/supabase/client.ts` - Client-side Supabase client
- `lib/supabase/server.ts` - Server-side Supabase client
- `components/providers/auth-provider.tsx` - React context for authentication
- `middleware.ts` - Handles protected routes and auth state

## Local Development

For local development, you can also use the Supabase CLI to run a local instance:

1. Install the Supabase CLI:

   ```bash
   npm install -g supabase
   ```

2. Start a local Supabase instance:

   ```bash
   supabase start
   ```

3. Update your `.env.local` file with the local URL and key.

## Deployment

When deploying to production:

1. Ensure your environment variables are properly set in your hosting platform
2. Use the production Supabase URL and anon key

## Troubleshooting

- If you encounter authentication issues, check the Supabase Authentication logs
- For database issues, you can view the SQL logs in the Supabase dashboard
- For RLS policy issues, test your policies using the SQL editor with different JWT tokens
