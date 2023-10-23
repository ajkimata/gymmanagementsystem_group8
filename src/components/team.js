import React from "react";
import "./styles/team.css";

const trainers = [
  { name: "CYNTHIA", imgSrc: "/Assets/Login.jpeg", alt: "Cynthia" },
  { name: "ALEX", imgSrc: "/Assets/beginner.jpg", alt: "Alex" },
  { name: "ALFRED", imgSrc: "/Assets/advanced.jpg", alt: "Alfred" },
  { name: "MOFFAT", imgSrc: "/Assets/Register.jpeg", alt: "Moffat" },
];

const Team = () => {
  return (
    <div className="team-background">
      <h1 className="team-title">MEET THE TEAM</h1>
      <div className="trainers-container">
        {trainers.slice(0, 3).map((trainer, index) => (
          <div key={index} className="trainer-card">
            <img
              className="trainer-image"
              src={trainer.imgSrc}
              alt={trainer.alt}
            />
            <div className="trainer-name">{trainer.name}</div>
          </div>
        ))}
      </div>
      <div className="trainers-bottom">
        <div className="trainer-card moffat-card">
          <img
            className="trainer-image"
            src={trainers[3].imgSrc}
            alt={trainers[3].alt}
          />
          <div className="trainer-name">{trainers[3].name}</div>
        </div>
        <button className="browse-all-button">Browse All Trainers</button>
      </div>
    </div>
  );
};

export default Team;
