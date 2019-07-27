import React from 'react';
import './HomePage.scss';
import PropTypes from 'prop-types';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';

const LandingPage = ({ scrollDownArrow, target }) => {
  LandingPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
    target: PropTypes.string.isRequired,
  };

  LandingPage.defaultProps = {
    scrollDownArrow: false,
  };

  return (
    <div id="home" className="LandingPage">
      <h1>Dario Borghino</h1>
      <h2>Front-end Developer</h2>
      <ul className="social">
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Medium</li>
      </ul>
      {
        scrollDownArrow
          ? <div className="arrow"><ScrollDownArrow target={target} /></div> : null
      }
    </div>
  );
};

export default LandingPage;
