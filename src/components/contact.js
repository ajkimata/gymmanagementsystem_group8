import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="top-image">
        <img src='image 6.png' alt='image-1'/>
        <p className="stay-updated">Stay up to date with 
        <br />
        our story</p>
        <div className="email-form">
          
          <input type="email" className="email-input" placeholder="Enter your email"/>
          <button className="join-button">Join Now</button>
        </div>
      </div>
      <div className="bottom-image">
            <img src='image20.png' alt='image-2'/>
            
              <div className='links'>
                <div className="menu-section">
                      <h3>Menu</h3>
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Trainers</a></li>
                        <li><a href="#">Register</a></li>
                      </ul>
                    </div>
                    <div className="classes-section">
                      <h3>Classes</h3>
                      <ul>
                        <li><a href="#">Beginner</a></li>
                        <li><a href="#">Intermediate</a></li>
                        <li><a href="#">Advanced</a></li>
                      </ul>
                    </div>
                    <div className="about-section">
                      <h3>About</h3>
                      <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Schedules</a></li>
                      </ul>
                    </div>
              </div>

              <div className='social-icons' >
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
              <hr/>
              
              <p className="copyright">&copy; 2023</p>
            </div>
        
    </div>
  );
}

export default Contact;
