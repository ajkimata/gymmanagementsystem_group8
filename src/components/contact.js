import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xdorbpqo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Success! Thank you for reaching out.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmissionStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("Oops! Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        onSubmit={handleSubmit}
      >
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required
            onChange={handleChange}
            value={formData.name}
            aria-label="Full Name"
          />
          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            name="email"
            id="email-address"
            placeholder="email@domain.tld"
            required
            onChange={handleChange}
            value={formData.email}
            aria-label="Email Address"
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="Enter your message here..."
            required
            onChange={handleChange}
            value={formData.message}
            aria-label="Message"
          />
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input type="submit" value="Submit" disabled={isSubmitting} />
      </form>
      {submissionStatus && <p>{submissionStatus}</p>}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </div>
  );
};

const styles = `
  /* Reset styles for form elements */
  #fs-frm input, #fs-frm select, #fs-frm textarea, #fs-frm fieldset, #fs-frm optgroup, #fs-frm label {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    border: none;
  }

  /* Style the form container */
  div {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #080808;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }

  /* Style the form elements */
  #fs-frm label {
    display: block;
    margin-bottom: 10px;
    color: #333;
  }

  #fs-frm input, #fs-frm textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  #fs-frm input:focus, #fs-frm textarea:focus {
    border-color: #007BFF;
    outline: none;
  }

  #fs-frm textarea {
    resize: vertical;
  }

  #fs-frm input[type="submit"] {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  #fs-frm input[type="submit"]:hover {
    background-color: #0056b3;
  }

  #fs-frm input[type="submit"]:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  /* Style for submission status message */
  p {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export default Contact;
