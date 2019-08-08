import React from "react";
import PropTypes from "prop-types";
import "./LearningResource.scss";

const learningResource = ({ name, description, skills }) => {
  learningResource.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
  };

  return (
    <div className="LearningResource">
      Name: {name}
      Description: {description}
      Skills: {skills ? skills.map(skill => `${skill} `) : null}
    </div>
  );
};

export default learningResource;
