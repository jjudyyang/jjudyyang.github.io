import { useEffect, useMemo, useState } from "react";
import "./App.css";
import "./rain.css";

import Work from "./Work.jsx";
import Cloudy from "./svg/Cloudy.jsx";
import Dark from "./svg/Dark.jsx";
import Light from "./svg/Light.jsx";
import Rainy from "./svg/Rainy.jsx";
import AWResume from "./res/ADA_WANG_RESUME.pdf";

function buildRainDrops(weather) {
  if (!weather) {
    return { front: [], back: [] };
  }

  let increment = 0;
  const front = [];
  const back = [];

  while (increment < 100) {
    const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    increment += randoFiver;

    const style = {
      bottom: `${randoFiver + randoFiver - 1 + 100}%`,
      animationDelay: `0.${randoHundo}s`,
      animationDuration: `0.5${randoHundo}s`,
    };

    front.push({
      id: `front-${increment}-${randoHundo}`,
      style: { ...style, color: "#1F51FF", left: `${increment}%` },
    });
    back.push({
      id: `back-${increment}-${randoHundo}`,
      style: { ...style, right: `${increment}%` },
    });
  }

  return { front, back };
}

function App() {
  const [weather, setWeather] = useState(true);
  const [theme, setTheme] = useState(true);
  const [style, setStyle] = useState(() => (window.innerWidth <= 880 ? "narrow" : "wide"));
  const rainDrops = useMemo(() => buildRainDrops(weather), [weather]);

  useEffect(() => {
    const handleResize = () => {
      setStyle(window.innerWidth <= 900 ? "narrow" : "wide");
      setFallDistance();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", setFallDistance);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", setFallDistance);
    };
  }, []);

  useEffect(() => {
    document.body.className = `${theme ? "light" : "dark"} back-row-toggle splat-toggle`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const toggleWeather = () => {
    setWeather(!weather);
  };

  return (
    <div className={`App-${style} ${theme ? "light" : "dark"} back-row-toggle splat-toggle`}>
      <RainRow className="front-row" drops={rainDrops.front} />
      <RainRow className="back-row" drops={rainDrops.back} />

      <div className="content">
        <div className="weather img" onClick={toggleWeather}>
          {weather ? <Rainy theme={theme} /> : <Cloudy theme={theme} />}
        </div>
        <div className="theme img" onClick={toggleTheme}>
          {theme ? <Dark /> : <Light />}
        </div>

        <div className={`section-${style}`}>
          <div>
            <div className="header">Ello, Ada here</div>
            <div className="desc">
              <ul>
                <li>4th year Software Engineering student from U of Waterloo</li>
                <li>a big reader, talk to me about any books!</li>
                <li>also an anime watcher and history fan</li>
                <li>currently exploring the world of AI and learning about all things data and AWS related.</li>
                <li>
                  how i stack my pancakes:
                  <span style={{ color: "#e3672d", fontWeight: "bold" }}> Svelte</span>,
                  <span style={{ color: "#2a92b8", fontWeight: "bold" }}> Python</span>,
                  <span style={{ color: "#b84d2a", fontWeight: "bold" }}> Rust</span>,
                  <span style={{ color: "#d19a56", fontWeight: "bold" }}> AWS</span>
                </li>
              </ul>
              <div className="icons">
                <a href="https://github.com/adabingw" className="links">
                  github
                </a>
                <a href="https://linkedin.com/in/adabingw" className="links">
                  linkedin
                </a>
                <a href="mailto:abwang@uwaterloo.ca" className="links">
                  email
                </a>
                <a href={AWResume} target="_blank" className="links" rel="noreferrer">
                  resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`section-${style}`}>
          <div className={`section-left-${style}`}>
            <div className="header">
              <span className="head">Chapter 1. </span>Experience
            </div>
            <div className={`experiences-${style}`}>
              <div className="experience">
                <span>Statsig</span>
                <span>2025 Summer</span>
              </div>
              <div className="experience">
                <span>Kortex</span>
                <span>2025 Winter</span>
              </div>
              <div className="experience">
                <span>Texada</span>
                <span>2024 Summer</span>
              </div>
              <div className="experience">
                <span>SnapPea</span>
                <span>2023 Fall</span>
              </div>
              <div className="experience">
                <span>McAfee</span>
                <span>2023 Winter</span>
              </div>
              <div className="experience">
                <span>Makesens</span>
                <span>2022 Summer</span>
              </div>
            </div>
          </div>
          <div>
            <div className="work_div">
              <Work
                header="Statsig"
                position="Data Infrastructure intern"
                desc="Optimizing deployment pipelines, integrating custom tooling for in-house orchestration solutions, and deploying high-volume log management alternatives."
                url="https://www.statsig.com/"
              />
              <Work
                header="Kortex"
                position="Software Engineering intern"
                desc="Helping create the second brain to capture and remember."
                url="https://www.kortex.co/"
              />
              <Work
                header="Texada Software"
                position="Core developer intern"
                desc="Terraforming Auth0 system and creating a pipeline for custom slack messages to be delivered after codebuild results. Managed APIGateway and DynamoDB and Lambda infrastructure."
                url="https://texadasoftware.com/"
              />
              <Work
                header="SnapPea"
                position="Software Engineer intern"
                desc="Creating prototypes and architecting solutions for gas sensors and real-time gas detection."
                url="https://snappeadesign.com/"
              />
              <Work
                header="McAfee"
                position="Fullstack developer intern"
                desc="Data analysis with Databricks and Apache. Also created guidelines of module mocking to unify everyone on the basis of software testing."
                url="https://www.mcafee.com/en-ca/index.html"
              />
              <Work
                header="Makesens"
                position="Software developer intern"
                desc="Developing IoT products to analyze torsion stress on rotary axles and simulation framework for hydrogen pipeline monitoring."
                url="http://makesens.ca/"
              />
              <Work
                header="UCalgary & Youreka"
                position="Cancer research student"
                desc="Created Kaplan Meier graphs and used Log Sum Rank tests to study effects of mRNA expressions on survivalships and identify prognostic biomarkers."
                url="http://makesens.ca/"
              />
            </div>
          </div>
        </div>

        <div className={`section-${style}`}>
          <div className={`section-left-${style} projects`}>
            <div className="header">
              <span className="head">Chapter 2. </span>Projects
            </div>
            <a href="https://github.com/adabingw">
              <div className="center">Find more at my Github!</div>
            </a>
          </div>
          <div>
            <div className="work_div">
              <Work
                header="iago"
                desc="Game bot for turn-based games implementing the Alphazero algorithm."
                url="https://iago-adabingw.netlify.app/othello"
              />
              <Work
                header="graku"
                desc="Grade calculator and management system written with Svelte, DynamoDB, and GraphQL."
                url="https://github.com/adabingw/graku/"
              />
              <Work
                header="leekcake"
                desc="Directly commit leetcode submittions to your github repo (chrome extension!)"
                url="https://github.com/adabingw/leekcake"
              />
              <Work
                header="iiwii"
                desc="Middle class text editor (like Notion??)"
                url="https://github.com/adabingw/iiwii"
              />
              <Work
                header="lyrr"
                desc="Genereate lyrics from your favourite artists (inspired by Taylor Swift lol)."
                url="https://github.com/adabingw/lyrr"
              />
              <Work
                header="writrr"
                desc="Generate realistic handwriting from your own handwriting"
                url="https://github.com/adabingw/writrr"
              />
              <Work
                header="convrr"
                desc="Unit converter made for my dad: an engineer who deals with complicated things"
                url="https://main--famous-smakager-e6e253.netlify.app/"
              />
            </div>
          </div>
        </div>

        <div className={`section-${style} last`}>
          <div className={`section-left-${style}`}>
            <div className="header">
              <span className="head">Chapter 3. </span>Me!
            </div>
            <div className="center">Here lies my hobbies, of which I surprisingly do have some...</div>
          </div>
          <div>
            <div className="work_div">
              <Work
                header="Reading"
                desc="Harvester of emotions...I like diving headfirst into books dealing with the human condition and small bits of fantasy (optional). Historical fiction are gems to me, so are characters. Think: The Lies of Locke Lamora, Demon Copperhead, The Kingdoms. I will read anything you recommend though, even genres I don't like (because I believe in meaningful conversations)."
              />
              <Work
                header="Anime-ing (and Manga)"
                desc="I like dumb fun and epic sagas. Sometimes throw in a romance or a scifi that scratches my itch like nothing else. Tops: Vinland Saga, Nichijou, Gintama, Hyouka, Kimi ni Todoke, Psycho Pass."
              />
              <Work
                header="Painting"
                desc="Probably my longest hobby that I actually used to take classes for (???). Of all the mediums I played with, nothing speaks to me the most like oil painting. But...oil paint is messay and expensive, so now I resort to acrylics to soothe my mind during tough times in school. Follow the link to see what I've created :D"
                url="https://photos.app.goo.gl/yiB8QNRMGYo93VcJA"
              />
              <Work
                header="Fridge magnets"
                position=""
                desc="I've started collecting fridge magnets of cities I visit so that, in the future, I could look at a magnet and tell a story..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RainRow({ className, drops }) {
  return (
    <div className={`rain ${className}`}>
      {drops.map((drop) => (
        <div className="drop" key={drop.id} style={drop.style}>
          <div
            className="stem"
            style={{
              animationDelay: drop.style.animationDelay,
              animationDuration: drop.style.animationDuration,
            }}
          />
          <div
            className="splat"
            style={{
              animationDelay: drop.style.animationDelay,
              animationDuration: drop.style.animationDuration,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function setFallDistance() {
  document.documentElement.style.setProperty("--fall-distance", `${document.body.scrollHeight + 300}px`);
}

export default App;
