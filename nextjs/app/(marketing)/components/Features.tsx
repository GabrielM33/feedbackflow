import {
  ChatBubbleIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  BarChartIcon,
  LightningBoltIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

// Feature card component
const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50"></div>
      <div className="relative">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export const Features = () => {
  const features = [
    {
      title: "AI-Powered Sentiment Analysis",
      description:
        "Automatically categorize feedback as positive, negative, or neutral and identify key themes with our AI engine.",
      icon: MagnifyingGlassIcon,
    },
    {
      title: "Multi-Source Collection",
      description:
        "Aggregate feedback from multiple channels including email, social media, and review platforms.",
      icon: ChatBubbleIcon,
    },
    {
      title: "Automated Responses",
      description:
        "Generate customized AI responses to feedback that can be edited before sending.",
      icon: ArrowRightIcon,
    },
    {
      title: "Analytics & Reporting",
      description:
        "Visualize trends, sentiment distribution, and other metrics through interactive dashboards.",
      icon: BarChartIcon,
    },
    {
      title: "Fast Implementation",
      description:
        "Set up in minutes with our no-code integration options for popular platforms and services.",
      icon: LightningBoltIcon,
    },
    {
      title: "Continuous Improvement",
      description:
        "Our AI learns from your feedback and customers, constantly improving response quality and insights.",
      icon: RocketIcon,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Features packed with everything you need
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            FeedbackFlow AI simplifies feedback management with powerful
            features designed for small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
