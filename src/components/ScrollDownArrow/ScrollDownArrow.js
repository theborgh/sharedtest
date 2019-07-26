import React from "react";
import "./ScrollDownArrow.scss";
import { ReactComponent as ArrowDown } from "../../assets/arrowdown.svg";

const ScrollDownArrow = () => {
  return (
    <div className="ScrollDownArrow">
      <ArrowDown />
    </div>
  )
}

export default ScrollDownArrow;