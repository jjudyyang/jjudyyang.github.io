
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample case study data (this would come from Supabase in a real implementation)
const caseStudiesData: Record<string, any> = {
  "enterprise-dashboard": {
    title: "Enterprise Dashboard Redesign",
    subtitle: "Increased user engagement by 45% through data-driven UX improvements",
    tags: ["B2B SaaS", "Growth"],
    heroImage: "",
    problem: "The client's enterprise analytics dashboard had a 23% abandonment rate and poor user engagement metrics. Users reported difficulty finding critical information and confusion about data visualizations.",
    role: "Led the redesign as Product Manager, working with a team of 3 designers and 4 engineers over a 12-week timeline.",
    process: [
      {
        title: "User Research",
        description: "Conducted 25+ user interviews and analyzed usage patterns to identify pain points and user needs."
      },
      {
        title: "Competitive Analysis",
        description: "Evaluated 8 competitor dashboards to identify best practices and opportunities for differentiation."
      },
      {
        title: "Prototyping",
        description: "Developed low and high-fidelity prototypes, iterating based on user feedback from 3 rounds of testing."
      },
      {
        title: "Implementation",
        description: "Prioritized features for a phased rollout, working closely with engineering on technical feasibility."
      }
    ],
    outcome: "The redesigned dashboard launched on time and under budget, with dramatically improved usability metrics.",
    metrics: [
      "45% increase in user engagement",
      "38% reduction in time-to-insight",
      "92% positive feedback from user satisfaction surveys",
      "67% decrease in support tickets related to dashboard confusion"
    ],
    reflection: "This project reinforced the value of user-centered design and data-driven decision making. If I were to approach it again, I would implement A/B testing earlier in the process to validate design choices with quantitative data."
  },
  "fitness-app": {
    title: "Fitness App Personalization",
    subtitle: "Implemented ML-driven workout recommendations, increasing retention by 32%",
    tags: ["Mobile", "ML"],
    heroImage: "",
    problem: "Users were abandoning the fitness app after 2-3 weeks due to a lack of personalization. One-size-fits-all workout plans weren't meeting diverse user needs and goals.",
    role: "Product Manager responsible for the personalization initiative, collaborating with data scientists and mobile developers.",
    process: [
      {
        title: "Data Analysis",
        description: "Analyzed user behavior patterns across 50,000+ users to identify key retention factors."
      },
      {
        title: "ML Model Development",
        description: "Worked with data science team to develop and train a recommendation algorithm based on user performance and preferences."
      },
      {
        title: "Feature Design",
        description: "Created personalized dashboard and recommendation UI that adapts based on user progress and goals."
      },
      {
        title: "Testing & Optimization",
        description: "Conducted beta testing with 500 users, iterating based on feedback and performance metrics."
      }
    ],
    outcome: "Launched personalization engine that delivered tailored workout recommendations and progress tracking.",
    metrics: [
      "32% increase in 60-day retention",
      "47% higher workout completion rate",
      "28% increase in subscription conversions",
      "4.8/5 average rating for recommendation quality"
    ],
    reflection: "This project demonstrated the power of combining data science with product intuition. The key lesson was balancing algorithmic recommendations with user autonomy - people wanted guidance but still needed to feel in control of their fitness journey."
  },
  // Additional case studies would be defined here
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id && caseStudiesData[id]) {
      setCaseStudy(caseStudiesData[id]);
      document.title = `${caseStudiesData[id].title} | Judy Yang`;
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="container px-4 py-12 text-center">Loading...</div>;
  }

  if (!caseStudy) {
    return (
      <div className="container px-4 py-12 text-center">
        <h1 className="heading-lg mb-4">Case Study Not Found</h1>
        <p className="mb-8">Sorry, the case study you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/case-studies">Back to Case Studies</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link to="/case-studies">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Case Studies
        </Link>
      </Button>

      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.map((tag: string) => (
              <span 
                key={tag}
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="heading-lg">{caseStudy.title}</h1>
          <p className="text-xl text-muted-foreground mt-2">{caseStudy.subtitle}</p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="aspect-video bg-muted rounded-lg mb-12"></div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">The Problem</h2>
          <p className="text-lg">{caseStudy.problem}</p>
        </section>

        {/* Role */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">My Role</h2>
          <p className="text-lg">{caseStudy.role}</p>
        </section>

        {/* Process */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">Process</h2>
          <div className="space-y-6">
            {caseStudy.process.map((step: any, index: number) => (
              <div key={index} className="border-l-4 border-[#0A84FF] pl-6 py-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">Outcome</h2>
          <p className="text-lg">{caseStudy.outcome}</p>
        </section>

        {/* Metrics */}
        <section className="mb-12">
          <h2 className="heading-md mb-4">Key Metrics</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.metrics.map((metric: string, index: number) => (
              <li 
                key={index}
                className="flex items-center bg-muted p-4 rounded-lg"
              >
                <div className="h-10 w-10 flex items-center justify-center bg-[#0A84FF] text-white rounded-full mr-4">
                  {index + 1}
                </div>
                <span className="font-medium">{metric}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Reflection */}
        <section className="mb-12 bg-muted p-6 rounded-lg">
          <h2 className="heading-md mb-4">Reflection</h2>
          <p className="text-lg italic">{caseStudy.reflection}</p>
        </section>

        {/* Next/Prev Navigation */}
        <div className="border-t pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between">
            <Button asChild variant="outline">
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" /> All Case Studies
              </Link>
            </Button>
            <Button asChild className="mt-4 sm:mt-0 bg-[#0A84FF] hover:bg-[#0A84FF]/90">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
