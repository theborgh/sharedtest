import React from "react";
import "./ProjectsPage.scss";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const ProjectsPage = ({ scrollDownArrow }) => (
  <div className="ProjectsPage">
    Projects page
    {
      scrollDownArrow ? 
      <div className="arrow"><ScrollDownArrow /></div> : null
    }
  </div>
)

export default ProjectsPage;