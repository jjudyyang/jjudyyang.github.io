import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
  Legend
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import profileImage from "@/assets/images/profile.jpg";

// Skills data for radar chart organized by categories - matches the image shared
const skillsData = [
  // Customer Insight (Yellow section)
  { subject: 'Voice of the Customer', area: 'Customer Insight', A: 80 },
  { subject: 'User Experience Design', area: 'Customer Insight', A: 75 },
  { subject: 'Fluency with Data', area: 'Customer Insight', A: 85 },
  
  // Product Strategy (Teal section)
  { subject: 'Strategic Impact', area: 'Product Strategy', A: 70 },
  { subject: 'Product Vision & Roadmapping', area: 'Product Strategy', A: 75 },
  { subject: 'Business Outcome Ownership', area: 'Product Strategy', A: 65 },
  
  // Influencing People (Blue section)
  { subject: 'Stakeholder Management', area: 'Influencing People', A: 80 },
  { subject: 'Team Leadership', area: 'Influencing People', A: 70 },
  { subject: 'Managing Up', area: 'Influencing People', A: 65 },
  
  // Product Execution (Orange section)
  { subject: 'Feature Specification', area: 'Product Execution', A: 90 },
  { subject: 'Product Delivery', area: 'Product Execution', A: 85 },
  { subject: 'Quality Assurance', area: 'Product Execution', A: 80 },
];

// Color mapping for different areas
const areaColors = {
  'Customer Insight': '#F9D949',
  'Product Strategy': '#5CD2C6',
  'Influencing People': '#74C0FC',
  'Product Execution': '#FF9F57'
};

const pmCategories = [
  { name: 'Customer Insight', color: '#F9D949' },
  { name: 'Product Strategy', color: '#5CD2C6' },
  { name: 'Influencing People', color: '#74C0FC' },
  { name: 'Product Execution', color: '#FF9F57' }
];

const techSkills = [
  "SQL & Database Design",
  "SwiftUI & iOS Development",
  "Python & Data Analysis",
  "Web Development (HTML, CSS, JS)",
  "Git & Version Control",
  "Figma & Design Tools"
];

const pmSkills = [
  "Product Strategy & Roadmapping", 
  "User Research & Testing",
  "A/B Testing & Experimentation",
  "Agile & Scrum Methodologies",
  "Cross-functional Team Leadership",
  "Data-driven Decision Making"
];

const About = () => {
  useEffect(() => {
    document.title = "About | Judy Yang";
  }, []);

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-lg mb-6">About Me</h1>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-3">
            <p className="text-lg mb-4">
              I'm a 4th year Computer Science student at Waterloo, taking a 5th year to get deep into the theory of AI and Human Computer Interaction. 
            </p>
            <p className="text-lg mb-4">
              With a drilled technical foundation I bring a unique blend of technical depth, creativity, business acumen and energy to every project.
            </p>
            <p className="text-lg mb-4">
              I thrive in collaborative environments with cross-functional teams to breakdown complex problems into elegant and simple solutions. 
              <br></br>
              <br></br>
              A data nerd with user empathy to drive decisions to make people fall in love with technology.  
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <img 
              src={profileImage} 
              alt="Judy Yang" 
              className="aspect-square object-cover rounded-lg w-full h-full"
            />
            <p className="text-sm text-muted-foreground text-center mt-2"> SF night with mangos + tajin!  </p>
          </div>
        </div>

        {/* Skills Section - PM Competency Wheel */}
        <section className="mb-16">
          <h2 className="heading-md mb-6">Product Skills Stats</h2>
  <h5>note: not up to date - tentative timeline of completion, august 2025</h5>        
          {/* PM Competency Wheel - radar chart styled like the image */}
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Product Manager Competencies</h3>
            <div className="h-[400px] md:h-[500px]">
              <ChartContainer
                config={{
                  customerInsight: { color: "#F9D949" },
                  productStrategy: { color: "#5CD2C6" },
                  influencingPeople: { color: "#74C0FC" },
                  productExecution: { color: "#FF9F57" }
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 12 }} />
                    <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={{ fill: '#888' }} />
                    <Radar 
                      name="Skills" 
                      dataKey="A" 
                      stroke="#0A84FF" 
                      fill="#0A84FF" 
                      fillOpacity={0.3}
                      animationDuration={500}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>

          {/* PM Categories with Color Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {pmCategories.map((category) => (
              <div key={category.name} className="flex items-center">
                <div 
                  className="h-3 w-3 rounded-full mr-2" 
                  style={{ backgroundColor: category.color }}
                ></div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PM Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Product Management Skills</h3>
              <ul className="space-y-2">
                {pmSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#0A84FF] mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2">
                {techSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#0A84FF] mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
