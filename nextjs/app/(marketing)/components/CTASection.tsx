import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="bg-blue-600 dark:bg-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform your feedback management?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have simplified their feedback
            process and improved customer satisfaction with FeedbackFlow AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 border border-blue-300 text-white rounded-md font-medium hover:bg-blue-700"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
