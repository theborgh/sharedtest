import React from "react";
import "./AboutPage.scss";
import PropTypes from "prop-types";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";

const AboutPage = ({ scrollDownArrow, scrollDownTarget }) => {
  AboutPage.propTypes = {
    scrollDownArrow: PropTypes.bool.isRequired,
    scrollDownTarget: PropTypes.string.isRequired
  };

  return (
    <div id="about" className="AboutPage">
      <h1>About me</h1>
      <p>
        I studied software engineering at the Polytechnic University of Turin,
        Italy and worked as a science and technology journalist for several
        online publications including Australia-based Gizmag.com (now New
        Atlas).
      </p>
      <p>
        In that capacity, I covered a wide range of topics including
        advancements in{" "}
        <a href="https://newatlas.com/optical-transistor-quantum-computing/28203/">
          transistor technology
        </a>
        , &nbsp;
        <a href="https://newatlas.com/driverless-car-ethics/43926/">
          autonomous cars
        </a>
        ,&nbsp;
        <a href="https://newatlas.com/silicon-quantum-computer/39711/">
          quantum computing
        </a>
        ,&nbsp;
        <a href="https://newatlas.com/wasp-big-delta-3d-printer-clay-housing/39414/">
          3D printing
        </a>
        ,&nbsp;
        <a href="https://newatlas.com/bumblebee-flight-path-navigation/24258/">
          computer science
        </a>
        , as well as&nbsp;
        <a href="https://newatlas.com/mars-one-human-settlement-2023/22799/">
          space news
        </a>
        . I also got to interview computer science pioneer&nbsp;
        <a href="https://newatlas.com/laptops-history-35-years/42566/">
          Alan Kay
        </a>
        &nbsp; and&nbsp;
        <a href="https://newatlas.com/james-webb-space-telescope/36706/">
          Nobel prize winners
        </a>
        . This experience has helped me develop outstanding research skills,
        self reliance, attention to detail, the ability to work under tight
        deadlines, and a general attitude that values and welcomes criticism.
      </p>
      <p>
        I have recently redescovered that my true passion is for building
        software. For the past few months I have been focused exclusively on
        learning frontend web development, with an emphasis on Javascript and
        React.js. I love how React and its excellent ecosystem allow me to
        quickly sketch an idea in a modular, declarative and performant way
        &mdash; and how third-party tools then let me deploy my projects in a
        matter of minutes, across platforms and for the entire world to see.
      </p>
      <p>
        My professional programming experience may be limited, but I believe
        that my educational background means I am able to pick up new concepts
        very quickly, with an emphasis on understanding how things work under
        the hood.
      </p>

      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow target={scrollDownTarget} />
        </div>
      ) : null}
    </div>
  );
};

export default AboutPage;
