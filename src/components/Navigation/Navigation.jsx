import React from "react";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        MENU
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#top" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#skills" className="navigation__link">
              Skills
            </a>
          </li>
          <li className="navigation__item">
            <a href="#projects" className="navigation__link">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
