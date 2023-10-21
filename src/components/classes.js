
import React from "react";
import './classes.css'
//import { Link } from "react-router-dom";

function Classes()  {
  return (
    <div className="page">
      <div className="register">
        <p>REGISTER FOR A CLASS TODAY</p>
      </div>
      <div className="classes-container">
        <div className="class-card">
          <div className="image-wrapper">
            <img src="image-4.png" alt="Class photo 1" />
            <span className="beginner-text">BEGINNER</span>
          </div>
          <p><span className="span">Explore</span> our beginner-friendly classes perfect for those new to fitness.</p>
          <button>Enroll Now</button>
        </div>
        <div className="class-card">
          <div className="image-wrapper">
            <img src="image-3.png" alt="Class photo 2" />
            <span className="beginner-text">INTERMEDIATE</span>
          </div>
          <p><span className="span">Achieve</span> your fitness goals by establishing a tailored fitness routine</p>
          <button>Enroll Now</button>
        </div>
        <div className="class-card">
          <div className="image-wrapper">
            <img src="image-1.png" alt="Class photo 3" />
            <span className="beginner-text">ADVANCED</span>
          </div>
          <p><span className="span">Join</span> our advanced gym class designed for seasoned fitness ethusiats</p>
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Classes;
