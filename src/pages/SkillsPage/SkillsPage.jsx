import React from 'react';
import './SkillsPage.scss';
import PropTypes from 'prop-types';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';

const SkillsPage = ({ scrollDownArrow, target }) => {
  SkillsPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
    target: PropTypes.string.isRequired,
  };
  SkillsPage.defaultProps = {
    scrollDownArrow: false,
  };

  return (
    <div id="skills" className="SkillsPage">
      Skills page
      {
        scrollDownArrow
          ? <div className="arrow"><ScrollDownArrow target={target} /></div> : null
      }
    </div>
  );
};

export default SkillsPage;
