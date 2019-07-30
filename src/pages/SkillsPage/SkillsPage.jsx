import React from 'react';
import './SkillsPage.scss';
import PropTypes from 'prop-types';
import RadarChart from 'react-svg-radar-chart';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';
import 'react-svg-radar-chart/build/css/index.css';

const SkillsPage = ({ scrollDownArrow, target }) => {
  SkillsPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
    target: PropTypes.string.isRequired,
  };
  SkillsPage.defaultProps = {
    scrollDownArrow: false,
  };

  const data = [
    {
      data: {
        battery: 0.7,
        design: 0.8,
        useful: 0.9,
        speed: 0.67,
        weight: 1,
      },
      meta: { color: 'rgba(56, 100, 122, 1)' },
    },
  ];

  const captions = {
    battery: 'React',
    design: 'Javascript',
    useful: 'Redux',
    speed: 'Testing',
    weight: 'English',
  };


  return (
    <div id="skills" className="SkillsPage">
      <h1>Skills</h1>

      <div className="RadarChart">
        <RadarChart
          captions={captions}
          data={data}
          size={450}
        />
      </div>

      {
        scrollDownArrow
          ? <div className="arrow"><ScrollDownArrow target={target} /></div> : null
      }
    </div>
  );
};

export default SkillsPage;
