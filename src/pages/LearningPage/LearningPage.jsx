import React from 'react';
import './LearningPage.scss';
import PropTypes from 'prop-types';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';

const LearningPage = ({ scrollDownArrow }) => {
  LearningPage.propTypes = {
    scrollDownArrow: PropTypes.bool.isRequired,
  };

  return (
    <div className="LearningPage">
      <h1>Learning page</h1>
      <p>
        Continuing education is an essential requirement for software developers,
        moreso on the frontend. This is what&#39;s currently on my map:
      </p>
      Learning:
      <ul>
        <li>Material UI</li>
        <li>Next.js</li>
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
          ? <div className="arrow"><ScrollDownArrow /></div> : null
      }
    </div>
  );
};

export default LearningPage;
