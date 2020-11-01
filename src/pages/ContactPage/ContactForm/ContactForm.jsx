import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleFormSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-form",
        name,
        email,
        message
      })
    })
      .then(response => {
        if (response.status === 200) {
          setEmailSent(true);
        } else {
          setEmailError(true);
        }
      })
      .catch(() => setEmailError(true));

    e.preventDefault();
  };

  return (
    <form
      className="contactform"
      name="contact-form"
      onSubmit={handleFormSubmit}
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <div className="contactform-input">
        <label htmlFor="name">
          <span className="contactform-labeltext">Your name</span>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="John Doe"
            disabled={emailSent || emailError}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={emailSent || emailError}
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
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Your message here"
          disabled={emailSent || emailError}
          required
        />
      </div>

      <div className="submit-container">
        <button
          className="submit-button"
          type="submit"
          disabled={emailSent || emailError}
        >
          Send
        </button>
        {emailSent && (
          <div className="email-success">
            Email sent! Thank you for contacting me.
          </div>
        )}

        {/* TODO: notify me when someone gets something other than 200 status response */}
        {emailError && (
          <div className="email-error">
            Unfortunately there was a network error and your message could not
            be sent.
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
