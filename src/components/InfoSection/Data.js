import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";

export const homeObjOne = {
  id: "about1",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "ReactJS",
  headline: "I primary work with ReactJS for all my front-end work",
  description: "ReactJS is a single page application that allows for faster loading and seemless navigation through the web pages.",
  buttonLabel: "See ReactJS projects",
  imgStart: true,
  img: svg1,
  alt: "React",
  dark: false,
  primary: false,
  darkText: true,
  link: "/projects",
};

export const homeObjTwo = {
  id: "about2",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "HTML, CSS, Javascript",
  headline: "All front-end work is designed with HTML, CSS, Javascript",
  description: "Using these 3 technologies together a developer can create stunning web pages.",
  buttonLabel: "See projects",
  imgStart: false,
  img: svg2,
  alt: "React",
  dark: true,
  primary: true,
  darkText: false,
  link: "/projects",
};
