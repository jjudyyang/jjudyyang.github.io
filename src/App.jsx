import React, { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  CloudRain,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { profile } from "./data/profile.js";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  resume: FileText,
};

function makeDrops(count, offset = 0) {
  return Array.from({ length: count }, (_, index) => {
    const seed = index + 1 + offset;
    return {
      id: `${offset}-${index}`,
      left: (seed * 17) % 101,
      delay: -((seed * 13) % 90) / 10,
      duration: 5 + ((seed * 7) % 38) / 10,
      opacity: 0.18 + ((seed * 11) % 50) / 100,
      height: 52 + ((seed * 19) % 56),
      drift: ((seed * 5) % 18) - 9,
    };
  });
}

function App() {
  const [theme, setTheme] = useState("light");
  const [weather, setWeather] = useState("rainy");
  const drops = useMemo(() => makeDrops(64), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const isDark = theme === "dark";
  const isRainy = weather === "rainy";

  return (
    <main className="portfolio-shell">
      {isRainy && <RainLayer drops={drops} />}

      <div className="site-tools" aria-label="Display controls">
        <IconButton
          label={isRainy ? "Switch to cloudy" : "Switch to rainy"}
          onClick={() => setWeather(isRainy ? "cloudy" : "rainy")}
        >
          {isRainy ? <CloudRain /> : <Cloud />}
        </IconButton>
        <IconButton
          label={isDark ? "Switch to light" : "Switch to dark"}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun /> : <Moon />}
        </IconButton>
      </div>

      <section className="hero-section" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1 id="intro-heading">{profile.greeting}</h1>
          <p className="headline">{profile.headline}</p>

          <ul className="intro-list">
            {profile.intro.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="stack-row" aria-label="Technology stack">
            {profile.stack.map((tool) => (
              <span
                className="stack-pill"
                key={tool.name}
                style={{ "--accent": tool.color }}
              >
                {tool.name}
              </span>
            ))}
          </div>

          <div className="link-row" aria-label="Profile links">
            {profile.links.map((link) => (
              <SocialLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <aside className="status-panel" aria-label="Profile snapshot">
          <div className="portrait-frame">
            <span>{initialsFrom(profile.greeting)}</span>
          </div>
          <div className="status-list">
            {profile.quickStats.map((item) => (
              <div className="status-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <ChapterSection
        chapter="Chapter 1."
        title="Experience"
        aside={<ExperienceIndex experience={profile.experience} />}
      >
        <div className="card-grid">
          {profile.experience.map((job) => (
            <WorkCard
              key={`${job.company}-${job.period}`}
              title={job.company}
              kicker={job.period}
              subtitle={job.role}
              description={job.description}
              url={job.url}
            />
          ))}
        </div>
      </ChapterSection>

      <ChapterSection
        chapter="Chapter 2."
        title="Projects"
        aside={<p className="aside-note">A compact project shelf with room for links, tools, and quick context.</p>}
      >
        <div className="card-grid">
          {profile.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </ChapterSection>
    </main>
  );
}

function RainLayer({ drops }) {
  return (
    <div className="rain-layer" aria-hidden="true">
      {drops.map((drop) => (
        <span
          className="raindrop"
          key={drop.id}
          style={{
            "--x": `${drop.left}%`,
            "--delay": `${drop.delay}s`,
            "--duration": `${drop.duration}s`,
            "--drop-opacity": drop.opacity,
            "--drop-height": `${drop.height}px`,
            "--drift": `${drop.drift}px`,
          }}
        >
          <i />
          <b />
        </span>
      ))}
    </div>
  );
}

function IconButton({ children, label, onClick }) {
  return (
    <button className="icon-button" type="button" onClick={onClick} aria-label={label} title={label}>
      {children}
    </button>
  );
}

function SocialLink({ link }) {
  const Icon = socialIcons[link.icon] || ExternalLink;

  return (
    <a className="social-link" href={link.href} target="_blank" rel="noreferrer">
      <Icon aria-hidden="true" />
      <span>{link.label}</span>
    </a>
  );
}

function ChapterSection({ aside, chapter, children, title }) {
  return (
    <section className="chapter-section" aria-labelledby={`${title.toLowerCase()}-heading`}>
      <div className="chapter-aside">
        <h2 id={`${title.toLowerCase()}-heading`}>
          <span>{chapter}</span>
          {title}
        </h2>
        {aside}
      </div>
      <div>{children}</div>
    </section>
  );
}

function ExperienceIndex({ experience }) {
  return (
    <ol className="experience-index" aria-label="Experience timeline">
      {experience.map((job) => (
        <li key={`${job.company}-${job.period}`}>
          <span>{job.company}</span>
          <time>{job.period}</time>
        </li>
      ))}
    </ol>
  );
}

function WorkCard({ description, kicker, subtitle, title, url }) {
  return (
    <article className="work-card">
      <div className="card-topline">
        <a href={url} target="_blank" rel="noreferrer">
          {title}
          <ExternalLink aria-hidden="true" />
        </a>
        <span>{kicker}</span>
      </div>
      <p className="card-subtitle">{subtitle}</p>
      <p>{description}</p>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="work-card project-card">
      <div className="card-topline">
        <a href={project.url} target="_blank" rel="noreferrer">
          {project.name}
          <ExternalLink aria-hidden="true" />
        </a>
      </div>
      <p>{project.description}</p>
      <div className="tool-row">
        {project.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </article>
  );
}

function initialsFrom(value) {
  return value
    .replace(/[^a-zA-Z\s]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default App;
