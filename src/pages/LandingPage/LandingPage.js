import React from "react";
import "./LandingPage.scss";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const LandingPage = ({scrollDownArrow}) => (
  <div className="LandingPage">
    <h1>Dario Borghino</h1>
    <h2>Front-end Developer</h2>
    <ul className="social">
      <li>Github</li>
      <li>LinkedIn</li>
    </ul>
    {
      scrollDownArrow ? 
        <div className="arrow"><ScrollDownArrow /></div> : null
    }
  </div>
)

export default LandingPage;