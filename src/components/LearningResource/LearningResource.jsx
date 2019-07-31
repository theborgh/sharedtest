import React from 'react';
import PropTypes from 'prop-types';
import './LearningResource.scss';

const learningResource = ({ name, description, skills }) => {
  learningResource.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
  };

  return (
    <div className="LearningResource">
      {name}
      {description}
      {
        skills.map(skill => `${skill} `)
      }
    </div>
  );
};

export default learningResource;
