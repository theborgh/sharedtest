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
    <div className="Project" style={{}}>
      <div
        className="Project-screenshot"
        style={{
          background: `url(${screenshotUrl})`,
          backgroundSize: "contain"
        }}
      >
        <a className="Project-link" href={repositoryUrl}>
          Repository
        </a>
        <a className="Project-link" href={liveUrl}>
          Live version
        </a>
      </div>
      <div className="Project-info">
        <div className="Project-name">{name}</div>
        <div className="Project-description">{description}</div>
        <div className="Project-stack">
          {techStack
            ? techStack.map((tech, i) => (
                <div key={i} className="Project-tech">
                  {tech}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
