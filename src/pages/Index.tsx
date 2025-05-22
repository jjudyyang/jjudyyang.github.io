
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const timelineItems = [
  {
    year: "2023-2024",
    title: "Product Support Intern @ Pepper",
    description: "Enhanced mobile app stability and defined client integration requirements, reducing onboarding time by 30%."
  },
  {
    year: "2023",
    title: "Software Engineer @ Kindred AI",
    description: "Worked on AI robotics for grocery automation, collaborating with engineers on robot's spatial perception."
  },
  {
    year: "2025",
    title: "AI Associate Product Management Intern @ Pepper",
    description: "End-to-end development of an Intelligent Inbox with focus on product discovery and adoption."
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 container px-4 md:px-6 bg-soft-beige">
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
          <h1 className="heading-xl max-w-3xl">
            Hello 👋 I'm <span className="text-primary-red">Judy</span>
          </h1>
          <p className="text-xl text-warm-grey max-w-2xl mx-auto">
            I'm a Computer Science student @ uWaterloo! Minoring in AI and Human Computer Interaction 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="bg-primary-red hover:bg-primary-red/90 text-cream-white">
              <Link to="/case-studies">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10">
              <a href="/JudyYang_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-cream-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="heading-lg text-center mb-12 text-charcoal">My Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="mb-2 text-primary-red font-bold">{item.year}</div>
                <h3 className="text-xl font-semibold mb-1 text-charcoal">{item.title}</h3>
                <p className="text-warm-grey">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 container px-4 md:px-6 bg-soft-beige">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="heading-lg text-charcoal">Featured Work</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-terracotta text-terracotta hover:bg-terracotta/10">
            <Link to="/case-studies">View All Projects</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 - Cookify */}
          <div className="rounded-lg border border-warm-grey/20 bg-cream-white text-charcoal shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-primary-red/10 px-2 py-1 text-xs font-medium text-primary-red ring-1 ring-inset ring-primary-red/20">
                  Web App
                </span>
                <span className="inline-flex items-center rounded-md bg-terracotta/10 px-2 py-1 text-xs font-medium text-terracotta ring-1 ring-inset ring-terracotta/20">
                  React
                </span>
              </div>
              <h3 className="text-lg font-semibold text-charcoal">Cookify</h3>
              <p className="text-warm-grey mt-2">Spotify but for recipes - personalized cooking recommendations based on preferences</p>
              <Button asChild variant="link" className="pl-0 mt-2 text-primary-red hover:text-primary-red/80">
                <Link to="/case-studies/cookify">View Project</Link>
              </Button>
            </div>
          </div>

          {/* Project 2 - Uni Eats */}
          <div className="rounded-lg border border-warm-grey/20 bg-cream-white text-charcoal shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-olive-mist/20 px-2 py-1 text-xs font-medium text-olive-mist ring-1 ring-inset ring-olive-mist/20 dark:bg-olive-mist/10 dark:text-olive-mist dark:ring-olive-mist/30">
                  Mobile
                </span>
                <span className="inline-flex items-center rounded-md bg-terracotta/10 px-2 py-1 text-xs font-medium text-terracotta ring-1 ring-inset ring-terracotta/20">
                  Community
                </span>
              </div>
              <h3 className="text-lg font-semibold text-charcoal">Uni Eats</h3>
              <p className="text-warm-grey mt-2">Platform to split groceries in university communities, reducing food waste and expenses</p>
              <Button asChild variant="link" className="pl-0 mt-2 text-primary-red hover:text-primary-red/80">
                <Link to="/case-studies/uni-eats">View Project</Link>
              </Button>
            </div>
          </div>

          {/* Project 3 - Develop for Good */}
          <div className="rounded-lg border border-warm-grey/20 bg-cream-white text-charcoal shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-primary-red/10 px-2 py-1 text-xs font-medium text-primary-red ring-1 ring-inset ring-primary-red/20">
                  Social Impact
                </span>
                <span className="inline-flex items-center rounded-md bg-olive-mist/20 px-2 py-1 text-xs font-medium text-olive-mist ring-1 ring-inset ring-olive-mist/20">
                  Data
                </span>
              </div>
              <h3 className="text-lg font-semibold text-charcoal">Develop for Good</h3>
              <p className="text-warm-grey mt-2">Monitoring corruption in electricity access applications in Benin, partnering with local utility SBEE</p>
              <Button asChild variant="link" className="pl-0 mt-2 text-primary-red hover:text-primary-red/80">
                <Link to="/case-studies/develop-for-good">View Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
