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
      <p>I studied software engineering at the Polytechnic University of Turin, Italy and worked as a science and technology journalist for different online publications including Australia-based Gizmag (now New Atlas).</p>
      <p>I covered anything from advancements in transistor technology to quantum computing, clean tech, telecoms, and got to interview a range of people from Alan Kay to Nobel Prize and eccentric millionaires.</p>
      <p>The experience taught me attention to details, dealing with criticism, working on tight deadlines and being part of a team.</p>
      <p>However, I have recently redescovered my true calling as a software developer. For the past few months, I have been focused entirely on learning frontend technologies, and I am very passionate about them and eager to learn more every single day.</p>
      <p>When I&39;m not coding on my projects, I listen to podcasts like Software Engineering Daily, React Roundup, JS Jabber.</p>
      <p>Although my experience may be limited, my educational background means I am making quick progress and I am motivated to learn how things work under the hood.</p>

      {
        scrollDownArrow
          ? <div className="arrow"><ScrollDownArrow target={target} /></div> : null
      }

    </div>
  );
};

export default AboutPage;
