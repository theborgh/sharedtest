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
        Under construction! In the meantime, please check these github repos of
        mine:
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
        organize, schedule and track your todos stress-free. The tech stack
        includes React.js, Typescript, SCSS, Jest and Enzyme on the frontend,
        and Node/Express on the backend. However, this project is in its very
        early stages. I will post more info as soon as I have enough code to be
        worth showing.
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
