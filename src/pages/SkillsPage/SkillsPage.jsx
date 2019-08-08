import React from "react";
import "./SkillsPage.scss";
import PropTypes from "prop-types";
import RadarChart from "react-svg-radar-chart";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import "react-svg-radar-chart/build/css/index.css";

const SkillsPage = ({ scrollDownArrow, target }) => {
  SkillsPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
    target: PropTypes.string.isRequired
  };
  SkillsPage.defaultProps = {
    scrollDownArrow: false
  };

  const data = [
    {
      data: {
        react: 0.7,
        javascript: 0.8,
        redux: 0.9,
        testing: 0.67,
        english: 0.95,
        css: 0.75,
        responsive: 0.8
      },
      meta: { color: "rgba(56, 100, 122, 1)" }
    }
  ];

  const captions = {
    react: "React",
    javascript: "Javascript",
    redux: "Redux",
    testing: "Testing",
    english: "English",
    css: "CSS",
    responsive: "Responsive design"
  };

  return (
    <div id="skills" className="SkillsPage">
      <h1>Skills</h1>

      <div className="RadarChart">
        <RadarChart captions={captions} data={data} size={450} />
      </div>

      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow target={target} />
        </div>
      ) : null}
    </div>
  );
};

export default SkillsPage;
