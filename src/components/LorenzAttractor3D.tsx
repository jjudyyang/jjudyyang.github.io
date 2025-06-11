import React, { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function generateLorenzPoints(steps = 4500, dt = 0.01) {
  const sigma = 10, rho = 28, beta = 8 / 3;
  let x = 0, y = 1, z = 1.05;
  const points: [number, number, number][] = [];
  for (let i = 0; i < steps; i++) {
    const dx = sigma * (y - x) * dt;
    const dy = (x * (rho - z) - y) * dt;
    const dz = (x * y - beta * z) * dt;
    x += dx; y += dy; z += dz;
    points.push([x, y, z]);
  }
  return points;
}

const LorenzAttractor3D: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const points = useMemo(() => generateLorenzPoints(), []);
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points.length * 3);
    points.forEach(([x, y, z], i) => {
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    });
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [points]);

  return (
    <div className="relative flex justify-center items-center" style={{ width: 900, height: 250 }}>
      {/* Tooltip */}
      <div
        className={`
          pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10
          transition-all duration-200
          ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          z-20
        `}
        style={{
          background: "#18181b",
          color: "white",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        The Lorenz Attractor
        {/* Optional arrow */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "100%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid #18181b",
          }}
        />
      </div>
      <Canvas
        camera={{ position: [0, 0, 60], fov: 60 }}
        style={{
          width: 900,
          height: 250,
          background: "transparent",
          pointerEvents: "auto",
          display: "block",
          margin: "0 auto",
          borderRadius: "0.75rem"
        }}
        gl={{ alpha: true }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <group>
          <line>
            <primitive object={lineGeometry} attach="geometry" />
            <lineBasicMaterial attach="material" color="#f97316" linewidth={2} />
          </line>
        </group>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
};

export default LorenzAttractor3D; 