
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000",
        },
        particles: {
          number: { value: 150 },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.2, max: 1 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: { enable: true, speed: 2, minimumValue: 1, sync: false },
          },
          move: {
            enable: true,
            speed: { min: 0.05, max: 0.1 },
            direction: "none",
            outModes: "out",
            random: true,
          },
          twinkle: {
            particles: { enable: true, frequency: 0.05, opacity: 1 },
          },
          zIndex: {
            value: 10,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            push: { quantity: 1 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;









// // import React, { useCallback } from "react";
// // import Particles from "react-tsparticles";
// // import { loadSlim } from "tsparticles-slim"; s

// // const ParticlesBackground = () => {
// //   const particlesInit = useCallback(async (engine) => {
// //     await loadSlim(engine);
// //   }, []);

// //   return (
// //     <Particles
// //       id="tsparticles"
// //       init={particlesInit}
// //       options={{
// //         background: {
// //           color: "transparent",
// //         },
// //         particles: {
// //           number: { value: 100 },
// //           shape: { type: "circle" },
// //           opacity: { value: 0.5 },
// //           size: { value: 3 },
// //           move: { enable: true, speed: 1 },
// //           links: {
// //             enable: true,
// //             distance: 150,
// //             color: "#38BDF8",
// //             opacity: 0.4,
// //           },
// //         },

// //         responsive: [
// //           {
// //             breakpoint: 768,
// //             options: {
// //               particles: { number: { value: 50 } },
// //             },
// //           },
// //         ],
// //         interactivity: {
// //           events: {
// //             onClick: { enable: true, mode: "push" },
// //             onHover: { enable: true, mode: "bubble" },
// //           },
// //           modes: {
// //             push: { quantity: 1 },
// //             bubble: { size: 10, duration: 2, opacity: 0.8 },
// //           },
// //         },
// //       }}
// //     />
// //   );
// // };

// // export default ParticlesBackground;

// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: "#000",
//         },
//         particles: {
//           number: { value: 100 },
//           shape: { type: "circle" },
//           opacity: {
//             value: { min: 0.1, max: 1 },
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//           move: {
//             enable: true,
//             speed: { min: 0.1, max: 3 },
//             parallax: { enable: true, smooth: 10 },
//             straight: false,
//           },
//           zIndex: {
//             value: 10,
//             opacityRate: 1,
//             sizeRate: 1,
//             velocityRate: 1,
//           },
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#38BDF8",
//             opacity: 0.4,
//           },
//         },
//         responsive: [
//           {
//             breakpoint: 768,
//             options: {
//               particles: { number: { value: 50 } },
//             },
//           },
//         ],
//         interactivity: {
//           events: {
//             onClick: { enable: true, mode: "push" },
//             onHover: { enable: true, mode: "bubble" },
//           },
//           modes: {
//             push: { quantity: 1 },
//             bubble: { size: 10, duration: 2, opacity: 0.8 },
//             repulse: { distance: 100, duration: 0.4 },
//           },
//         },
//       }}
//     />
//   );
// };

// export default ParticlesBackground;
