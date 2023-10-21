
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
            <img src="image4.png" alt="Class photo 1" />
            <span className="beginner-text">BEGINNER</span>
          </div>
          <p>Explore our beginner-friendly classes perfect for those new to fitness.</p>
          <button>Enroll</button>
        </div>
        <div className="class-card">
          <div className="image-wrapper">
            <img src="image3.png" alt="Class photo 2" />
            <span className="beginner-text">BEGINNER</span>
          </div>
          <p>Explore our beginner-friendly classes perfect for those new to fitness.</p>
          <button>Enroll</button>
        </div>
        <div className="class-card">
          <div className="image-wrapper">
            <img src="image1.png" alt="Class photo 3" />
            <span className="beginner-text">BEGINNER</span>
          </div>
          <p>Explore our beginner-friendly classes perfect for those new to fitness.</p>
          <button>Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default Classes;
