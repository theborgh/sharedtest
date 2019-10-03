import React from "react";
import "./SkillsPage.scss";
import PropTypes from "prop-types";
import RadarChart from "react-svg-radar-chart";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import "react-svg-radar-chart/build/css/index.css";

const SkillsPage = ({ scrollDownArrow, scrollDownTarget }) => {
  SkillsPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
    scrollDownTarget: PropTypes.string.isRequired
  };
  SkillsPage.defaultProps = {
    scrollDownArrow: false
  };

  const data = [
    {
      data: {
        javascript: 0.9,
        react: 0.82,
        redux: 0.74,
        responsive: 0.8,
        testing: 0.82,
        css: 0.8,
        typescript: 0.77
      },
      meta: { color: "rgba(56, 100, 122, 1)" }
    }
  ];

  const captions = {
    javascript: "Javascript",
    react: "React.js",
    redux: "Redux",
    responsive: "Responsive design",
    testing: "Testing (Jest/Enzyme)",
    css: "CSS/SCSS",
    typescript: "Typescript"
  };

  return (
    <div id="skills" className="SkillsPage">
      <h1>Skills</h1>

      <div className="RadarChart">
        <RadarChart captions={captions} data={data} size={450} />
      </div>

      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow target={scrollDownTarget} />
        </div>
      ) : null}
    </div>
  );
};

export default SkillsPage;
