export const profile = {
  eyebrow: "Portfolio template",
  greeting: "Ello, Your Name here",
  headline: "Software engineer building calm, useful systems.",
  intro: [
    "Fourth-year software engineering student from Your University",
    "Enjoys books, design systems, systems programming, and thoughtful tools",
    "Currently exploring AI products, data infrastructure, and cloud platforms",
  ],
  stack: [
    { name: "React", color: "#2f79c7" },
    { name: "Python", color: "#5c8f63" },
    { name: "Rust", color: "#c65d38" },
    { name: "AWS", color: "#b08436" },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/your-handle", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: "linkedin" },
    { label: "Email", href: "mailto:you@example.com", icon: "mail" },
    { label: "Resume", href: "/resume.pdf", icon: "resume" },
  ],
  quickStats: [
    { label: "Focus", value: "Product engineering" },
    { label: "Mode", value: "Rainy day build" },
    { label: "Open to", value: "Internships and projects" },
  ],
  experience: [
    {
      company: "Company One",
      period: "2026 Summer",
      role: "Software Engineering Intern",
      description:
        "Built internal tools, improved deployment workflows, and shipped user-facing polish across a React stack.",
      url: "https://example.com",
    },
    {
      company: "Company Two",
      period: "2026 Winter",
      role: "Data Infrastructure Intern",
      description:
        "Worked on high-volume logging, data quality checks, and small automation surfaces for platform teams.",
      url: "https://example.com",
    },
    {
      company: "Company Three",
      period: "2025 Summer",
      role: "Full Stack Developer",
      description:
        "Owned dashboard workflows from API contracts through accessible frontend states and release validation.",
      url: "https://example.com",
    },
  ],
  projects: [
    {
      name: "Chaptered Notes",
      description:
        "A personal knowledge base with fast capture, linked writing, and gentle reminders.",
      tools: ["React", "SQLite", "AI"],
      url: "https://example.com",
    },
    {
      name: "Game Study Bot",
      description:
        "A small turn-based game bot playground for comparing search strategies and simulations.",
      tools: ["Python", "Algorithms"],
      url: "https://example.com",
    },
    {
      name: "Cloud Cost Ledger",
      description:
        "A compact tool for tracking cloud spend, ownership, and monthly service drift.",
      tools: ["AWS", "TypeScript"],
      url: "https://example.com",
    },
    {
      name: "Writing Desk",
      description:
        "A focused editor for collecting drafts, links, and reading notes in one place.",
      tools: ["Svelte", "Design"],
      url: "https://example.com",
    },
  ],
};
