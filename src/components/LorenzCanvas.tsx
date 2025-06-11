import React, { useRef, useEffect } from "react";
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";

const LORENZ_PARAMS = {
  sigma: 10,
  rho: 28,
  beta: 8 / 3,
  dt: 0.01, // 2–3 ms step for ~15s loop
  stepsPerFrame: 2, // draw every 2 ms
  totalSteps: 4500, // ~15s at 30fps, 2ms/step
};

const sketch: Sketch = (p5) => {
  let points: { x: number; y: number; z: number }[] = [];
  let t = 0;
  let width = 900;
  let height = 250;

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);
    p5.clear();
    p5.frameRate(30);

    // Generate Lorenz attractor points
    let x = 0, y = 1, z = 1.05;
    points = [];
    for (let i = 0; i < LORENZ_PARAMS.totalSteps; i++) {
      for (let j = 0; j < LORENZ_PARAMS.stepsPerFrame; j++) {
        const dx = LORENZ_PARAMS.sigma * (y - x) * LORENZ_PARAMS.dt;
        const dy = (x * (LORENZ_PARAMS.rho - z) - y) * LORENZ_PARAMS.dt;
        const dz = (x * y - LORENZ_PARAMS.beta * z) * LORENZ_PARAMS.dt;
        x += dx;
        y += dy;
        z += dz;
      }
      points.push({ x, y, z });
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(width, height);
    p5.clear();
  };

  p5.draw = () => {
    p5.clear(); // transparent background
    p5.push();
    p5.translate(0, 0, 0); // center in canvas
    p5.scale(Math.min(width, height) / 80); // scale attractor to fit

    p5.stroke("#f97316"); // lighter orange
    p5.strokeWeight(1.5);
    p5.noFill();

    p5.beginShape();
    for (let i = 0; i < t; i++) {
      const pt = points[i];
      p5.vertex(pt.x, pt.y, pt.z);
    }
    p5.endShape();

    // Draw particle at current point
    if (t > 0 && t < points.length) {
      const pt = points[t-1];
      p5.push();
      p5.noStroke();
      p5.fill("#fb923c"); // even lighter orange for the particle
      p5.translate(pt.x, pt.y, pt.z);
      p5.sphere(2.5, 8, 8);
      p5.pop();
    }

    p5.pop();

    t++;
    if (t > points.length) t = 0; // loop
  };
};

const LorenzCanvas: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Remove absolute positioning, set fixed width/height
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.position = "relative";
      wrapper.style.width = "900px";
      wrapper.style.height = "250px";
      wrapper.style.pointerEvents = "none";
      wrapper.style.background = "transparent";
      wrapper.style.margin = "0 auto";
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "center";
      wrapper.style.alignItems = "center";
    }
  }, []);

  return (
    <div ref={wrapperRef}>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default LorenzCanvas; 