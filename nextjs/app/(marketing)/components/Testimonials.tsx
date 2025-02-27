import { QuoteIcon } from "@radix-ui/react-icons";

// Testimonial card component
const TestimonialCard = ({
  quote,
  author,
  company,
  imageSrc,
}: {
  quote: string;
  author: string;
  company: string;
  imageSrc?: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
      <QuoteIcon className="w-8 h-8 text-blue-100 dark:text-blue-900 absolute top-4 right-4" />
      <p className="text-gray-700 dark:text-gray-300 italic mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-lg font-semibold text-gray-600 dark:text-gray-400">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={author}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            author.charAt(0)
          )}
        </div>
        <div className="ml-3">
          <h4 className="font-medium text-gray-900 dark:text-white">
            {author}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "FeedbackFlow AI has transformed how we handle customer feedback. Our response time has decreased by 65% and customer satisfaction has visibly improved.",
      author: "Sarah Chen",
      company: "Urban Coffee Co.",
    },
    {
      quote:
        "We used to spend hours analyzing customer reviews. Now the AI does it for us and highlights issues we didn&apos;t even notice before.",
      author: "Michael Rodriguez",
      company: "Bloom Boutique",
    },
    {
      quote:
        "The sentiment analysis is surprisingly accurate. It&apos;s helped us identify product issues early and make improvements quickly.",
      author: "David Kim",
      company: "EcoGear",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Trusted by small businesses everywhere
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Don&apos;t just take our word for it. Hear from our customers who
            have transformed their feedback management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
