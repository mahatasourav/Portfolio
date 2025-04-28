import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Updated zIndex to be lower to allow content to be above the particles
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "#0b0c2f", // Background color
          },
          particles: {
            number: {
              value: 80, // Number of particles
              density: {
                enable: true,
                value_area: 800, // Density of the particles
              },
            },
            shape: {
              type: "circle", // Particle shape
            },
            opacity: {
              value: 0.5, // Particle opacity
              random: true, // Random opacity
              animation: {
                enable: true, // Enable opacity animation
                speed: 1, // Speed of the animation
                opacity_min: 0.1, // Minimum opacity
              },
            },
            size: {
              value: 3, // Size of particles
              random: true, // Randomize size
              animation: {
                enable: true, // Enable size animation
                speed: 4, // Speed of size animation
                size_min: 0.1, // Minimum size
              },
            },
            move: {
              enable: true, // Enable particle movement
              speed: 1.5, // Speed of movement
              direction: "none", // No fixed direction
              random: true, // Random movement
              straight: false, // No straight path
              out_mode: "out", // Particles leave the screen
              attract: {
                enable: false, // No attraction effect
              },
            },
            links: {
              enable: true, // Enable particle connection
              distance: 150, // Maximum distance between particles
              color: "#ffffff", // Link color
              opacity: 0.4, // Link opacity
              width: 1, // Link width
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true, // Enable hover effect
                  mode: "repulse", // Repel particles on hover
                },
                onclick: {
                  enable: false, // Disable click interaction
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticleBackground;
