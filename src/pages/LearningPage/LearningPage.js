import React from "react";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const LearningPage = ({scrollDownArrow}) => (
  <div>
    Learning page
    {
      scrollDownArrow ? 
        <ScrollDownArrow /> : null
    }
  </div>
)

export default LearningPage;