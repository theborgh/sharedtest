import React from "react";
import "./AboutPage.scss";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const AboutPage = ({ scrollDownArrow }) => (
  <div>
    About page
    {
      scrollDownArrow ? 
        <ScrollDownArrow /> : null
    }
  </div>
)

export default AboutPage;