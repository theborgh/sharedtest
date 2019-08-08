import React from "react";
import PropTypes from "prop-types";
import "./Project.scss";

const Project = ({ name, description, tech }) => {
  Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.array.isRequired
  };

  return (
    <div className="Project">
      Name: {name}
      Description: {description}
      Tech: {tech ? tech.map(t => `${t} `) : null}
    </div>
  );
};

export default Project;
