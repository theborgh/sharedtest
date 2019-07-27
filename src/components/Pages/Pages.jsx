import React from 'react';
import './Pages.scss';

import LandingPage from '../../pages/LandingPage/LandingPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import SkillsPage from '../../pages/SkillsPage/SkillsPage';
import LearningPage from '../../pages/LearningPage/LearningPage';

const Pages = () => (
  <div className="Pages">
    <LandingPage scrollDownArrow target="about" />
    <AboutPage scrollDownArrow target="skills" />
    <SkillsPage scrollDownArrow target="learning" />
    <LearningPage scrollDownArrow target="projects" />
    <ProjectsPage scrollDownArrow={false} />
  </div>
);

export default Pages;
