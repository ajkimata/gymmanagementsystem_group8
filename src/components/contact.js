import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="top-image">
        <img src='image 6.png' alt='image-1'/>
        <p className="stay-updated">Stay up to date with our story</p>
        <div className="email-form">
          <p className="email-label">Enter email address:</p>
          <input type="email" className="email-input" placeholder="Enter your email"/>
          <button className="join-button">Join Now</button>
        </div>
      </div>
      <div className="bottom-image">
        <img src='image20.png' alt='image-2'/>
      </div>
    </div>
  );
}

export default Contact;
