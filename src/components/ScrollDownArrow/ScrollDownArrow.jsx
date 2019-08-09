import React from "react";
import "./ScrollDownArrow.scss";
import PropTypes from "prop-types";
import { ReactComponent as ArrowDown } from "../../assets/arrowdown.svg";

const ScrollDownArrow = ({ target, fadeIn }) => {
  ScrollDownArrow.propTypes = {
    target: PropTypes.string.isRequired,
    fadeIn: PropTypes.bool
  };

  ScrollDownArrow.defaultProps = {
    fadeIn: false
  };

  const classes = fadeIn ? "ScrollDownArrow fadeIn" : "ScrollDownArrow";

  return (
    <div className={classes}>
      <a href={`#${target}`}>
        <ArrowDown />
      </a>
    </div>
  );
};

export default ScrollDownArrow;
