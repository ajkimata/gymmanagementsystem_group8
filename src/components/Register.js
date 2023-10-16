import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="register">
      <div className="form">
        <div className="div">
          <div className="remember-me">
            <div className="frame" />
            <div className="text-wrapper">Remember me</div>
          </div>
          <div className="textfields">
            <div className="username">
              <div className="group">
                <div className="text-wrapper-2">Username</div>
              </div>
              <img
                className="bx-user"
                alt="Bx user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU"
              />
            </div>
            <div className="email">
              <div className="group-2"></div>
              <img
                className="mdi-light-email"
                alt="Mdi light email"
                src="https://e7.pngegg.com/pngimages/300/204/png-clipart-computer-icons-email-email-miscellaneous-angle.png"
              />
              <div className="text-wrapper-3">  Email</div>
            </div>
            <div className="password">
              <img
                className="circum-lock"
                alt="Circum lock"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s"
              />
              <div className="text-wrapper-3">Password</div>
            </div>
          </div>
          <button className="button">
            <div className="overlap-group">
              <div className="text-wrapper-4">Register</div>
            </div>
          </button>
          <Link to="/login">
            <p className="already-have-an">
              <span className="span">Already have an account? </span>
              <span className="text-wrapper-5">Login</span>
            </p>
          </Link>
        </div>
      </div>
      <img
        className="rectangle"
        alt="Rectangle"
        src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      />
      <div className="heading">
        <p className="p">Please Sign Up for an awesome experience</p>
      </div>
      <div className="text-wrapper-8">WELCOME TO POWERHOUSE GYM</div>
      <p className="powerhouse">
        <span className="text-wrapper-9">P</span>
        <span className="text-wrapper-10">owerhouse</span>
      </p>
    </div>
  );
};


