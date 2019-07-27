import React from 'react';
import './AboutPage.scss';
import PropTypes from 'prop-types';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';

const AboutPage = ({ scrollDownArrow, target }) => {
  AboutPage.propTypes = {
    scrollDownArrow: PropTypes.bool.isRequired,
    target: PropTypes.string.isRequired,
  };

  return (
    <div id="about" className="AboutPage">
    About page
      {
      scrollDownArrow
        ? <div className="arrow"><ScrollDownArrow target={target} /></div> : null
      }

    </div>
  );
};

export default AboutPage;
