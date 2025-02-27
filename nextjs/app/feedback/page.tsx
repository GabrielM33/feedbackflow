"use client";

import { useState } from "react";
import { ChatBubbleIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

// Define a type for our feedback data
type FeedbackItem = {
  id: number;
  source: string;
  content: string;
  sentiment: "positive" | "negative" | "neutral";
  date: string;
  status: "Responded" | "Pending";
};

// Filter button component
const FilterButton = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;

  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
          : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </button>
  );
};

// Feedback table component
const FeedbackTable = ({ data }: { data: FeedbackItem[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Feedback
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Sentiment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((feedback) => (
              <tr key={feedback.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <ChatBubbleIcon className="mr-2 h-4 w-4 text-gray-500" />
                    <span>{feedback.source}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-md truncate" title={feedback.content}>
                    {feedback.content}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      feedback.sentiment === "positive"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : feedback.sentiment === "negative"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {feedback.sentiment}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {feedback.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      feedback.status === "Responded"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        : feedback.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {feedback.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                      Respond
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function FeedbackPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample feedback data
  const allFeedback: FeedbackItem[] = [
    {
      id: 1,
      source: "Google Reviews",
      content:
        "The customer service was exceptional. They went above and beyond to solve my issue.",
      sentiment: "positive",
      date: "Today, 2:34 PM",
      status: "Responded",
    },
    {
      id: 2,
      source: "Email",
      content:
        "I've been waiting for a response for 2 days now. Very disappointed with the service.",
      sentiment: "negative",
      date: "Yesterday, 10:15 AM",
      status: "Pending",
    },
    {
      id: 3,
      source: "Facebook",
      content: "Product works as expected. Delivery was on time.",
      sentiment: "neutral",
      date: "Oct 18, 2024",
      status: "Responded",
    },
    {
      id: 4,
      source: "Yelp",
      content: "Great prices but the shipping took longer than expected.",
      sentiment: "neutral",
      date: "Oct 15, 2024",
      status: "Pending",
    },
    {
      id: 5,
      source: "Twitter",
      content: "Love the new product lineup! Will definitely be ordering more.",
      sentiment: "positive",
      date: "Oct 12, 2024",
      status: "Responded",
    },
  ];

  // Filter feedback based on active filter and search query
  const filteredFeedback = allFeedback.filter((feedback) => {
    // Filter by status
    if (
      activeFilter !== "all" &&
      activeFilter !== feedback.status.toLowerCase()
    ) {
      return false;
    }

    // Filter by search query
    if (
      searchQuery &&
      !feedback.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !feedback.source.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Feedback Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Connect New Source
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex space-x-2">
            <FilterButton
              label="All"
              active={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
            />
            <FilterButton
              label="Pending"
              active={activeFilter === "pending"}
              onClick={() => setActiveFilter("pending")}
            />
            <FilterButton
              label="Responded"
              active={activeFilter === "responded"}
              onClick={() => setActiveFilter("responded")}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search feedback..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredFeedback.length} of {allFeedback.length} feedback
          items
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Sort by:
          </span>
          <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-900">
            <option>Most Recent</option>
            <option>Oldest</option>
            <option>Sentiment</option>
            <option>Source</option>
          </select>
        </div>
      </div>

      <FeedbackTable data={filteredFeedback} />
    </div>
  );
}
