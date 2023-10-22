import React from "react";
import "./styles/team.css";

const trainers = [
  { name: "CYNTHIA", imgSrc: "/Assets/advanced.jpg", alt: "trainer-1" },
  { name: "ALEX", imgSrc: "Assets/advanced.jpg", alt: "trainer-2" },
  { name: "ALFRED", imgSrc: "Assets/advanced.jpg", alt: "trainer-3" },
  { name: "MOFFAT", imgSrc: "Assets/advanced.jpg", alt: "trainer-4" },
];

const Team = () => {
  return (
    <div className="background-div">
      <div className="frame-13">
        <div className="header-container">
          <span className="meet-the-team-text">MEET THE TEAM</span>
          <div className="arrow-container">
            <img src="Vector.png" alt="Arrow" className="arrow-image" />
            <img src="Vector.png" alt="Arrow" className="arrow-image" />
            <img src="Vector.png" alt="Arrow" className="arrow-image" />
          </div>
        </div>

        <div className="meet-the-team">
          {trainers.map((trainer, index) => (
            <div key={index} className="rectangle-container">
              <img
                className="trainer-image"
                src={trainer.imgSrc}
                alt={trainer.alt}
              />
              <div className="trainer-button">
                <div className="trainer-name">{trainer.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
