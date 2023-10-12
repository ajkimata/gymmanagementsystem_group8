import React from "react";
import "./styles/style.css";
import styled from "styled-components";
import { Link } from "react-router-dom"; 

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NextLink = styled.a`
  color: black; 
  text-decoration: none; 
  font-weight: 700;
  font-family: "Smooch Sans-Bold", Helvetica;
  display: inline-block; 
  text-align: center; 
  width: 100%;
`;

const RegisterLink = styled.a`
  color: black; 
  text-decoration: none; 
`;

const Login = () => {
  return (
    <div className="user-login-page">
      <img
        className="rectangle"
        alt="Rectangle"
        src="https://images.pexels.com/photos/4720309/pexels-photo-4720309.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <div className="overlap">
        <div className="frame">
          <div className="group">
            <div className="text-wrapper">Welcome</div>
            <p className="div">We are glad you are working out with us</p>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <p className="login-with-others">
                <span className="span">Login</span>
                <span className="text-wrapper-2"> with Others</span>
              </p>
              <img className="subtract" alt="Subtract" src="subtract.svg" />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-3">Password</div>
              <img className="img" alt="Frame" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHZ-yIurzqBWnkQMLgjbFUZpO2pLfE42hC_poX74&s" />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-3">Username</div>
              <img className="img" alt="Frame" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpAnV7Eqy1ajdV__BGRrAU9KkCa3aJGDly4funAkQzosa99R5KIOe4oFG4e_H3cNfgFw&usqp=CAU" />
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-3">
              <LinkContainer>
                <NextLink href="/next">NEXT</NextLink>
              </LinkContainer>
            </div>
          </div>
          <div className="group-3">
            <p className="don-t-have-account">
              <span className="text-wrapper-5">Don’t have an account? </span>
              <span className="text-wrapper-6">
                <RegisterLink href="/register">Register Now</RegisterLink>
              </span>
            </p>
            <div className="google-g-logo-wrapper">
              <img
                className="google-g-logo"
                alt="Google g logo"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              />
            </div>
            <div className="XMLID-wrapper">
              <img
                className="XMLID"
                alt="Xmlid"
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png"
              />
            </div>
          </div>
        </div>
        <p className="powerhouse">
          <span className="text-wrapper-7">P</span>
          <span className="text-wrapper-8">owerhouse</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

