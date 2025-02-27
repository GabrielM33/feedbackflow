"use server";

import { Suspense } from "react";
import { feedbackService } from "@/lib/supabase/db";
import { createClient } from "@/lib/supabase/server";

// Dashboard metrics component
const DashboardMetrics = async () => {
  const supabase = await createClient();

  // Get current user
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session?.user?.id;

  if (!userId) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
        <p>Please sign in to view your dashboard metrics.</p>
      </div>
    );
  }

  // Fetch feedback stats
  const stats = await feedbackService.server.getStats(userId);

  // Calculate response rate
  const responseRate =
    stats.total > 0
      ? Math.round(
          ((stats.positive + stats.negative + stats.neutral) / stats.total) *
            100
        )
      : 0;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Feedback
          </p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Positive</p>
          <p className="text-2xl font-bold text-green-600">{stats.positive}</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Negative</p>
          <p className="text-2xl font-bold text-red-600">{stats.negative}</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Response Rate
          </p>
          <p className="text-2xl font-bold text-blue-600">{responseRate}%</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
        {stats.total > 0 ? (
          <p>You have {stats.total} pieces of feedback to manage.</p>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No feedback yet. Connect your sources to start collecting feedback.
          </p>
        )}
      </div>
    </div>
  );
};

// Recent feedback component
const RecentFeedback = async () => {
  const supabase = await createClient();

  // Get current user
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session?.user?.id;

  if (!userId) {
    return null;
  }

  // Fetch recent feedback
  const feedback = await feedbackService.server.getAll(userId);
  const recentFeedback = feedback.slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>

      {recentFeedback.length > 0 ? (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentFeedback.map((item) => (
            <div key={item.id} className="py-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{item.source}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    item.sentiment === "positive"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : item.sentiment === "negative"
                      ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.sentiment}
                </span>
              </div>
              <p className="mt-2">{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          No feedback received yet.
        </p>
      )}

      {feedback.length > 5 && (
        <div className="mt-4 text-center">
          <a
            href="/feedback"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all feedback
          </a>
        </div>
      )}
    </div>
  );
};

// Quick actions component
const QuickActions = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mt-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href="/feedback/new"
          className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600 dark:text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Add Feedback</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manually add customer feedback
            </p>
          </div>
        </a>

        <a
          href="/integrations"
          className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-2 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-600 dark:text-purple-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">Connect Sources</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Integrate review platforms
            </p>
          </div>
        </a>

        <a
          href="/analytics"
          className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-2 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-600 dark:text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium">View Analytics</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              See feedback trends and insights
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default async function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <Suspense fallback={<div>Loading metrics...</div>}>
        <DashboardMetrics />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <Suspense fallback={<div>Loading recent feedback...</div>}>
            <RecentFeedback />
          </Suspense>
        </div>

        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
