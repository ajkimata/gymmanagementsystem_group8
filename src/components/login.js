import React, { useState } from "react";
import "./styles/login.css"; // Assuming you'll store the CSS in a file named Login.css

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome</h1>
        <p>We are glad you are working out with us</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={loginData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <button className="login-btn">NEXT</button>
        <div className="login-others">Login with Others</div>
        <div className="social-buttons">
          <button className="google-btn">G</button>
          <button className="facebook-btn">F</button>
        </div>
        <div className="register-prompt">
          Don't have an account?{" "}
          <button className="link-style-button">Register Now</button>
        </div>
      </div>
      <div className="login-right">
        {/* You can use background image style like in the Register component */}
      </div>
    </div>
  );
};

export default Login;
