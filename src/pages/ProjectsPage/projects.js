import paletteMaker400 from "../../assets/projects/palettemaker.webp";
import dadjokes400 from "../../assets/projects/dadjokes.webp";
import guesstheword400 from "../../assets/projects/guesstheword.webp";
import portfolio400 from "../../assets/projects/portfolio.webp";
import brainiac400 from "../../assets/projects/brainiac.webp";
import clothingstore400 from "../../assets/projects/clothingstore.webp";

export default [
  {
    name: "Palette Maker",
    description:
      "SPA that lets users create persistent color palettes, visualize colors, and copy them in multiple formats (hex, rgb, rgba) at different light levels.",
    techStack: [
      "React.js",
      "JSS",
      "Material-UI",
      "Drag & Drop",
      "React Router"
    ],
    screenshotUrl: paletteMaker400,
    repositoryUrl: "https://github.com/theborgh/palette-maker",
    liveUrl: "https://palettemaker.netlify.com/",
    workInProgress: false
  },

  {
    name: "The Dad Jokes App",
    description:
      "A small application that fetches random, unique jokes and displays them to the user ten at a time, allows the user to vote on them, delete the jokes, or fetch more, saving state to localStorage.",
    techStack: ["React.js", "CSS", "localStorage"],
    screenshotUrl: dadjokes400,
    repositoryUrl: "https://github.com/theborgh/dad-jokes",
    liveUrl: "https://dadjokesapp.netlify.com/",
    workInProgress: false
  },

  {
    name: "Guess the Word",
    description:
      "A simple 'Guess the word' game implemented with a pure TDD approach, using Jest and Enzyme for unit and integration testing.",
    techStack: ["React.js", "Hooks", "Context", "Jest", "Enzyme", "TDD"],
    screenshotUrl: guesstheword400,
    repositoryUrl: "https://github.com/theborgh/guess-the-word-hooks",
    liveUrl: "",
    workInProgress: false
  },

  {
    name: "Portfolio",
    description:
      "An easily customizable portfolio website with a pure-CSS menu, a separate navigation logic for mobile, svg icons, and an svg radar chart to display technical skills.",
    techStack: ["React.js", "SASS", "Mobile-first"],
    screenshotUrl: portfolio400,
    repositoryUrl: "https://github.com/theborgh/theborgh.github.io",
    liveUrl: "https://theborgh.dev/",
    workInProgress: false
  },

  {
    name: "Brainiac",
    description:
      "Process images (provided by URL by the user) and detect all the faces in the picture, drawing a rectangle around them.",
    techStack: ["React.js", "ClarifAI", "Node.js", "Express"],
    screenshotUrl: brainiac400,
    repositoryUrl: "https://github.com/theborgh/brainiac",
    liveUrl: "https://brainiak.herokuapp.com/",
    workInProgress: false
  },

  {
    name: "Clothing store",
    description:
      "A SPA online store with user authentication, item cart, checkout, and more. (Work in progress)",
    techStack: ["React.js", "SPA", "Firebase", "React Router", "Redux"],
    screenshotUrl: clothingstore400,
    repositoryUrl: "https://github.com/theborgh/clothing-store",
    liveUrl: "https://reactclothingstore.netlify.com/",
    workInProgress: true
  }
];
