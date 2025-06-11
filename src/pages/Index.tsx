import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LorenzCanvas from "@/components/LorenzCanvas";
// import HeroAnimation from "@/components/HeroAnimation"; // Removed HeroAnimation import

//PHOTOS

//import images
import image from "@/assets/images/image.jpg";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";

//define image captions here

//END OF PHOTOS

// Import case studies data
import { caseStudies, getTagColorClasses } from "@/pages/CaseStudies";

const timelineItems = [
  {
    year: "2025",
    title: "AI Associate Product Management Intern @ Pepper",
    description: "End-to-end development of an Intelligent Inbox with focus on product discovery and adoption."
  },
  {
    year: "2023",
    title: "Solutions Engineering Intern @ Pepper",
    description: "Enhanced mobile app stability and defined client integration requirements, reducing onboarding time by 30%."
  },
  {
    year: "2023",
    title: "Software Engineer Intern @ Kindred AI",
    description: "Worked on AI robotics for grocery automation, collaborating with engineers on robot's spatial perception."
  },
  {
    year: "2022",
    title: "Software Developer Intern @ Veriday",
    description: "Drove 10× faster site validation, 30% shorter testing cycles, and 60% quicker deployments through automation and direct client collaboration."
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

  //main header and typing animation
  const textToType = "Hello 🌎  I'm Judy";
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);


  useEffect(() => {
    if (charIndex < textToType.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(textToType.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100); // Increased typing speed here

      return () => clearTimeout(typingTimeout);
    }
  }, [charIndex, textToType]); //typing effect

  return (
    <div className="flex flex-col min-h-full w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 container px-4 md:px-6 z-10 flex flex-col items-center">
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in relative z-10">
          {/* Lorenz Attractor Animation - now above the h1 */}
          <LorenzCanvas />
          <h1 className="heading-xl max-w-3xl mt-4">
            <span className="text-[#0A84FF]">{displayedText}</span>
            {charIndex === textToType.length && <span className="typing-cursor">|</span>}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science @ <a href="https://cs.uwaterloo.ca/" target="_blank" rel="noopener noreferrer">uWaterloo</a> — minoring in AI & HCI. 
            <br></br> 
            Building products loved by the world and the databases that power them. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
              <Link to="/case-studies">
                Projects
              </Link>
            </Button>
            <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
              <Link to="/resume">
                Resume
              </Link>
            </Button>
            <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
              <a href="https://github.com/jjudyyang" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
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

      {/* 3 Projects Section */}
      <section className="py-16 md:py-24 container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="heading-lg text-center mb-12">Favorite Projects</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/case-studies">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((study) => (
            <Link key={study.id} to={`/case-studies/${study.id}`} className="block rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden card-hover">
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Photos Section - make look like a polariod where you can type + guess the location of each
      - change formatting later
      
      */}
      <section className="py-16 md:py-24 container px-4 md:px-6">
        <h2 className="heading-lg text-center mb-12">Judy's Geo Guesser</h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Guess where in the world the below photos were taken - hover to reveal! 
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Photo Item  */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-400 bg-opacity-75 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm">📍 Lake Louise, Alberta, Canada</p>
            </div>
          </div>

          {/* Photo Item 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image1}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-400 bg-opacity-75 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm">📍 Mount Fuji, Japan </p>
            </div>
          </div>
           {/* Photo Item 2 */}
           <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image2}

              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-400 bg-opacity-75 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm">📍 Kananaskis, Alberta, Canada</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
