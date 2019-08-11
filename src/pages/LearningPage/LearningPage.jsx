import React from "react";
import "./LearningPage.scss";
import PropTypes from "prop-types";
import { learned, learning } from "./learningData";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import LearningResource from "../../components/LearningResource/LearningResource";

const LearningPage = ({ scrollDownArrow, scrollDownTarget }) => {
  LearningPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
    scrollDownTarget: PropTypes.string.isRequired
  };

  LearningPage.defaultProps = {
    scrollDownArrow: false
  };

  return (
    <div id="learning" className="LearningPage">
      <h1>Learning page</h1>
      <p>
        Continuing education is an essential requirement for software
        developers, moreso in the rapidly evolving world of frontend
        development. This is what&#39;s currently on my map:
      </p>
      <h2>Now learning:</h2>
      <ul>
        {learning.map(el => (
          <LearningResource
            key={el.name}
            name={el.name}
            description={el.description}
            backgroundImage={el.backgroundImage}
          />
        ))}

        <li>Material UI</li>
        <li>Next.js</li>
        <li>Udemy courses</li>
        <li>GraphQL</li>
        <li>Docker</li>
      </ul>
      <h2>Best things I learned:</h2>
      <ul>
        {learned.map(el => (
          <LearningResource
            key={el.name}
            name={el.name}
            description={el.description}
            skills={el.skills}
          />
        ))}
      </ul>

      <h2>Wishlist:</h2>
      <ul>
        <li>The Clean Coder</li>
        <li>Clean Code</li>
        <li>Alg & Data Structures</li>
        <li>AirBnb Style guide</li>
      </ul>
      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow target={scrollDownTarget} />
        </div>
      ) : null}
    </div>
  );
};

export default LearningPage;
