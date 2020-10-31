import React from "react";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import SkillsPage from "../../pages/SkillsPage/SkillsPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import ContactPage from "../../pages/ContactPage/ContactPage";

const Pages = () => {
  const PageMap = [HomePage, AboutPage, SkillsPage, ProjectsPage, ContactPage];

  const nextPageName = Page => {
    switch (Page) {
      case HomePage:
        return "about";
      case AboutPage:
        return "skills";
      case SkillsPage:
        return "projects";
      case ProjectsPage:
        return "contact";
      default:
        return "";
    }
  };

  return (
    <div className="Pages">
      {PageMap.map(Page => (
        <Page
          key={Page}
          scrollDownArrow={Page !== ContactPage}
          scrollDownTarget={nextPageName(Page)}
        />
      ))}
    </div>
  );
};

export default Pages;
