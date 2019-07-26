import React from 'react';
import './App.css';
import Navbar from './pages/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import LearningPage from './pages/LearningPage/LearningPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage scrollDownArrow />
      <AboutPage scrollDownArrow />
      <SkillsPage scrollDownArrow />
      <LearningPage scrollDownArrow />
      <ProjectsPage scrollDownArrow={false} />

    </div>
  );
}

export default App;
