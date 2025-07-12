const particlesConfig = {
  background: { color: { value: "#ffffff" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#000000" },
    links: { enable: true, distance: 150, color: "#000000" },
    move: { enable: true, speed: 2 },
    size: { value: 3 },
  },
};

export default particlesConfig;
