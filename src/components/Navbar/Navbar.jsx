import React from 'react';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#learning">Learning</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#cv">CV</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
);

export default Navbar;
