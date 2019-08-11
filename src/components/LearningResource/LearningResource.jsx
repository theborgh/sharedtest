import React from "react";
import PropTypes from "prop-types";
import "./LearningResource.scss";

const learningResource = ({ name, description, skills, backgroundImage }) => {
  learningResource.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    backgroundImage: PropTypes.string.isRequired
  };

  return (
    <div
      className="LearningResource"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="learningresource--name">
        <strong>Name:</strong> {name}
      </div>
      <div className="learningresource--description">
        <strong>Description:</strong> {description}
      </div>
      <div className="learningresource--skills">
        <strong>Why this?</strong>{" "}
        {skills ? skills.map(skill => `${skill} `) : null}
      </div>
    </div>
  );
};

export default learningResource;
