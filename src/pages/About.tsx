
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

// Skills data for radar chart
const skillsData = [
  { subject: 'Product Strategy', A: 90 },
  { subject: 'User Research', A: 85 },
  { subject: 'SQL', A: 80 },
  { subject: 'UI/UX Design', A: 75 },
  { subject: 'SwiftUI', A: 65 },
  { subject: 'Data Analysis', A: 85 },
  { subject: 'Team Leadership', A: 80 },
  { subject: 'Web Development', A: 70 },
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
              I'm a product manager with a computer science background, passionate about building products that solve real problems for users while driving business growth.
            </p>
            <p className="text-lg mb-4">
              With my technical foundation from the University of Waterloo and practical experience leading products at companies like Pepper i2 and Red Bull Aero, I bring a unique blend of technical understanding and business acumen to every project.
            </p>
            <p className="text-lg mb-4">
              I thrive in environments where I can collaborate with cross-functional teams to transform complex problems into elegant, user-centered solutions. My approach combines data-driven decision making with empathetic user understanding.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[#0A84FF] hover:bg-[#0A84FF]/90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="aspect-square bg-muted rounded-lg"></div>
            <p className="text-sm text-muted-foreground text-center mt-2">Judy Yang, Product Manager</p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="heading-md mb-6">My Skills</h2>

          {/* Radar Chart */}
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Skills Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#0A84FF"
                    fill="#0A84FF"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
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

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="heading-md mb-6">Experience</h2>
          
          <div className="space-y-8">
            {/* Red Bull Aero */}
            <div className="border-l-4 border-[#0A84FF] pl-6 py-1">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Product Manager | Red Bull Aero</h3>
                <span className="text-muted-foreground">2023 - Present</span>
              </div>
              <p className="mb-2">Leading product strategy for cutting-edge aeronautics visualization tools.</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Oversaw product roadmap that increased user engagement by 35%</li>
                <li>Led cross-functional team of engineers and designers</li>
                <li>Implemented data-driven methodology for feature prioritization</li>
              </ul>
            </div>

            {/* Pepper i2 */}
            <div className="border-l-4 border-[#0A84FF] pl-6 py-1">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Product Manager | Pepper i2</h3>
                <span className="text-muted-foreground">2021 - 2023</span>
              </div>
              <p className="mb-2">First product hire, helping grow user base by 200% in 6 months.</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Built and executed product strategy from ground up</li>
                <li>Conducted extensive user research to inform feature development</li>
                <li>Managed sprint planning and product delivery</li>
              </ul>
            </div>

            {/* TechCorp */}
            <div className="border-l-4 border-[#0A84FF] pl-6 py-1">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Product Manager Intern | TechCorp</h3>
                <span className="text-muted-foreground">2020 - 2021</span>
              </div>
              <p className="mb-2">Led feature development for a B2B SaaS product used by Fortune 500 companies.</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Owned full product life cycle for 2 major feature releases</li>
                <li>Collaborated with UX researchers to identify user needs</li>
                <li>Presented product metrics and roadmap to executive team</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="heading-md mb-6">Education</h2>
          
          <div className="border-l-4 border-[#0A84FF] pl-6 py-1">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">BS in Computer Science</h3>
              <span className="text-muted-foreground">2018 - 2022</span>
            </div>
            <p className="mb-1">University of Waterloo</p>
            <p className="text-muted-foreground">Focused on UI/UX and product development. Dean's List 2020-2022.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
