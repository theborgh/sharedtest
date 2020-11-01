import React from "react";
import "./ContactPage.scss";
import PropTypes from "prop-types";
import ScrollDownArrow from "../../components/ScrollDownArrow/ScrollDownArrow";
import ContactForm from "./ContactForm/ContactForm";

const ContactPage = ({ scrollDownArrow, scrollDownTarget }) => {
  ContactPage.propTypes = {
    scrollDownArrow: PropTypes.bool.isRequired,
    scrollDownTarget: PropTypes.string.isRequired
  };

  return (
    <div id="contact" className="ContactPage">
      <h1>Contact</h1>

      <p>
        Feel free to contact me with the form below. I typically reply within 24
        hours.
      </p>

      <ContactForm />

      {scrollDownArrow ? (
        <div className="arrow">
          <ScrollDownArrow target={scrollDownTarget} />
        </div>
      ) : null}
    </div>
  );
};

export default ContactPage;
