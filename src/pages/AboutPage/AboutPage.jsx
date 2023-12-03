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
        online publications including Australia-based Gizmag.com (now{" "}
        <a href="http://newatlas.com/" target="_blank" rel="noreferrer">
          New Atlas
        </a>
        ). In that capacity I covered a wide range of topics including
        advancements in{" "}
        <a
          href="https://newatlas.com/optical-transistor-quantum-computing/28203/"
          target="_blank"
          rel="noopener noreferrer"
        >
          transistor technology
        </a>
        , &nbsp;
        <a
          href="https://newatlas.com/driverless-car-ethics/43926/"
          target="_blank"
          rel="noopener noreferrer"
        >
          autonomous cars
        </a>
        ,&nbsp;
        <a
          href="https://newatlas.com/silicon-quantum-computer/39711/"
          target="_blank"
          rel="noopener noreferrer"
        >
          quantum computing
        </a>
        ,&nbsp;
        <a
          href="https://newatlas.com/wasp-big-delta-3d-printer-clay-housing/39414/"
          target="_blank"
          rel="noopener noreferrer"
        >
          3D printing
        </a>
        ,&nbsp;
        <a
          href="https://newatlas.com/bumblebee-flight-path-navigation/24258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          computer science
        </a>
        , as well as&nbsp;
        <a
          href="https://newatlas.com/mars-one-human-settlement-2023/22799/"
          target="_blank"
          rel="noopener noreferrer"
        >
          space news
        </a>
        . I also got to interview computer science pioneer&nbsp;
        <a
          href="https://newatlas.com/laptops-history-35-years/42566/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alan Kay
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://newatlas.com/james-webb-space-telescope/36706/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nobel prize winners
        </a>
        . This experience has helped me develop outstanding research skills,
        self reliance, attention to detail, the ability to work under tight
        deadlines, and a general attitude that values and welcomes criticism
        toward my work.
      </p>
      <p>
        I have professional experience as a frontend developer for a large
        company, both in-office and remotely, working on projects involving
        ReactJS, JavaScript, AngularJS, and some mobile development with
        Ionic/Cordova. In my free time, I have also built several projects
        exploring more recent technologies (NextJS, TypeScript, Prisma, etc)
        both by myself and in collaboration with other developers via{" "}
        <a href="http://chingu.io/" target="_blank" rel="noopener noreferrer">
          Chingu
        </a>
        , a remote developer community.
      </p>

      <p>
        My educational background allows me to pick up new technical concepts
        quickly, with an emphasis on understanding how things work under the
        hood. I am committed to continuing education while striking a balance
        between learning modern practices and not getting lost in the
        ever-evolving world of frontend development.
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
