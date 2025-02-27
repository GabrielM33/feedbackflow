import { CTASection } from "../components/CTASection";
import { PersonIcon, RocketIcon, GlobeIcon } from "@radix-ui/react-icons";

const TeamMember = ({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
        <PersonIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-1">
        {name}
      </h3>
      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium text-center mb-3">
        {role}
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
            About FeedbackFlow AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We&apos;re on a mission to help small businesses thrive by making
            customer feedback management accessible, efficient, and actionable.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  FeedbackFlow AI was founded in 2023 by a team of small
                  business owners and AI engineers who were frustrated with the
                  complexity and cost of existing feedback management solutions.
                </p>
                <p>
                  We recognized that while large enterprises had sophisticated
                  tools for managing customer feedback, small businesses were
                  left with fragmented, manual processes that consumed valuable
                  time and resources.
                </p>
                <p>
                  Driven by a passion for democratizing access to powerful
                  business tools, we set out to build an AI-powered platform
                  specifically designed for small businesses—combining
                  simplicity with sophisticated analysis capabilities at an
                  affordable price point.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-8 w-full max-w-lg">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mb-4">
                    <RocketIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Founded 2023
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We&apos;ve grown from a small team of 3 to a dedicated group
                    of 12 passionate individuals serving over 500 businesses
                    worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  At FeedbackFlow AI, our mission is to empower small businesses
                  to make customer-centric decisions through accessible,
                  affordable, and actionable feedback management.
                </p>
                <p>
                  We believe that every business, regardless of size, deserves
                  powerful tools to understand their customers better. By
                  leveraging AI technology, we aim to level the playing field
                  and give small businesses the same insights that were
                  previously only available to large enterprises with extensive
                  resources.
                </p>
                <p>
                  Our goal is to help businesses save time, improve customer
                  satisfaction, and drive growth through better understanding of
                  customer feedback and needs.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-8 w-full max-w-lg">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mb-4">
                    <GlobeIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Our Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        500+
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Businesses Served
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        50,000+
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Feedback Items Processed
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        85%
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Time Saved on Feedback
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        12
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We&apos;re a diverse group of entrepreneurs, engineers, and
              customer experience experts united by our passion for helping
              small businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="Founder & CEO"
              description="Former small business owner with 10+ years experience in customer experience management. Sarah leads our company vision and strategy."
            />
            <TeamMember
              name="Michael Chen"
              role="CTO"
              description="AI researcher with a PhD from MIT. Michael leads our engineering team and oversees the development of our AI algorithms."
            />
            <TeamMember
              name="Priya Patel"
              role="Head of Product"
              description="Product management veteran from leading SaaS companies. Priya ensures our platform meets the evolving needs of small businesses."
            />
            <TeamMember
              name="David Rodriguez"
              role="Customer Success Lead"
              description="Former customer experience consultant. David works directly with our customers to ensure they get maximum value from our platform."
            />
            <TeamMember
              name="Emma Wilson"
              role="Marketing Director"
              description="Digital marketing specialist with expertise in SaaS growth strategies. Emma leads our efforts to reach and educate small businesses."
            />
            <TeamMember
              name="James Kim"
              role="Lead Engineer"
              description="Full-stack developer with expertise in AI integration. James works on building robust, scalable features for our platform."
            />
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that guide everything we do at FeedbackFlow AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Accessibility
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe powerful business tools should be accessible to
                companies of all sizes, not just those with enterprise budgets.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We continuously push the boundaries of what&apos;s possible with
                AI to deliver increasingly valuable insights to our customers.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Customer-Centricity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We practice what we preach by putting our customers at the
                center of everything we do, from product development to support.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Simplicity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We deliver complex capabilities through simple, intuitive
                interfaces that don&apos;t require technical expertise to use
                effectively.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in clear communication about our pricing,
                capabilities, and how our AI technology works to build trust
                with our users.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Actionability
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We focus not just on insights, but on helping businesses take
                concrete actions that improve customer satisfaction and drive
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
