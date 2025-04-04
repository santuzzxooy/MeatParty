import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 



const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 2,
            duration: 15,
          },
          grab: {
            distance: 200,
          },
        },
      },
      particles: {
        color: {
          value: "#0000",
        },
        links: {
          color: "#960000",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 3,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0, max: 0 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return <Particles id="tsparticles" init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent