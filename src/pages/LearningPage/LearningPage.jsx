import React, { Component } from 'react';
import './LearningPage.scss';
import PropTypes from 'prop-types';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';
import LearningResource from '../../components/LearningResource/LearningResource';

class LearningPage extends Component {
  constructor(props) {
    super(props);
    const { scrollDownArrow, target } = this.props;
    this.state = {
      scrollDownArrow,
      target,

      learning: [
        {
          name: 'The complete web developer',
          description: 'A great course',
          skills: [
            'JS', 'CSS', 'React.js',
          ],
        },
        {
          name: 'Clean Code',
          description: 'A great book',
          skills: [
            'TDD', 'Ethics',
          ],
        },
        {
          name: 'The Clean Coder',
          description: 'Another great book',
          skills: [
            'JS', 'CSS', 'React.js',
          ],
        },
      ],
    };
  }

  render() {
    const { scrollDownArrow, target, learning } = this.state;
    return (
      <div id="learning" className="LearningPage">
        <h1>Learning page</h1>
        <p>
          Continuing education is an essential requirement for software developers,
          moreso in the rapidly evolving world of frontend development. This is what&#39;s
          currently on my map:
        </p>
        Learned:
        <ul>
          {
            learning.map(el => (
              <LearningResource
                name={el.name}
                description={el.description}
                skills={el.skills}
              />
            ))
          }
        </ul>
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
  }
}

LearningPage.propTypes = {
  scrollDownArrow: PropTypes.bool,
  target: PropTypes.string.isRequired,
};

LearningPage.defaultProps = {
  scrollDownArrow: false,
};

export default LearningPage;
