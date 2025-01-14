export const positions = ["center", "left1", "left", "right", "right1"];

export const imageVariants = {
  center: {
    x: "0%",
    z: 0,
    scale: 1.4,
    rotateY: 0,
    rotateX: 15,
    rotateZ: 0,
    zIndex: 5,
    opacity: 1,
    filter: "brightness(1) drop-shadow(0px 20px 30px rgba(0,0,0,0.6))",
  },
  left1: {
    x: "-40%",
    z: -100,
    scale: 0.9,
    rotateY: 15,
    rotateX: 10,
    zIndex: 3,
    opacity: 0.7,
    filter: "brightness(0.8) blur(1px)",
  },
  left: {
    x: "-80%",
    z: -200,
    scale: 0.7,
    rotateY: 30,
    rotateX: 5,
    zIndex: 2,
    opacity: 0.5,
    filter: "brightness(0.6) blur(2px)",
  },
  right: {
    x: "80%",
    z: -200,
    scale: 0.7,
    rotateY: -30,
    rotateX: 5,
    zIndex: 2,
    opacity: 0.5,
    filter: "brightness(0.6) blur(2px)",
  },
  right1: {
    x: "40%",
    z: -100,
    scale: 0.9,
    rotateY: -15,
    rotateX: 10,
    zIndex: 3,
    opacity: 0.7,
    filter: "brightness(0.8) blur(1px)",
  },
};
