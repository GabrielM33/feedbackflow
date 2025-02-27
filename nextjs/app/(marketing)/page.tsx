import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />

      {/* How it works section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              How FeedbackFlow AI works
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Our simple process helps you harness the power of AI to transform
              your customer feedback management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Connect Your Sources
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Easily integrate with Google Reviews, Yelp, social media, and
                email to collect all your feedback in one place.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI automatically categorizes feedback by sentiment and
                identifies key themes and patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Respond & Improve</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use AI-generated responses as a starting point, customize them,
                and track improvements over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Stats section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                65%
              </p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                Average reduction in response time
              </p>
            </div>

            <div className="text-center p-6">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                85%
              </p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                AI sentiment analysis accuracy
              </p>
            </div>

            <div className="text-center p-6">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                500+
              </p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                Small businesses using FeedbackFlow
              </p>
            </div>

            <div className="text-center p-6">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                24%
              </p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                Average increase in positive reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
