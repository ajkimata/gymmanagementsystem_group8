import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/contact.css";
function Contact() {
  return (
    <div className="contact-page">
      <div className="top-section">
        <div className="content">
          <h1 className="headline">Stay up to date with our story</h1>
          <div className="email-form">
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email address"
            />
            <button className="join-button">Join now</button>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="footer-links">
          <div className="menu-section">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Trainers</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="classes-section">
            <h3>Class</h3>
            <ul>
              <li>
                <a href="#">Individual</a>
              </li>
              <li>
                <a href="#">Corporate</a>
              </li>
              <li>
                <a href="#">Monthly</a>
              </li>
            </ul>
          </div>
          <div className="about-section">
            <h3>About us</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">QnA</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <p className="copyright">&copy; 2023 Design. All rights reserved</p>
      </div>
    </div>
  );
}

export default Contact;
