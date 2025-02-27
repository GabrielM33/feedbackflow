import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { CTASection } from "../components/CTASection";

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
}

const BlogPostCard = ({
  title,
  excerpt,
  author,
  date,
  category,
  slug,
  readTime,
}: BlogPostProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col h-full">
      <div className="p-6 flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            {category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {excerpt}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-gray-900 dark:text-white font-medium">
              {author}
            </span>{" "}
            <span className="text-gray-500 dark:text-gray-400">• {date}</span>
          </div>
          <Link
            href={`/blog/${slug}`}
            className="text-blue-600 dark:text-blue-400 inline-flex items-center text-sm font-medium hover:underline"
          >
            Read more
            <ArrowRightIcon className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  // Sample blog post data
  const blogPosts: BlogPostProps[] = [
    {
      title:
        "How AI is Transforming Customer Feedback Analysis for Small Businesses",
      excerpt:
        "Discover how artificial intelligence is making sophisticated customer feedback analysis accessible to businesses of all sizes, not just large enterprises with big budgets.",
      author: "Sarah Johnson",
      date: "April 15, 2023",
      category: "AI Technology",
      slug: "ai-transforming-feedback-analysis",
      readTime: "5 min read",
    },
    {
      title: "5 Ways to Increase Customer Feedback Response Rates",
      excerpt:
        "Learn proven strategies to encourage more customers to provide feedback, helping you gather more insights to improve your products and services.",
      author: "David Rodriguez",
      date: "March 28, 2023",
      category: "Best Practices",
      slug: "increase-feedback-response-rates",
      readTime: "4 min read",
    },
    {
      title: "From Feedback to Feature: How to Prioritize Customer Suggestions",
      excerpt:
        "Not all customer suggestions should be implemented immediately. This article provides a framework for evaluating and prioritizing customer feedback for product development.",
      author: "Priya Patel",
      date: "March 12, 2023",
      category: "Product Development",
      slug: "prioritize-customer-suggestions",
      readTime: "6 min read",
    },
    {
      title: "The ROI of Effective Feedback Management",
      excerpt:
        "Investing in feedback management isn't just about customer satisfaction—it directly impacts your bottom line. Here's how to measure the return on investment.",
      author: "Emma Wilson",
      date: "February 20, 2023",
      category: "Business Impact",
      slug: "roi-feedback-management",
      readTime: "7 min read",
    },
    {
      title: "Handling Negative Feedback: Turning Criticism into Opportunity",
      excerpt:
        "Negative feedback can be difficult to receive, but it often provides the most valuable insights. Learn how to respond constructively and use criticism to improve.",
      author: "Michael Chen",
      date: "February 5, 2023",
      category: "Customer Service",
      slug: "handling-negative-feedback",
      readTime: "5 min read",
    },
    {
      title: "Integrating Feedback Management Across Your Organization",
      excerpt:
        "Customer feedback isn't just for the support team. Discover how to create a feedback loop that benefits marketing, product, sales, and other departments.",
      author: "James Kim",
      date: "January 18, 2023",
      category: "Organization",
      slug: "integrating-feedback-management",
      readTime: "8 min read",
    },
    {
      title: "Using Sentiment Analysis to Understand Customer Emotions",
      excerpt:
        "Modern AI can detect not just what customers are saying, but how they feel. Learn how sentiment analysis provides deeper insights into customer feedback.",
      author: "Sarah Johnson",
      date: "January 4, 2023",
      category: "AI Technology",
      slug: "sentiment-analysis-customer-emotions",
      readTime: "6 min read",
    },
    {
      title: "Case Study: How SmallBiz Increased Customer Satisfaction by 40%",
      excerpt:
        "A detailed look at how one small business transformed their approach to feedback and saw dramatic improvements in customer satisfaction scores.",
      author: "Emma Wilson",
      date: "December 12, 2022",
      category: "Case Study",
      slug: "smallbiz-satisfaction-case-study",
      readTime: "9 min read",
    },
    {
      title: "The Future of Feedback: Trends to Watch in 2023",
      excerpt:
        "From AI-powered analysis to omnichannel collection, explore the emerging trends that will shape how businesses gather and use customer feedback.",
      author: "Michael Chen",
      date: "December 1, 2022",
      category: "Industry Trends",
      slug: "feedback-trends-2023",
      readTime: "7 min read",
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
            FeedbackFlow AI Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Insights, tips, and best practices for small businesses looking to
            improve their customer feedback management.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/blog?category=all"
              className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium"
            >
              All Posts
            </Link>
            <Link
              href="/blog?category=ai-technology"
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              AI Technology
            </Link>
            <Link
              href="/blog?category=best-practices"
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Best Practices
            </Link>
            <Link
              href="/blog?category=case-studies"
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Case Studies
            </Link>
            <Link
              href="/blog?category=industry-trends"
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Industry Trends
            </Link>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Previous
              </button>
              <button className="px-3 py-1 rounded bg-blue-600 text-white">
                1
              </button>
              <button className="px-3 py-1 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                2
              </button>
              <button className="px-3 py-1 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                3
              </button>
              <span className="px-3 py-1 text-gray-500 dark:text-gray-400">
                ...
              </span>
              <button className="px-3 py-1 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                8
              </button>
              <button className="px-3 py-1 rounded text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Get the latest insights on customer feedback management and
              product updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default BlogPage;
