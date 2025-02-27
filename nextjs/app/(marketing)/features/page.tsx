import Link from "next/link";
import {
  ChatBubbleIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  BarChartIcon,
  LightningBoltIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { CTASection } from "../components/CTASection";

// Feature section component
const FeatureSection = ({
  title,
  description,
  icon: Icon,
  children,
  imageRight = false,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  imageRight?: boolean;
}) => {
  return (
    <div className="py-16 border-b border-gray-200 dark:border-gray-800 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            imageRight ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-12 items-center`}
        >
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {description}
            </p>
            <ul className="space-y-4">
              {Array.isArray(children) ? children : [children]}
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg h-72 flex items-center justify-center">
              {/* Placeholder for feature image/illustration */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  Feature Illustration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature list item component
const FeatureListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex">
      <ArrowRightIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </li>
  );
};

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
            Powerful features that transform feedback management
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Discover how FeedbackFlow AI helps small businesses collect,
            analyze, and respond to customer feedback efficiently.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features sections */}
      <FeatureSection
        title="AI-Powered Sentiment Analysis"
        description="Automatically categorize feedback as positive, negative, or neutral and identify key themes with our AI engine."
        icon={MagnifyingGlassIcon}
      >
        <FeatureListItem text="85% accurate sentiment detection out of the box" />
        <FeatureListItem text="Automatic categorization of feedback themes" />
        <FeatureListItem text="Real-time analysis as feedback arrives" />
        <FeatureListItem text="Machine learning that improves over time" />
      </FeatureSection>

      <FeatureSection
        title="Multi-Source Collection"
        description="Aggregate feedback from multiple channels including email, social media, and review platforms."
        icon={ChatBubbleIcon}
        imageRight={true}
      >
        <FeatureListItem text="Integration with Google Reviews, Yelp, Facebook, and more" />
        <FeatureListItem text="Email forwarding for customer message collection" />
        <FeatureListItem text="Webhooks for real-time feedback capture" />
        <FeatureListItem text="Centralized dashboard for all sources" />
      </FeatureSection>

      <FeatureSection
        title="Automated Responses"
        description="Generate customized AI responses to feedback that can be edited before sending."
        icon={ArrowRightIcon}
      >
        <FeatureListItem text="Smart response templates based on feedback content" />
        <FeatureListItem text="Tone customization (formal, friendly, professional)" />
        <FeatureListItem text="One-click editing before sending" />
        <FeatureListItem text="Response tracking and effectiveness metrics" />
      </FeatureSection>

      <FeatureSection
        title="Analytics & Reporting"
        description="Visualize trends, sentiment distribution, and other metrics through interactive dashboards."
        icon={BarChartIcon}
        imageRight={true}
      >
        <FeatureListItem text="Visual dashboards showing feedback patterns" />
        <FeatureListItem text="Sentiment trends over time" />
        <FeatureListItem text="Source effectiveness comparison" />
        <FeatureListItem text="Exportable reports in PDF and CSV formats" />
      </FeatureSection>

      <FeatureSection
        title="Fast Implementation"
        description="Set up in minutes with our no-code integration options for popular platforms and services."
        icon={LightningBoltIcon}
      >
        <FeatureListItem text="5-minute setup for most integrations" />
        <FeatureListItem text="No developer knowledge required" />
        <FeatureListItem text="Guided onboarding process" />
        <FeatureListItem text="Import existing feedback from CSV" />
      </FeatureSection>

      <FeatureSection
        title="Customization & Integrations"
        description="Tailor the platform to your business needs and connect with your existing tools."
        icon={GearIcon}
        imageRight={true}
      >
        <FeatureListItem text="Customizable dashboard views" />
        <FeatureListItem text="API access for custom integrations" />
        <FeatureListItem text="Zapier integration for workflow automation" />
        <FeatureListItem text="Webhook support for real-time data" />
      </FeatureSection>

      {/* Feature comparison */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              How we compare
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              See how FeedbackFlow AI stacks up against manual feedback
              management
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Manual Process
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    FeedbackFlow AI
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Time to Process Feedback
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    15-30 minutes per item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Seconds per item
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Sentiment Analysis
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    Subjective, inconsistent
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-medium">
                    AI-powered, 85%+ accuracy
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Response Time
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    1-3 days average
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Same day (often within hours)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Platform Coverage
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    Limited by staff time
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-medium">
                    All major platforms, centralized
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Reporting
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    Manual spreadsheets
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Automated, real-time dashboards
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
