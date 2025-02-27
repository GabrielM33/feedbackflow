"use client";

import {
  ChatBubbleIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  HeartIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

// Dashboard stats card component
const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className={`rounded-full p-3 ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

// Feedback item component
const FeedbackItem = ({
  source,
  content,
  sentiment,
  date,
}: {
  source: string;
  content: string;
  sentiment: "positive" | "negative" | "neutral";
  date: string;
}) => {
  const sentimentColors = {
    positive: "text-green-500 bg-green-50 dark:bg-green-900/20",
    negative: "text-red-500 bg-red-50 dark:bg-red-900/20",
    neutral: "text-gray-500 bg-gray-50 dark:bg-gray-700/20",
  };

  const sentimentIcons = {
    positive: <HeartIcon className="w-4 h-4" />,
    negative: <ExclamationTriangleIcon className="w-4 h-4" />,
    neutral: <ChatBubbleIcon className="w-4 h-4" />,
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <div className="font-medium">{source}</div>
        <div
          className={`flex items-center px-2 py-1 rounded-full text-xs ${sentimentColors[sentiment]}`}
        >
          {sentimentIcons[sentiment]}
          <span className="ml-1 capitalize">{sentiment}</span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{content}</p>
      <div className="text-xs text-gray-500 flex items-center">
        <ClockIcon className="w-3 h-3 mr-1" />
        {date}
      </div>
    </div>
  );
};

export default function Dashboard() {
  // Sample data - in a real app this would come from an API
  const stats = [
    {
      title: "Total Feedback",
      value: 327,
      icon: ChatBubbleIcon,
      color: "bg-blue-500",
    },
    {
      title: "Average Response Time",
      value: "4.2 hrs",
      icon: ClockIcon,
      color: "bg-amber-500",
    },
    {
      title: "Positive Rate",
      value: "78%",
      icon: HeartIcon,
      color: "bg-green-500",
    },
    {
      title: "Pending Responses",
      value: 12,
      icon: MagnifyingGlassIcon,
      color: "bg-purple-500",
    },
  ];

  const recentFeedback = [
    {
      id: 1,
      source: "Google Reviews",
      content:
        "The customer service was exceptional. They went above and beyond to solve my issue.",
      sentiment: "positive",
      date: "Today, 2:34 PM",
    },
    {
      id: 2,
      source: "Email",
      content:
        "I've been waiting for a response for 2 days now. Very disappointed with the service.",
      sentiment: "negative",
      date: "Yesterday, 10:15 AM",
    },
    {
      id: 3,
      source: "Facebook",
      content: "Product works as expected. Delivery was on time.",
      sentiment: "neutral",
      date: "Oct 18, 2024",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Collect Feedback
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Feedback</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              View All
            </button>
          </div>
          {recentFeedback.map((feedback) => (
            <FeedbackItem
              key={feedback.id}
              source={feedback.source}
              content={feedback.content}
              sentiment={
                feedback.sentiment as "positive" | "negative" | "neutral"
              }
              date={feedback.date}
            />
          ))}
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Sentiment Distribution
            </h2>
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Positive</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    78%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Neutral</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    15%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gray-500 h-2 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Negative</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    7%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "7%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
