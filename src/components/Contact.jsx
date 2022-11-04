import React from "react";

function Contact() {
  const name = "Wasiu Adelakun";

  return (
    <>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form id="form">
          <div className="names-container">
            <div className="form-container names">
              <label htmlFor="first_name" className="form-label">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                className="form-input"
              />
              <small className="error">Error Message</small>
            </div>

            <div className="form-container names">
              <label htmlFor="last_name" className="form-label">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                className="form-input"
              />
              <small className="error">Error Message</small>
            </div>
          </div>

          <div className="form-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              className="form-input"
            />
            <small className="error">Error Message</small>
          </div>

          <div className="form-container">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              rows="10"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
            <small className="error">Error Message</small>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="agree"
              value="agree"
              id="agree-input"
            />
            <label htmlFor="agree" id="agree">
              You agree to providing your data to {name} who may contact you.
            </label>
          </div>

          <div>
            <button type="btn" id="btn__submit">
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
