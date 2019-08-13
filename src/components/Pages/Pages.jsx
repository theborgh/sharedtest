import React from "react";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import SkillsPage from "../../pages/SkillsPage/SkillsPage";
import LearningPage from "../../pages/LearningPage/LearningPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";

const Pages = () => {
  const PageMap = [HomePage, AboutPage, SkillsPage, LearningPage, ProjectsPage];

  const nextPageName = Page => {
    switch (Page) {
      case HomePage:
        return "about";
      case AboutPage:
        return "skills";
      case SkillsPage:
        return "learning";
      case LearningPage:
        return "projects";
      default:
        return "";
    }
  };

  return (
    <div className="Pages">
      {PageMap.map(Page => (
        <Page
          key={Page}
          scrollDownArrow={Page !== ProjectsPage}
          scrollDownTarget={nextPageName(Page)}
        />
      ))}
    </div>
  );
};

export default Pages;
