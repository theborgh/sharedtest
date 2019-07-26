import React from "react";
import "./LandingPage.scss";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const LandingPage = ({scrollDownArrow}) => (
  <div>
    Landing page
    {
      scrollDownArrow ? 
        <ScrollDownArrow /> : null
    }
  </div>
)

export default LandingPage;