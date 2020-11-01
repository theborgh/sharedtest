import React from "react";
import "./Navigation.scss";

const closeNav = () => {
  document.getElementById("navi-toggle").checked = false;
};

export default function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#top" className="navigation__link" onClick={closeNav}>
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#about" className="navigation__link" onClick={closeNav}>
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#skills" className="navigation__link" onClick={closeNav}>
              Skills
            </a>
          </li>
          <li className="navigation__item">
            <a href="#projects" className="navigation__link" onClick={closeNav}>
              Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="#contact" className="navigation__link" onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
