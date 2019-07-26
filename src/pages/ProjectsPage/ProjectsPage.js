import React from "react";
import "./ProjectsPage.scss";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const ProjectsPage = ({ scrollDownArrow }) => (
  <div>
    Projects page
    {
      scrollDownArrow ? 
        <ScrollDownArrow /> : null
    }
  </div>
)

export default ProjectsPage;