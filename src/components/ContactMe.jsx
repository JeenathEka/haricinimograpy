import React, { useState } from "react";
import "../assets/ContactMe.css";

export default function ContactMe({ innerRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      // Here you would handle form submission (e.g., send to API or email service)
      // Reset form or keep as is:
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  return (
   
    <section className="contact-section" id="contact" ref={innerRef} >
        
      <div className="contact-container">
        <h2>Contact Me</h2>
        {submitted && (
          <div className="success-message">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">
            Name <span aria-hidden="true">*</span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
              required
              placeholder="Your full name"
            />
            {errors.name && (
              <span className="error-msg" id="name-error">
                {errors.name}
              </span>
            )}
          </label>

          <label htmlFor="email">
            Email <span aria-hidden="true">*</span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
              required
              placeholder="you@example.com"
            />
            {errors.email && (
              <span className="error-msg" id="email-error">
                {errors.email}
              </span>
            )}
          </label>

          <label htmlFor="message">
            Message <span aria-hidden="true">*</span>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
              required
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && (
              <span className="error-msg" id="message-error">
                {errors.message}
              </span>
            )}
          </label>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
