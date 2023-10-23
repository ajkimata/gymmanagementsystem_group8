import React from "react";
import "./styles/about.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="header">POWERHOUSE</header>
      <div className="offerings">
        {renderOffering(
          "/Assets/beginner.jpg",
          "STAY FIT",
          "Join our fitness classes tailored for overall wellness that helps maintain a healthy lifestyle."
        )}
        {renderOffering(
          "/Assets/intermediate.jpg",
          "SHED POUNDS",
          "We offer specialized training to help burn calories, improve endurance, and reach your weight loss targets."
        )}
        {renderOffering(
          "/Assets/advanced.jpg",
          "BUILD MUSCLES",
          "Discover a variety of weightlifting routines and training techniques to achieve your bodybuilding goals."
        )}
      </div>
    </div>
  );
};

const renderOffering = (imgSrc, title, description) => (
  <div className="offering">
    <img className="offering-image" src={imgSrc} alt={title} />
    <div className="offering-description">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default AboutUs;
