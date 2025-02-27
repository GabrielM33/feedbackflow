import Link from "next/link";
import { CheckIcon } from "@radix-ui/react-icons";

// Pricing plan component
const PricingPlan = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  buttonText = "Get Started",
  buttonLink = "/dashboard",
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  buttonLink?: string;
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden ${
        highlighted
          ? "ring-2 ring-blue-600 shadow-xl scale-105 lg:scale-110 z-10 bg-white dark:bg-gray-800"
          : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md"
      }`}
    >
      {highlighted && (
        <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {price}
          </span>
          <span className="ml-1 text-xl font-semibold text-gray-500 dark:text-gray-400">
            /month
          </span>
        </p>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
          {description}
        </p>

        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
              <span className="ml-3 text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href={buttonLink}
            className={`block w-full py-3 px-4 text-center rounded-md font-medium ${
              highlighted
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

// FAQ component
const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {question}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  );
};

export default function PricingPage() {
  const plans = [
    {
      name: "Base Plan",
      price: "$50",
      description:
        "Perfect for small businesses just getting started with feedback management.",
      features: [
        "500 feedback entries per month",
        "AI sentiment analysis",
        "Basic reporting",
        "Email + 2 platform integrations",
        "Standard support",
      ],
    },
    {
      name: "Pro Plan",
      price: "$100",
      description:
        "For growing businesses with higher feedback volume and advanced needs.",
      features: [
        "2,000 feedback entries per month",
        "Advanced AI analytics",
        "Customizable dashboards",
        "All platform integrations",
        "Priority support",
        "Response templates library",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "Tailored for businesses with complex requirements and large volumes.",
      features: [
        "Unlimited feedback entries",
        "Custom AI training",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "Team collaboration tools",
        "Custom integrations",
      ],
      buttonText: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your current billing period.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "We offer a 14-day free trial on our Base Plan with no credit card required. This gives you full access to test out the features before committing.",
    },
    {
      question: "How do the platform integrations work?",
      answer:
        "We use webhooks and APIs to connect with platforms like Google Reviews, Yelp, Facebook, and others. Setup typically takes just a few minutes per platform.",
    },
    {
      question: "What happens if I exceed my monthly feedback limit?",
      answer:
        "If you approach your monthly limit, we'll notify you. You can either upgrade to a higher plan or pay for additional entries at a per-unit rate.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes, we offer a 15% discount when you choose annual billing on any of our plans.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Choose the plan that works best for your business. All plans include
            a 14-day free trial.
          </p>
        </div>

        {/* Pricing toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg inline-flex">
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300">
              Annually (Save 15%)
            </button>
          </div>
        </div>

        {/* Pricing plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 items-center max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              buttonText={plan.buttonText}
            />
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-lg p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Need a custom solution?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We offer tailored plans for businesses with specific
                requirements or large volumes.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 whitespace-nowrap"
            >
              Contact Our Sales Team
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to transform your customer feedback?
          </h2>
          <Link
            href="/dashboard"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
          >
            Start Your Free Trial
          </Link>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </div>
  );
}
