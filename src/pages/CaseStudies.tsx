import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import UniEatsImage from "@/assets/images/UniEatsLogo.jpg";
import UWPMImage from "@/assets/images/uwpmlogo.jpg";
import CookifyImage from "@/assets/images/cookifyImage.jpg";

// Sample projects data with Judy's projects
export const caseStudies = [
  {
    id: "cookify",
    title: "Cookify",
    description: "Spotify but for recipes - personalized cooking recommendations based on preferences",
    tags: ["Web App", "UX/UI", "AI"],
    imageUrl: CookifyImage,
    tagColors: {
      "Web App": "blue",
      "UX/UI": "purple",
      "AI": "yellow"
    }
  },
  {
    id: "photosort",
    title: "PhotoSort",
    description: "AI-powered tool for organizing photos of food and automating writing of Google reviews",
    tags: ["AI", "Mobile", "Automation"],
    imageUrl: "",
    tagColors: {
      "AI": "yellow",
      "Mobile": "green",
      "Automation": "blue"
    }
  },
  {
    id: "uni-eats",
    title: "Uni Eats",
    description: "Platform to split groceries in university communities, reducing food waste and expenses",
    tags: ["Mobile", "Community", "Product Management"],
    imageUrl: UniEatsImage,
    tagColors: {
      "Mobile": "green",
      "Community": "orange",
      "Product Management": "blue"
    }
  },
  {
    id: "develop-for-good",
    title: "Develop for Good",
    description: "Monitoring corruption in electricity access applications in Benin, partnering with local utility SBEE",
    tags: ["Social Impact", "Data", "Product Strategy"],
    imageUrl: "",
    tagColors: {
      "Social Impact": "red",
      "Data": "yellow",
      "Product Strategy": "purple"
    }
  },
  {
    id: "hci-project",
    title: "Human Computer Interaction Project",
    description: "Research and implementation of novel interfaces for human-computer interaction",
    tags: ["UX/UI", "Research", "Prototyping"],
    imageUrl: "",
    tagColors: {
      "UX/UI": "purple",
      "Research": "blue",
      "Prototyping": "green"
    }
  },
  {
    id: "podcast-team",
    title: "UWaterloo PM Podcast",
    description: "Leading the University of Waterloo Product Management podcast team, featuring industry experts",
    tags: ["Product Management", "Community", "Content"],
    imageUrl: UWPMImage,
    tagColors: {
      "Product Management": "blue",
      "Community": "orange",
      "Content": "red"
    }
  }
];

// All available tags
export const allTags = ["Web App", "Mobile", "AI", "UX/UI", "Product Management", "Social Impact", "Data", "Community", "Research", "Automation", "Prototyping", "Content", "Product Strategy"];

// Create color mapping for all available tags
const colorMap: Record<string, Record<string, string>> = {
  "Web App": {
    active: "bg-blue-100 text-blue-800 ring-blue-800/20 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-300/20",
    inactive: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
  },
  "Mobile": {
    active: "bg-green-100 text-green-800 ring-green-800/20 dark:bg-green-900/30 dark:text-green-300 dark:ring-green-300/20",
    inactive: "bg-green-50 text-green-700 ring-1 ring-inset ring-green-700/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30"
  },
  "AI": {
    active: "bg-yellow-100 text-yellow-800 ring-yellow-800/20 dark:bg-yellow-900/30 dark:text-yellow-300 dark:ring-yellow-300/20",
    inactive: "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-700/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30"
  },
  "UX/UI": {
    active: "bg-purple-100 text-purple-800 ring-purple-800/20 dark:bg-purple-900/30 dark:text-purple-300 dark:ring-purple-300/20",
    inactive: "bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30"
  },
  "Product Management": {
    active: "bg-blue-100 text-blue-800 ring-blue-800/20 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-300/20",
    inactive: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
  },
  "Social Impact": {
    active: "bg-red-100 text-red-800 ring-red-800/20 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-300/20",
    inactive: "bg-red-50 text-red-700 ring-1 ring-inset ring-red-700/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30"
  },
  "Data": {
    active: "bg-yellow-100 text-yellow-800 ring-yellow-800/20 dark:bg-yellow-900/30 dark:text-yellow-300 dark:ring-yellow-300/20",
    inactive: "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-700/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30"
  },
  "Community": {
    active: "bg-orange-100 text-orange-800 ring-orange-800/20 dark:bg-orange-900/30 dark:text-orange-300 dark:ring-orange-300/20",
    inactive: "bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30"
  },
  "Research": {
    active: "bg-blue-100 text-blue-800 ring-blue-800/20 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-300/20",
    inactive: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
  },
  "Automation": {
    active: "bg-blue-100 text-blue-800 ring-blue-800/20 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-300/20",
    inactive: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
  },
  "Prototyping": {
    active: "bg-green-100 text-green-800 ring-green-800/20 dark:bg-green-900/30 dark:text-green-300 dark:ring-green-300/20",
    inactive: "bg-green-50 text-green-700 ring-1 ring-inset ring-green-700/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30"
  },
  "Content": {
    active: "bg-red-100 text-red-800 ring-red-800/20 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-300/20",
    inactive: "bg-red-50 text-red-700 ring-1 ring-inset ring-red-700/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30"
  },
  "Product Strategy": {
    active: "bg-purple-100 text-purple-800 ring-purple-800/20 dark:bg-purple-900/30 dark:text-purple-300 dark:ring-purple-300/20",
    inactive: "bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30"
  }
};

// Default fallback colors in case a tag doesn't have a specific mapping
const defaultColors = {
  active: "bg-gray-100 text-gray-800 ring-gray-800/20 dark:bg-gray-900/30 dark:text-gray-300 dark:ring-gray-300/20",
  inactive: "bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-700/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/30"
};

export const getTagColorClasses = (tag: string, isActive: boolean) => {
  return colorMap[tag] ? colorMap[tag][isActive ? 'active' : 'inactive'] : defaultColors[isActive ? 'active' : 'inactive'];
};

const CaseStudies = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);

  useEffect(() => {
    document.title = "Projects";
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

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="heading-lg mb-4">Project Museum 🖼️ </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
         Goal: Build products loved by the world. 🌎
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
            <div className="aspect-video bg-muted">
              {study.imageUrl && (
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
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
              <Button 
                variant="link" 
                className="pl-0 mt-2"
                onClick={() => {
                  setSelectedStudy(study);
                  setIsModalOpen(true);
                }}
              >
                View Project
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[75%] h-[75%] max-w-none">
          {selectedStudy ? (
            <div>
              {/* Placeholder for project details */}
              <h2>{selectedStudy.title}</h2>
              <p>{selectedStudy.description}</p>
              {/* You will add more detailed information here later */}
            </div>
          ) : (
            <p>Loading project details...</p> // Should not be shown if selectedStudy is not null when modal opens
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CaseStudies;
