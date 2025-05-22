
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const timelineItems = [
  {
    year: "2018",
    title: "Computer Science @ University of Waterloo",
    description: "Started my journey in CS with a focus on UI/UX and product development."
  },
  {
    year: "2020",
    title: "PM Internship @ TechCorp",
    description: "Led feature development for a B2B SaaS product used by Fortune 500 companies."
  },
  {
    year: "2021",
    title: "Pepper i2",
    description: "Joined as the first product hire, helping grow user base by 200% in 6 months."
  },
  {
    year: "2023",
    title: "Red Bull Aero",
    description: "Leading product strategy for cutting-edge aeronautics visualization tools."
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
          <h1 className="heading-xl max-w-3xl">
            Product Manager with a <span className="text-[#0A84FF]">Technical Edge</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming complex problems into elegant, user-centered solutions
            at the intersection of technology and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
              <Link to="/case-studies">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="/JudyYang_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="heading-lg text-center mb-12">My Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="mb-2 text-[#0A84FF] font-bold">{item.year}</div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24 container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="heading-lg">Featured Work</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Card 1 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30">
                  B2B SaaS
                </span>
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30">
                  Growth
                </span>
              </div>
              <h3 className="text-lg font-semibold">Enterprise Dashboard Redesign</h3>
              <p className="text-muted-foreground mt-2">Increased user engagement by 45% through data-driven UX improvements</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to="/case-studies/enterprise-dashboard">Read Case Study</Link>
              </Button>
            </div>
          </div>

          {/* Example Card 2 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30">
                  Mobile
                </span>
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-700/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30">
                  ML
                </span>
              </div>
              <h3 className="text-lg font-semibold">Fitness App Personalization</h3>
              <p className="text-muted-foreground mt-2">Implemented ML-driven workout recommendations, increasing retention by 32%</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to="/case-studies/fitness-app">Read Case Study</Link>
              </Button>
            </div>
          </div>

          {/* Example Card 3 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30">
                  B2B SaaS
                </span>
                <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30">
                  Fintech
                </span>
              </div>
              <h3 className="text-lg font-semibold">Payment Processing Solution</h3>
              <p className="text-muted-foreground mt-2">Reduced transaction errors by 67% and improved checkout conversions by 28%</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to="/case-studies/payment-processing">Read Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="heading-lg mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Looking for a product manager who can bridge the gap between technical feasibility and business goals?
          </p>
          <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
