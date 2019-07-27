import React from "react";
import "./AboutPage.scss";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const AboutPage = ({ scrollDownArrow }) => (
  <div className="AboutPage">
    About page
    {
      scrollDownArrow ? 
        <div className="arrow"><ScrollDownArrow /></div> : null
    }

  </div>
)

export default AboutPage;