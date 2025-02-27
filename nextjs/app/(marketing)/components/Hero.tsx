import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Transform your customer feedback into actionable insights
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
              FeedbackFlow AI streamlines how small businesses collect, analyze,
              and respond to customer feedback with AI-powered automation.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="inline-block rounded-md border border-transparent bg-blue-600 px-8 py-3 text-center font-medium text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="inline-block rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-8 py-3 text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                14-day free trial with no credit card required
              </p>
            </div>
          </div>

          <div className="hidden lg:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex-1">
                      <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 mr-2"></div>
                            <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-20 w-full bg-blue-50 dark:bg-blue-900/20 rounded"></div>
                  </div>
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex-1">
                      <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
                      <div className="space-y-3">
                        <div className="h-10 bg-green-50 dark:bg-green-900/20 rounded w-full"></div>
                        <div className="h-10 bg-red-50 dark:bg-red-900/20 rounded w-full"></div>
                        <div className="h-10 bg-yellow-50 dark:bg-yellow-900/20 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
                  <div className="p-4 h-full flex flex-col">
                    <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
                  <div className="p-4 h-full flex flex-col">
                    <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                    <div className="flex-1">
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                      <div className="h-20 bg-blue-50 dark:bg-blue-900/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
