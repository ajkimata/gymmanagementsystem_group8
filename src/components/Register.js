
import React, { useState } from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterForm = styled.div`

`;

const InputContainer = styled.div`
display: flex;
align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 11px;
  text-align: center; 
  line-height: 1.6; 
`;

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <RegisterForm className="register">
      <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="div">
          <div className="remember-me">
            <div className="frame" />
            <div className="text-wrapper">Remember me</div>
          </div>
          <div className="textfields">
            <div className="username">
              
                <InputContainer>
                  <StyledInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </InputContainer>
          
              <img
                className="bx-user"
                alt="Bx user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU"
              />
            </div>
            <div className="email">
              
                <InputContainer>
                  <StyledInput
                   type="email"
                    id="email"
                   name="email"
                   placeholder="Email"
                   value={formData.email}
                   onChange={handleChange}
                  />
                </InputContainer>
           
              <img
                className="mdi-light-email"
                alt="Mdi light email"
                src="https://e7.pngegg.com/pngimages/300/204/png-clipart-computer-icons-email-email-miscellaneous-angle.png"
              />
            </div>
            <div className="password">
              <InputContainer>
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputContainer>
              <img
                className="circum-lock"
                alt="Circum lock"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s"
              />
            </div>
          </div>
          <button className="button" type="submit" onClick={handleSubmit}>
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
      </form>
    </RegisterForm>
  );
};

