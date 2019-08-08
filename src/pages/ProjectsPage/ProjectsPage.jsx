import React from "react";
import "./ProjectsPage.scss";
import PropTypes from "prop-types";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import { projects } from "./projectsData";
import Project from "../../components/Project/Project";

const ProjectsPage = ({ scrollDownArrow }) => {
  ProjectsPage.propTypes = {
    scrollDownArrow: PropTypes.bool
  };

  ProjectsPage.defaultProps = {
    scrollDownArrow: false
  };

  return (
    <div id="projects" className="ProjectsPage">
      <h1>Projects page</h1>
      <ul>
        {projects.map(proj => (
          <Project
            key={proj.name}
            name={proj.name}
            description={proj.description}
            tech={proj.tech}
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
