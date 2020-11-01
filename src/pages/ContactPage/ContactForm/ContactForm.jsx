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
    <div>
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
            required
          />
        </div>

        <div className="submit-container">
          <button className="submit-button" type="submit">
            Send
          </button>
          {emailSent && <div className="email-success">Email sent!</div>}

          {emailError && (
            <div className="email-error">Email could not be sent</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
