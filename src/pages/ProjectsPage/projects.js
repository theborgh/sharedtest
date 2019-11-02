import paletteMaker from "../../assets/projects/palettemaker.png";
import dadjokes from "../../assets/projects/dadjokes.png";
import guesstheword from "../../assets/projects/guesstheword.png";
import portfolio from "../../assets/projects/portfolio.png";

export default [
  {
    name: "Palette Maker",
    description:
      "SPA that allows users to create color palettes, saving them to localStorage, visualize colors and copy them in hex, rgb, and rgba format with different light levels.",
    techStack: ["React.js", "JSS", "Material-UI", "Drag & Drop", "Chroma.js"],
    screenshotUrl: paletteMaker,
    repositoryUrl: "",
    liveUrl: "https://palettemaker.netlify.com/"
  },

  {
    name: "The Dad Jokes App",
    description:
      "A small application that fetches random, unique jokes and displays them to the user ten at a time, allows the user to vote on them, delete the jokes or fetch more, saving state to localStorage.",
    techStack: ["React.js", "CSS", "localStorage"],
    screenshotUrl: dadjokes,
    repositoryUrl: "https://github.com/theborgh/dad-jokes",
    liveUrl: "https://dadjokesapp.netlify.com/"
  },

  {
    name: "Guess the Word",
    description:
      "A simple 'Guess the word' game implemented using a pure TDD approach.",
    techStack: ["React.js", "Hooks", "Context", "Jest", "Enzyme", "TDD"],
    screenshotUrl: guesstheword,
    repositoryUrl: "https://github.com/theborgh/guess-the-word-hooks",
    liveUrl: ""
  },

  {
    name: "Portfolio",
    description:
      "An easily customizable portfolio website with a pure-CSS menu, a separate navigation method for mobile, svg icons, and a radar graph to display skills.",
    techStack: ["React.js", "SASS", "Responsive"],
    screenshotUrl: portfolio,
    repositoryUrl: "https://github.com/theborgh/theborgh.github.io",
    liveUrl: "https://theborgh.dev/"
  },

  {
    name: "Brainiac",
    description:
      "Process images (through URLs provided by the user) and detect all the faces in the picture, drawing a rectangle around them.",
    techStack: ["React.js", "ClarifAI"],
    screenshotUrl: "",
    repositoryUrl: "",
    liveUrl: ""
  },

  {
    name: "Clothing store",
    description: "Work in progress. ",
    techStack: ["React.js", "TypeScript", "Styled-components"],
    screenshotUrl: "",
    repositoryUrl: "",
    liveUrl: ""
  }
];
