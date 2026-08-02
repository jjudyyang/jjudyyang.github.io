import React, { useEffect, useState } from "react";
import "./App.css";

import Work from "./Work.jsx";
import Dark from "./svg/Dark.jsx";
import Light from "./svg/Light.jsx";
import { siteLinks } from "./siteLinks.js";

const pageHeader = [
  "$ initializing...",
  "$ ssh judyyang@portfolio",
  "hello, its Judy",
];

function App() {
  const [theme, setTheme] = useState(true);
  const [style, setStyle] = useState(() => (window.innerWidth <= 880 ? "narrow" : "wide"));
  const [visiblePageHeader, setVisiblePageHeader] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setStyle(window.innerWidth <= 900 ? "narrow" : "wide");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.className = theme ? "light" : "dark";
  }, [theme]);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setVisiblePageHeader(2), 1000),
      window.setTimeout(() => setVisiblePageHeader(3), 2000),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={`App-${style} ${theme ? "light" : "dark"}`}>
      <div className="content">
        <div className="theme img" onClick={toggleTheme}>
          {theme ? <Dark /> : <Light />}
        </div>

        <div className={`section-${style}`}>
          <div>
            <TerminalHeader visibleCount={visiblePageHeader} />
            <div className="desc">
              <ul>
                <li>Computer Science student at the University of Waterloo</li>
                <li>lover of bikes & flaneuring around cities</li>
                <li>
                  fueled by <span style={{ color: "#f5ad42", fontWeight: "bold" }}>mangos</span> +{" "}
                  <span style={{ color: "#d64a31", fontWeight: "bold" }}>tajin</span>
                </li>
                <li>curious about products loved by the world and all things databases & distributed</li>
                <li>
                  navigating:
                  <span style={{ color: "#e3672d", fontWeight: "bold" }}> React</span>,
                  <span style={{ color: "#2a92b8", fontWeight: "bold" }}> Python</span>,
                  <span style={{ color: "#b84d2a", fontWeight: "bold" }}> Rust</span>,
                  <span style={{ color: "#d19a56", fontWeight: "bold" }}> AWS</span>
                </li>
              </ul>
              <div className="icons">
                <a href={siteLinks.profile.github} target="_blank" className="links" rel="noreferrer">
                  github
                </a>
                <a href={siteLinks.profile.linkedin} target="_blank" className="links" rel="noreferrer">
                  linkedin
                </a>
                <a href={siteLinks.profile.email} className="links">
                  email
                </a>
                <a href={siteLinks.profile.resume} target="_blank" className="links" rel="noreferrer">
                  resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`section-${style}`}>
          <div className={`section-left-${style}`}>
            <div className="header">
              <span className="head">Snapshot 01 / </span>Experience
            </div>
            <div className={`experiences-${style}`}>
              <div className="experience">
                <span>AWS</span>
                <span>2026 Summer</span>
              </div>
              <div className="experience">
                <span>Pepper</span>
                <span>2025 Winter</span>
              </div>
              <div className="experience">
                <span>TBS Ontario</span>
                <span>2024 Summer</span>
              </div>
              <div className="experience">
                <span>Pepper</span>
                <span>2023 Fall</span>
              </div>
              <div className="experience">
                <span>Kindred AI</span>
                <span>2023 Winter</span>
              </div>
              <div className="experience">
                <span>Veriday</span>
                <span>2022 Summer</span>
              </div>
            </div>
          </div>
          <div>
            <div className="work_div">
              <Work
                header="AWS"
                position="Software Engineering Intern"
                desc="Helping many database clusters speak as one CDC stream by using distributed-transaction markers, watermarks, and commit timestamps to produce a single ordered binlog output."
                url={siteLinks.experience.aws}
              />
              <Work
                header="Pepper"
                position="Product Management Intern"
                desc="Turning messy texts and voicemails into structured data, working across parsing accuracy, user experience, and AI agent workflows."
                url={siteLinks.experience.pepper}
              />
              <Work
                header="TBS Ontario"
                position="Data and Policy Intern"
                desc="Working around quiet machinery of government finacial planning: internal tools, budgeting workflows, and forecasting processes."
                url={siteLinks.experience.tbsOntario}
              />
              <Work
                header="Pepper"
                position="Operations"
                desc="Building operational data pipelines for restaurant suppliers, turning messy PDFs and client order formats into structured data for downstream ordering flows."
                url={siteLinks.experience.pepper}
              />
              <Work
                header="Kindred AI"
                position="Software Engineering Intern"
                desc="Testing robot software and hardware in simulation and on real systems, helping make warehouse automation more reliable one pick cycle at a time."
                url={siteLinks.experience.kindredAi}
              />
              <Work
                header="Veriday"
                position="Intern"
                desc="Worked on website migrations for financial advisors, translating legacy client pages into cleaner, maintainable web experiences."
                url={siteLinks.experience.veriday}
              />
            </div>
          </div>
        </div>

        <div className={`section-${style}`}>
          <div className={`section-left-${style} projects`}>
            <div className="header">
              <span className="head">Snapshot 02 / </span>Projects
            </div>
            <a href={siteLinks.projects.github} target="_blank" rel="noreferrer">
              <div className="center">live, love, tinker, laugh</div>
            </a>
          </div>
          <div>
            <div className="work_div">
              <Work
                header="text your mac"
                desc="text and talk to your computer. connect to calendar, notion mcp, and create emoji alias workflows all from your phone's imessages."
                url={siteLinks.projects.textYourMac}
              />
              <Work
                header="my toolbox"
                desc="built a collection of personal narratives, get feedback + iterate. won $2000 from hack the north 2025."
                url={siteLinks.projects.myToolbox}
              />
              <Work
                header="cookify"
                desc="a full-stack web app for recipes and cooklists. 10,000 recipes, natural language search, and ranking formula."
                url={siteLinks.projects.cookify}
              />
              <Work
                header="wish list"
                desc="an aesthetic real-time collaborative wishlist built with tanstack start and convex. drag-and-drop organization, type-safe routing, and private gift reservations."
                url={siteLinks.projects.wishList}
              />
              <Work
                header="biquadris"
                desc="an oop tetris school project extended to have beam search algorithm and monte carlo tree search."
                url={siteLinks.projects.biquadris}
              />
              <Work
                header="weld shift"
                desc="spreadsheet cell shifter made for my mom who works with weld data. irl use of dynamic programming! :d"
                url={siteLinks.projects.weldShift}
              />
            </div>
          </div>
        </div>

        <div className={`section-${style} last`}>
          <div className={`section-left-${style}`}>
            <div className="header">
              <span className="head">Snapshot 03 / </span>Self
            </div>
            <div className="center">you've reached your daily screen time...</div>
          </div>
          <div>
            <div className="work_div">
              <Work
                header="carnivore"
                desc="aside from the corner store fruits and farmers market veggies in my well-rounded diet, i love cooking ... meat! have mastered searing the perfect medium-rare on a cast iron. next up is roasting the perfect rotisserie chicken from scratch. apologies to the vegans."
              />
              <Work
                header="biking"
                desc="i grew up with summers biking, did a year of project earth in middle school and the city bike-share was my first taste of independence and mobility in adolescence. i absolutely love bike culture and infrastructure."
              />
              <Work
                header="making videos"
                desc="i like making videos. here is my yt channel from college: currently on sabbatical but always plotting the next stories to tell."
              />
              <Work
                header="scrapbooking"
                position=""
                desc="an analog average human hobby"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalHeader({ visibleCount }) {
  return (
    <div className="terminal-header" aria-label="Portfolio terminal intro">
      {pageHeader.map((line, index) => (
        <div
          className={`terminal-line ${index < visibleCount ? "visible" : ""}`}
          key={line}
        >
          {index < visibleCount ? line : ""}
          {index === visibleCount - 1 && visibleCount < pageHeader.length && (
            <span className="terminal-cursor" aria-hidden="true">
              _
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
