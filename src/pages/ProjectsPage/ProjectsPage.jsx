import React from "react";
import "./ProjectsPage.scss";
import PropTypes from "prop-types";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const ProjectsPage = ({ scrollDownArrow }) => {
  ProjectsPage.propTypes = {
    scrollDownArrow: PropTypes.bool
  };

  ProjectsPage.defaultProps = {
    scrollDownArrow: false
  };

  return (
    <div id="projects" className="ProjectsPage">
      <h1>Projects</h1>
      <p>
        This section is under construction! In the meantime, please check these
        github repos of mine:
      </p>

      <ul>
        <li>
          <a href="https://github.com/theborgh/clothing-store">
            Clothing store
          </a>
          : An online clothing shop in React.js/Redux/Firebase
        </li>
        <li>
          <a href="https://github.com/theborgh/brainiac">Brainiac</a>: A
          React.js app that detects the faces in a picture through the ClarifAI
          API
        </li>
        <li>
          <a href="https://github.com/theborgh/guess-the-word">
            Guess the word
          </a>
          : A simple guessing game implemented with a pure TDD approach, with
          unit and integration testing in Jest/Enzyme
        </li>
      </ul>

      <p>
        I&#39;m also in the process of developing a big personal project: a
        full-stack, fully featured Not-Your-Typical-Todo-App to collect,
        organize, prioritize and track your todos in a stress-free way
        implementing David Allen&#39;s{" "}
        <a href="https://gettingthingsdone.com/">Getting Things Done</a> task
        management system. The stack I chose includes React.js, Typescript,
        SCSS, Jest and Enzyme on the frontend, and Node/Express on the backend.
        This project is in its very early stages, but I&#39;ll be sure to post a
        link to the code as soon as it becomes worth showing.
      </p>
      {/* <ul>
        {projects.map(proj => (
          <Project
            key={proj.name}
            name={proj.name}
            description={proj.description}
            tech={proj.tech}
          />
        ))}
      </ul> */}
      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow />
        </div>
      ) : null}
    </div>
  );
};

export default ProjectsPage;
