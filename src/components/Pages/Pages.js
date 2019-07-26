import React from "react";
import "./Pages.scss";

import LandingPage from "../../pages/LandingPage/LandingPage";
import AboutPage from '../../pages/AboutPage/AboutPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import SkillsPage from '../../pages/SkillsPage/SkillsPage';
import LearningPage from '../../pages/LearningPage/LearningPage';

const Pages = () => (
  <div className="Pages">
      <div className="Page"><LandingPage scrollDownArrow /></div>
      <div className="Page"><AboutPage scrollDownArrow /></div>
      <div className="Page"><SkillsPage scrollDownArrow /></div>
      <div className="Page"><LearningPage scrollDownArrow /></div>
      <div className="Page"><ProjectsPage scrollDownArrow={false} /></div>
  </div>
)

export default Pages;