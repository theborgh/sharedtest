import React from "react";
import "./HomePage.scss";
import PropTypes from "prop-types";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import { ReactComponent as GithubLogo } from "../../assets/githubLogo.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/linkedinLogo.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitterLogo.svg";
import { ReactComponent as MediumLogo } from "../../assets/mediumLogo.svg";

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
      <ul className="social">
        <li>
          <a href="https://github.com/theborgh">
            <GithubLogo />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/the_borgh">
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@the_borgh_88758">
            <MediumLogo />
          </a>
        </li>
      </ul>
      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow target={scrollDownTarget} fadeIn />
        </div>
      ) : null}
    </div>
  );
};

export default LandingPage;
