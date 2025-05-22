
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Sample projects data (this would come from Supabase in a real implementation)
const caseStudies = [
  {
    id: "enterprise-dashboard",
    title: "Enterprise Dashboard Redesign",
    description: "Increased user engagement by 45% through data-driven UX improvements",
    tags: ["B2B SaaS", "Growth"],
    imageUrl: "",
    tagColors: {
      "B2B SaaS": "blue",
      "Growth": "purple"
    }
  },
  {
    id: "fitness-app",
    title: "Fitness App Personalization",
    description: "Implemented ML-driven workout recommendations, increasing retention by 32%",
    tags: ["Mobile", "ML"],
    imageUrl: "",
    tagColors: {
      "Mobile": "green",
      "ML": "yellow"
    }
  },
  {
    id: "payment-processing",
    title: "Payment Processing Solution",
    description: "Reduced transaction errors by 67% and improved checkout conversions by 28%",
    tags: ["B2B SaaS", "Fintech"],
    imageUrl: "",
    tagColors: {
      "B2B SaaS": "blue",
      "Fintech": "orange"
    }
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Chatbot",
    description: "Developed an AI-powered chatbot that resolved 78% of customer queries without human intervention",
    tags: ["ML", "B2B SaaS"],
    imageUrl: "",
    tagColors: {
      "ML": "yellow",
      "B2B SaaS": "blue"
    }
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    description: "Redesigned the mobile banking experience leading to 52% increase in daily active users",
    tags: ["Mobile", "Fintech"],
    imageUrl: "",
    tagColors: {
      "Mobile": "green",
      "Fintech": "orange"
    }
  },
  {
    id: "analytics-platform",
    title: "Marketing Analytics Platform",
    description: "Built a growth measurement platform used by marketing teams to improve campaign ROI by 35%",
    tags: ["B2B SaaS", "Growth"],
    imageUrl: "",
    tagColors: {
      "B2B SaaS": "blue",
      "Growth": "purple"
    }
  }
];

// All available tags
const allTags = ["B2B SaaS", "Mobile", "ML", "Growth", "Fintech"];

const CaseStudies = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);

  useEffect(() => {
    document.title = "Projects | Jennifer Dryden";
  }, []);

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredStudies(caseStudies);
      return;
    }
    
    const filtered = caseStudies.filter(study => 
      selectedTags.some(tag => study.tags.includes(tag))
    );
    setFilteredStudies(filtered);
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const getTagColorClasses = (tag: string, isActive: boolean) => {
    const colorMap: Record<string, Record<string, string>> = {
      "B2B SaaS": {
        active: "bg-blue-100 text-blue-800 ring-blue-800/20 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-300/20",
        inactive: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
      },
      "Mobile": {
        active: "bg-green-100 text-green-800 ring-green-800/20 dark:bg-green-900/30 dark:text-green-300 dark:ring-green-300/20",
        inactive: "bg-green-50 text-green-700 ring-1 ring-inset ring-green-700/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30"
      },
      "ML": {
        active: "bg-yellow-100 text-yellow-800 ring-yellow-800/20 dark:bg-yellow-900/30 dark:text-yellow-300 dark:ring-yellow-300/20",
        inactive: "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-700/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30"
      },
      "Growth": {
        active: "bg-purple-100 text-purple-800 ring-purple-800/20 dark:bg-purple-900/30 dark:text-purple-300 dark:ring-purple-300/20",
        inactive: "bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30"
      },
      "Fintech": {
        active: "bg-orange-100 text-orange-800 ring-orange-800/20 dark:bg-orange-900/30 dark:text-orange-300 dark:ring-orange-300/20",
        inactive: "bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30"
      }
    };

    return colorMap[tag][isActive ? 'active' : 'inactive'] || "";
  };

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="heading-lg mb-4">Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of projects showcasing my technical skills and problem-solving abilities.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
              getTagColorClasses(tag, selectedTags.includes(tag))
            } transition-colors cursor-pointer`}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="text-sm text-muted-foreground underline ml-2"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((study) => (
          <div 
            key={study.id} 
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover"
          >
            <div className="aspect-video bg-muted"></div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {study.tags.map(tag => (
                  <span 
                    key={`${study.id}-${tag}`}
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getTagColorClasses(tag, false)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold">{study.title}</h3>
              <p className="text-muted-foreground mt-2">{study.description}</p>
              <Button asChild variant="link" className="pl-0 mt-2">
                <Link to={`/case-studies/${study.id}`}>View Project</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
