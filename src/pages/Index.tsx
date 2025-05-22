
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const timelineItems = [
  {
    year: "2020",
    title: "Systems Design Engineering @ University of Waterloo",
    description: "Started my engineering journey with a focus on systems design and development."
  },
  {
    year: "2021",
    title: "Software Engineering Intern @ Google",
    description: "Worked on cutting-edge technologies in a dynamic team environment."
  },
  {
    year: "2022",
    title: "Software Developer @ Complete",
    description: "Contributed to the development of innovative solutions for enterprise clients."
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
          <h1 className="heading-xl max-w-3xl">
            Hello 👋 I'm <span className="text-[#0A84FF]">Jennifer Dryden</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a Systems Design Engineering student @ uWaterloo! Previously @ Google and Complete 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
              <Link to="/case-studies">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="/JenniferDryden_Resume.pdf" target="_blank" rel="noopener noreferrer">
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

      {/* Featured Projects */}
      <section className="py-16 md:py-24 container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="heading-lg">Featured Work</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/case-studies">View All Projects</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Card 1 */}
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
              <h3 className="text-lg font-semibold">Student Management System</h3>
              <p className="text-muted-foreground mt-2">Built a comprehensive system for tracking student performance and engagement</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to="/case-studies/student-management">View Project</Link>
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
                  Swift
                </span>
              </div>
              <h3 className="text-lg font-semibold">Campus Navigation App</h3>
              <p className="text-muted-foreground mt-2">Developed an intuitive iOS application for navigating university campus buildings</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to="/case-studies/campus-navigation">View Project</Link>
              </Button>
            </div>
          </div>

          {/* Example Card 3 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30">
                  API
                </span>
                <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30">
                  Node.js
                </span>
              </div>
              <h3 className="text-lg font-semibold">Course Registration System</h3>
              <p className="text-muted-foreground mt-2">Created a scalable API for university course registration handling 10,000+ concurrent users</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to="/case-studies/course-registration">View Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
