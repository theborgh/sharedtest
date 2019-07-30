/* eslint-disable max-len */
import React from 'react';
import './AboutPage.scss';
import PropTypes from 'prop-types';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';

const AboutPage = ({ scrollDownArrow, target }) => {
  AboutPage.propTypes = {
    scrollDownArrow: PropTypes.bool.isRequired,
    target: PropTypes.string.isRequired,
  };

  return (
    <div id="about" className="AboutPage">
      <h1>About me</h1>
      <p>I studied software engineering at the Polytechnic University of Turin, Italy and worked as a science and technology journalist for many online publications including Australia-based Gizmag.com (now New Atlas).</p>
      <p>As a sci/tech journalist I covered topics spanning from advancements in transistor technology to quantum computing, clean tech, and space news. I also got to interview a range of people from Alan Kay to Nobel Prize winners and eccentric millionaires. The experience taught me attention to details, welcoming criticism, working on a tight deadline, and being part of a team.</p>
      <p>In recent times I have redescovered my true passion for building software. For the past few months I have been focused exclusively on learning frontend web development. I love how React and its excellent ecosystem allows me to quickly sketch an idea in a modular, declarative and performant way, and then show it to the world in a very short time. I am very passionate about them and eager to learn more every single day, whether it&#39;s React, Saga, TDD, Docker, TypeScript, performance, accessibility, the AirBnb style guide, or elements of design.</p>
      <p>When I&#39;m not coding and practising on my projects, I listen to podcasts like Software Engineering Daily, React Roundup, JS Jabber.</p>
      <p>My experience may be limited, but my educational background means I am able to pick up new concepts very quickly, with an emphasis on how things work under the hood.</p>

      {
        scrollDownArrow
          ? <div className="arrow"><ScrollDownArrow target={target} /></div> : null
      }

    </div>
  );
};

export default AboutPage;
