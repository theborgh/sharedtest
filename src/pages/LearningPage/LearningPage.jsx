import React from 'react';
import './LearningPage.scss';
import PropTypes from 'prop-types';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';

const LearningPage = ({ scrollDownArrow, target }) => {
  LearningPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
    target: PropTypes.string.isRequired,
  };
  LearningPage.defaultProps = {
    scrollDownArrow: false,
  };

  return (
    <div id="learning" className="LearningPage">
      <h1>Learning page</h1>
      <p>
        Continuing education is an essential requirement for software developers,
        moreso in the rapidly evolving world of frontend development. This is what&#39;s
        currently on my map:
      </p>
      Learning:
      <ul>
        <li>Material UI</li>
        <li>Next.js</li>
        <li>Udemy courses</li>
        <li>GraphQL</li>
        <li>Docker</li>
      </ul>
      Some of the things I&#39;m reading:
      <ul>
        <li>The Clean Coder</li>
        <li>Clean Code</li>
        <li>Alg & Data Structures</li>
        <li>AirBnb Style guide</li>
      </ul>
      {
        scrollDownArrow
          ? <div className="arrow"><ScrollDownArrow target={target} /></div> : null
      }
    </div>
  );
};

export default LearningPage;
