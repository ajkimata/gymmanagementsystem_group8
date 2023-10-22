import React from "react";
import "./styles/classes.css";

function Classes() {
  return (
    <div className="page">
      <div className="register">
        <h1>REGISTER FOR A CLASS TODAY</h1>
      </div>
      <div className="classes-container">
        <div className="class-card">
          <div className="image-wrapper">
            <img src="/Assets/beginner.jpg" alt="Beginner Class Photo" />
            <div className="level-text">BEGINNER</div>
          </div>
          <p>
            Explore our beginner-friendly classes perfect for those new to
            fitness.
          </p>
          <button>Enroll Now</button>
        </div>
        <div className="class-card">
          <div className="image-wrapper">
            <img
              src="/Assets/intermediate.jpg"
              alt="Intermediate Class Photo"
            />
            <div className="level-text">INTERMEDIATE</div>
          </div>
          <p>
            Achieve your fitness goals by establishing a tailored fitness
            routine.
          </p>
          <button>Enroll Now</button>
        </div>
        <div className="class-card">
          <div className="image-wrapper">
            <img src="/Assets/advanced.jpg" alt="Advanced Class Photo" />
            <div className="level-text">ADVANCED</div>
          </div>
          <p>
            Join our advanced gym class designed for seasoned fitness
            enthusiasts.
          </p>
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default Classes;
