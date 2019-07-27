import React from 'react';
import './Pages.scss';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import SkillsPage from '../../pages/SkillsPage/SkillsPage';
import LearningPage from '../../pages/LearningPage/LearningPage';

const Pages = () => {
  const PageMap = [
    HomePage, AboutPage, SkillsPage, LearningPage, ProjectsPage,
  ];

  const nextPageName = (Page) => {
    switch (Page) {
      case HomePage:
        return 'about';
      case AboutPage:
        return 'skills';
      case SkillsPage:
        return 'learning';
      case LearningPage:
        return 'projects';
      default:
        return '';
    }
  };

  return (
    <div className="Pages">
      {
        PageMap.map(Page => (
          <Page
            scrollDownArrow={Page !== ProjectsPage}
            target={nextPageName(Page)}
          />
        ))
      }
    </div>
  );
};

export default Pages;
