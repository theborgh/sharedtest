import React from "react";
import "./ProjectsPage.scss";
import PropTypes from "prop-types";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import Project from "../../components/Project/Project";
import projects from "./projects";

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

      <ul className="ProjectsContainer">
        {projects.map(project => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            screenshotUrl={project.screenshotUrl}
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
