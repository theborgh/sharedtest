import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form className="contactform" name="contact-form" method="post" netlify>
      <div className="contactform-input">
        <label htmlFor="name">
          <span className="contactform-labeltext">Your name</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
          />
        </label>
      </div>

      <div className="contactform-input">
        <label htmlFor="email">
          <span className="contactform-labeltext">Your email</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            required
          />
        </label>
      </div>

      <div className="contactform-input">
        <textarea
          name="message"
          id="message"
          cols="80"
          rows="20"
          placeholder="Your message here"
          required
        />
      </div>

      <button className="submit-button" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
