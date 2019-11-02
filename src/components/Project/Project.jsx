import React from "react";
import PropTypes from "prop-types";
import "./Project.scss";

const Project = ({
  name,
  description,
  techStack,
  screenshotUrl,
  repositoryUrl,
  liveUrl
}) => {
  Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.array.isRequired,
    screenshotUrl: PropTypes.string.isRequired,
    repositoryUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string.isRequired
  };

  return (
    <div
      className="Project"
      style={{ background: `url(${screenshotUrl})`, backgroundSize: "cover" }}
    >
      Name: {name}
      Description: {description}
      Tech: {techStack ? techStack.map(t => `${t} `) : null}
    </div>
  );
};

export default Project;
