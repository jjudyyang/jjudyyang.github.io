import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    year: "2022",
    title: "Software Developer Intern | Veriday",
    description: "Drove 10× faster site validation, 30% shorter testing cycles, and 60% quicker deployments through automation and direct client collaboration."
  },
  {
    year: "2025",
    title: "AI Associate Product Management Intern @ Pepper",
    description: "End-to-end development of an Intelligent Inbox with focus on product discovery and adoption."
  }
];

const getYearValue = (year) => {
  // Handles both single years and ranges like '2023-2024'
  if (year.includes('-')) {
    return parseInt(year.split('-')[1], 10);
  }
  return parseInt(year, 10);
};

const Index = () => {
  // Sort timelineItems in reverse chronological order
  const sortedTimeline = [...timelineItems].sort((a, b) => getYearValue(b.year) - getYearValue(a.year));

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
          {/* Rotating Globe Animation */}
          <div className="mb-2">
            <svg className="inline-block w-16 h-16 animate-spin-y" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" fill="#4F8EF7" />
              <ellipse cx="32" cy="32" rx="28" ry="28" fill="#A3D9A5" />
              <path d="M32 4 A28 28 0 0 1 60 32 A28 28 0 0 1 32 60 A28 28 0 0 1 4 32 A28 28 0 0 1 32 4 Z" fill="#4F8EF7" />
              <ellipse cx="32" cy="32" rx="20" ry="28" fill="#A3D9A5" fillOpacity="0.5" />
            </svg>
          </div>
          <h1 className="heading-xl max-w-3xl">
            Hello 👋 I'm <span className="text-[#0A84FF]">Judy Yang</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science @ uWaterloo — minoring in AI & HCI. Aspiring Product Manager building products loved by the world. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
              <Link to="/case-studies">
                Projects
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/resume">
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="heading-lg text-center mb-12">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            {sortedTimeline.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="mb-2 text-[#0A84FF] font-bold">{item.year}</div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="heading-lg">Favorite Projects</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/case-studies">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 - Cookify */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30">
                  Web App
                </span>
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30">
                  React
                </span>
              </div>
              <h3 className="text-lg font-semibold">Cookify</h3>
              <p className="text-muted-foreground mt-2">Spotify but for recipes - personalized cooking recommendations based on preferences</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to="/case-studies/cookify">View Project</Link>
              </Button>
            </div>
          </div>

          {/* Project 2 - Uni Eats */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30">
                  Mobile
                </span>
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-700/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30">
                  Community
                </span>
              </div>
              <h3 className="text-lg font-semibold">Uni Eats</h3>
              <p className="text-muted-foreground mt-2">Platform to split groceries in university communities, reducing food waste and expenses</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to="/case-studies/uni-eats">View Project</Link>
              </Button>
            </div>
          </div>

          {/* Project 3 - Develop for Good */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30">
                  Social Impact
                </span>
                <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30">
                  Data
                </span>
              </div>
              <h3 className="text-lg font-semibold">Develop for Good</h3>
              <p className="text-muted-foreground mt-2">Monitoring corruption in electricity access applications in Benin, partnering with local utility SBEE</p>
              <Button asChild variant="link" className="pl-0 mt-2">
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
