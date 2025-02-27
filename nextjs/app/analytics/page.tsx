"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

// Analytics card component
const AnalyticsCard = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default function AnalyticsPage() {
  // Sample data for charts
  const sentimentData = [
    { name: "Positive", value: 78 },
    { name: "Neutral", value: 15 },
    { name: "Negative", value: 7 },
  ];

  const sourceData = [
    { name: "Google", value: 35 },
    { name: "Email", value: 25 },
    { name: "Facebook", value: 18 },
    { name: "Yelp", value: 12 },
    { name: "Twitter", value: 10 },
  ];

  const trendsData = [
    { name: "Jan", positive: 65, negative: 12, neutral: 23 },
    { name: "Feb", positive: 68, negative: 15, neutral: 17 },
    { name: "Mar", positive: 70, negative: 10, neutral: 20 },
    { name: "Apr", positive: 72, negative: 8, neutral: 20 },
    { name: "May", positive: 75, negative: 9, neutral: 16 },
    { name: "Jun", positive: 78, negative: 7, neutral: 15 },
  ];

  const responseTimeData = [
    { name: "Jan", time: 5.2 },
    { name: "Feb", time: 4.8 },
    { name: "Mar", time: 4.5 },
    { name: "Apr", time: 4.6 },
    { name: "May", time: 4.4 },
    { name: "Jun", time: 4.2 },
  ];

  const COLORS = ["#4ade80", "#a3a3a3", "#f87171"];

  const topThemesData = [
    { name: "Customer Service", count: 156, sentiment: "positive" },
    { name: "Product Quality", count: 98, sentiment: "positive" },
    { name: "Delivery Time", count: 74, sentiment: "negative" },
    { name: "Website Usability", count: 68, sentiment: "neutral" },
    { name: "Pricing", count: 54, sentiment: "positive" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnalyticsCard
          title="Overall Satisfaction"
          subtitle="Based on sentiment analysis"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsCard>

        <AnalyticsCard title="Sentiment Trends" subtitle="Last 6 months">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trendsData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="positive"
                  stroke="#4ade80"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="neutral" stroke="#a3a3a3" />
                <Line type="monotone" dataKey="negative" stroke="#f87171" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsCard>

        <AnalyticsCard
          title="Feedback Sources"
          subtitle="Distribution by platform"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sourceData}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AnalyticsCard
          title="Average Response Time"
          subtitle="In hours, lower is better"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={responseTimeData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="time"
                  stroke="#8b5cf6"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsCard>

        <AnalyticsCard
          title="Top Feedback Themes"
          subtitle="Based on AI analysis"
        >
          <div className="space-y-4">
            {topThemesData.map((theme) => (
              <div key={theme.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{theme.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {theme.count} mentions
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      theme.sentiment === "positive"
                        ? "bg-green-500"
                        : theme.sentiment === "negative"
                        ? "bg-red-500"
                        : "bg-gray-500"
                    }`}
                    style={{ width: `${(theme.count / 200) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </AnalyticsCard>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Summary Insights</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            AI-generated insights based on your feedback data
          </p>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h4 className="font-medium mb-2">Positive Trend</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Customer satisfaction has improved by 13% over the last 6 months,
              primarily driven by improvements in customer service quality.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
            <h4 className="font-medium mb-2">Area for Improvement</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Delivery time continues to be mentioned as a pain point, with 74
              negative comments in the past 30 days.
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <h4 className="font-medium mb-2">Recommended Action</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Consider reviewing your shipping process and communicating more
              clearly about delivery timelines to address the most common
              customer concern.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
