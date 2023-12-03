import React from "react";
import PropTypes from "prop-types";
import "./Project.scss";

const Project = ({
  name,
  description,
  techStack,
  screenshotUrl,
  repositoryUrl,
  liveUrl,
  workInProgress
}) => {
  Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.array.isRequired,
    screenshotUrl: PropTypes.string.isRequired,
    repositoryUrl: PropTypes.string.isRequired,
    liveUrl: PropTypes.string.isRequired,
    workInProgress: PropTypes.bool.isRequired
  };

  return (
    <div className="Project">
      <div
        className="Project-screenshot"
        style={{
          background: `url(${screenshotUrl})`,
          backgroundSize: "cover"
        }}
      >
        <div className="Project-links">
          <a
            className="Project-link"
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
          <a
            className="Project-link"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live version
          </a>
        </div>
      </div>
      <div className="Project-info">
        <div className="Project-title">
          <div className="Project-name">{name}</div>
          {workInProgress && <div className="Project-wip">[WIP]</div>}
        </div>
        <div className="Project-description">{description}</div>
        <div className="Project-stack">
          {techStack
            ? techStack.map(tech => (
                // eslint-disable-next-line react/jsx-indent
                <div key={tech} className="Project-tech">
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
