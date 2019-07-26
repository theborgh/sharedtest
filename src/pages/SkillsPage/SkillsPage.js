import React from "react";
import "./SkillsPage.scss";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const SkillsPage = ({scrollDownArrow}) => (
  <div>
    Skills page
    {
      scrollDownArrow ? 
        <ScrollDownArrow /> : null
    }
  </div>
)

export default SkillsPage;