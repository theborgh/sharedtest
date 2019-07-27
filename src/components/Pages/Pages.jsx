import React from 'react';
import './Pages.scss';

import LandingPage from '../../pages/LandingPage/LandingPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import SkillsPage from '../../pages/SkillsPage/SkillsPage';
import LearningPage from '../../pages/LearningPage/LearningPage';

const Pages = () => (
  <div className="Pages">
    <LandingPage scrollDownArrow />
    <AboutPage scrollDownArrow />
    <SkillsPage scrollDownArrow />
    <LearningPage scrollDownArrow />
    <ProjectsPage scrollDownArrow={false} />
  </div>
);

export default Pages;
