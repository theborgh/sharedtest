import React from 'react';
import './ProjectsPage.scss';
import PropTypes from 'prop-types';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';

const ProjectsPage = ({ scrollDownArrow }) => {
  ProjectsPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
  };

  ProjectsPage.defaultProps = {
    scrollDownArrow: false,
  };

  return (
    <div id="projects" className="ProjectsPage">
      <h1>Projects page</h1>
      <ul>
        <li>FaceBlur</li>
        <li>Clothing Shop</li>
        <li>Game of Fifteen</li>
        <li>Chingu project</li>
      </ul>
      {
        scrollDownArrow
          ? <div className="arrow"><ScrollDownArrow /></div> : null
      }
    </div>
  );
};

export default ProjectsPage;
