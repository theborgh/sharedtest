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
        Italy and worked as a science and technology journalist for many online
        publications including Australia-based Gizmag.com (now New Atlas).
      </p>
      <p>
        In that capacity, I covered a wide range of topics including
        advancements in transistor technology, &nbsp;
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
        , and&nbsp;
        <a href="https://newatlas.com/mars-one-human-settlement-2023/22799/">
          space news
        </a>
        . I also got to interview a range of people from computer science
        pioneer&nbsp;
        <a href="https://newatlas.com/laptops-history-35-years/42566/">
          Alan Kay
        </a>{" "}
        to&nbsp;
        <a href="https://newatlas.com/fractal-nanotruss-supermaterials/32440/">
          prominent researchers
        </a>{" "}
        and&nbsp;
        <a href="https://newatlas.com/avatar-project-2045/23454/">
          eccentric millionaires
        </a>
        . The experience taught me to pay attention to detail, welcome
        criticism, work under tight deadlines, and be a valuable part of a team.
      </p>
      <p>
        In recent times I have redescovered my true passion for building
        software. For the past few months I have been focused exclusively on
        learning frontend web development. I love how React and its excellent
        ecosystem allows me to quickly sketch an idea in a modular, declarative
        and performant way, and then show it to the world in a very short time.
      </p>
      <p>
        I am very passionate about frontend and eager to learn more every single
        day, whether it&#39;s React, Saga, TDD, Docker, TypeScript, performance,
        or accessibility. When I&#39;m not coding and practising on my projects,
        I listen to podcasts like Software Engineering Daily, React Roundup, JS
        Jabber. I'm also{" "}
        <a href="https://developer.mozilla.org/it/profiles/theborgh">
          contributing translations
        </a>{" "}
        to the MDN Web Docs.
      </p>
      <p>
        My professional programming experience may be limited, but my
        educational background means I am able to pick up new concepts very
        quickly, with an emphasis on how things work under the hood.
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
