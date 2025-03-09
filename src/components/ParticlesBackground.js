import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Use "tsparticles-slim" instead of "tsparticles"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Correct way to load particles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: { value: 100 },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#38BDF8",
            opacity: 0.4,
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
