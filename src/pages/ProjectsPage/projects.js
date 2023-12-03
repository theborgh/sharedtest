import paletteMaker400 from "../../assets/projects/palettemaker.webp";
import guesstheword400 from "../../assets/projects/guesstheword.webp";
import portfolio400 from "../../assets/projects/portfolio.webp";

export default [
  {
    name: "Bug Tracker",
    description: "Next.js app that lets developers create and track bugs.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    screenshotUrl: paletteMaker400,
    repositoryUrl: "https://github.com/theborgh/bug-tracker",
    liveUrl: "https://bug-tracker-sigma.vercel.app/",
    workInProgress: false
  },
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
  }
];
