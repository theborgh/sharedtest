import React from "react";
import "./SkillsPage.scss";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const SkillsPage = ({scrollDownArrow}) => (
  <div className="SkillsPage">
    Skills page
    {
      scrollDownArrow ? 
      <div className="arrow"><ScrollDownArrow /></div> : null
    }
  </div>
)

export default SkillsPage;