import React from "react";
import "./HomePage.scss";
import PropTypes from "prop-types";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import { ReactComponent as GithubLogo } from "../../assets/logos/github.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/logos/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../assets/logos/twitter.svg";
import { ReactComponent as MDNLogo } from "../../assets/logos/mdn.svg";

const LandingPage = ({ scrollDownArrow, scrollDownTarget }) => {
  LandingPage.propTypes = {
    scrollDownArrow: PropTypes.bool,
    scrollDownTarget: PropTypes.string.isRequired
  };

  LandingPage.defaultProps = {
    scrollDownArrow: false
  };

  return (
    <div id="home" className="LandingPage">
      <h1 className="name">Dario Borghino</h1>
      <h2 className="title">Front-end Developer</h2>

      <div className="social">
        <div className="social-logo">
          <a
            href="https://github.com/theborgh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo />
          </a>
        </div>
        <div className="social-logo">
          <a
            href="https://www.linkedin.com/in/darioborghino/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo />
          </a>
        </div>
        <div className="social-logo">
          <a
            href="https://twitter.com/DarioBorghino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo />
          </a>
        </div>
        <div className="social-logo">
          <a
            href="https://wiki.developer.mozilla.org/en-US/profiles/theborgh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDNLogo />
          </a>
        </div>
      </div>

      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow target={scrollDownTarget} fadeIn />
        </div>
      ) : null}
    </div>
  );
};

export default LandingPage;
