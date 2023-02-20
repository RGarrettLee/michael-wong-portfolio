export default function ParticleOptions() {
  return {
    fpsLimit: 120,
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      zIndex: {
        value: 0
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 100,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 3
        },
      },
    },
    detectRetina: true,
  }
}