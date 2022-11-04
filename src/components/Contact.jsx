import React, { useEffect, useState } from "react";

function Contact() {
  const my_name = "Wasiu Adelakun";
  const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [error, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValue));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (values.first_name === "") {
      errors.first_name = "First name cannot be empty";
    } else if (values.first_name < 1) {
      errors.first_name = "First name should be more than one digit";
    }

    if (values.last_name === "") {
      errors.last_name = "Last name cannot be empty";
    } else if (values.last_name < 1) {
      errors.last_name = "Last name should be more than one digit";
    }

    if (values.email === "") {
      errors.email = "Email cannot be empty";
    } else if (values.email === regex_email) {
      errors.email = "This is not a valid email";
    }

    if (values.message === "") {
      errors.message = "Please enter a message";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(error);
    }
  });

  return (
    <>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form
          action="https://formspree.io/f/xeqvdwpz"
          method="POST"
          id="form"
          onSubmit={handleSubmit}
        >
          <div className="names-container">
            <div className="form-container names">
              <label htmlFor="first_name" className="form-label">
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
                className="form-input"
                value={formValue.first_name}
                onChange={handleChange}
              />
              {error && <small className="error">{error.first_name}</small>}
            </div>

            <div className="form-container names">
              <label htmlFor="last_name" className="form-label">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter your last name"
                className="form-input"
                value={formValue.last_name}
                onChange={handleChange}
              />
              {error && <small className="error">{error.last_name}</small>}
            </div>
          </div>

          <div className="form-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourname@email.com"
              className="form-input"
              value={formValue.email}
              onChange={handleChange}
            />
            {error && <small className="error">{error.email}</small>}
          </div>

          <div className="form-container">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              rows="10"
              id="message"
              name="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              value={formValue.message}
              onChange={handleChange}
            />
            {error && <small className="error">{error.message}</small>}
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="agree"
              value="agree"
              id="agree-input"
              onChange={handleChange}
            />
            <label htmlFor="agree" id="agree">
              You agree to providing your data to {my_name} who may contact you.
            </label>
          </div>

          <div>
            <button type="submit" id="btn__submit">
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
