import React from 'react';
import './ScrollDownArrow.scss';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowDown } from '../../assets/arrowdown.svg';

const ScrollDownArrow = ({ target }) => {
  ScrollDownArrow.propTypes = {
    target: PropTypes.string.isRequired,
  };

  return (
    <div className="ScrollDownArrow">
      <a href={`#${target}`}><ArrowDown /></a>
    </div>
  );
};

export default ScrollDownArrow;
