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
        . I also got to interview computer science pioneer&nbsp;
        <a href="https://newatlas.com/laptops-history-35-years/42566/">
          Alan Kay
        </a>
        ,&nbsp;
        <a href="https://newatlas.com/avatar-project-2045/23454/">
          eccentric millionaires
        </a>
        ,{" "}
        <a href="https://newatlas.com/james-webb-space-telescope/36706/">
          Nobel prize winners
        </a>
        , and other&nbsp;
        <a href="https://newatlas.com/fractal-nanotruss-supermaterials/32440/">
          prominent researchers
        </a>
        . This experience has helped me develop outstanding research skills,
        self reliance, attention to detail, the ability to work under tight
        deadlines, and an attitude that values and welcomes criticism (&quot;no
        mistake is too small to mention,&quot; as I often told my editors).
      </p>
      <p>
        As great as that experience was, I have recently redescovered that my
        true passion is for building software, and it&#39;s felt like coming
        home. For the past few months I have been focused exclusively on
        learning frontend web development, with an emphasis on Javascript and
        React.js. I love how React and its excellent ecosystem allow me to
        quickly sketch an idea in a modular, declarative and performant way
        &mdash; and how third-party tools then let me deploy my projects in a
        matter of minutes, across platforms and for the entire world to see.
      </p>
      <p>
        I am eager to learn more about web development every day, whether
        it&#39;s technologies like React.js, TypeScript, SCSS, testing
        libraries, or more general considerations on performance, accessibility
        and maintainability. When I&#39;m not coding and practising on my
        projects, I listen to webdev-related podcasts and contribute Italian{" "}
        <a href="https://developer.mozilla.org/it/profiles/theborgh">
          translations
        </a>{" "}
        to the MDN Web Docs. I&#39;m currently looking for large open-source
        projects that I can contribute to in order to practice working on large,
        unfamiliar codebases.
      </p>
      <p>
        Although my professional programming experience may be limited, I
        believe that my educational background means I am able to pick up new
        concepts very quickly, with an emphasis on understanding how things work
        under the hood.
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
