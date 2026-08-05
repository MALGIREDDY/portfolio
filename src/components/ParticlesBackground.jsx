import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 45,
          },

          color: {
            value: "#22d3ee",
          },

          links: {
            enable: true,
            distance: 150,
            color: "#22d3ee",
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: 2,
          },

          opacity: {
            value: 0.4,
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;