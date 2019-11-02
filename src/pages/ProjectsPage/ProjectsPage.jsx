import React from "react";
import "./ProjectsPage.scss";
import PropTypes from "prop-types";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import Project from "../../components/Project/Project";
import projects from "./projects";

import img from "../../assets/projects/dadjokes.png";

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

      <ul className="ProjectsContainer">
        {projects.map(project => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            screenshotUrl={img}
            repositoryUrl={project.repositoryUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </ul>

      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow />
        </div>
      ) : null}
    </div>
  );
};

export default ProjectsPage;
