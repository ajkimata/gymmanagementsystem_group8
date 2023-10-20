import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./styles/login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    identifier: "", // This can be either username or email
    password: "",
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/users/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: loginData.identifier, // Sending as email
            username: loginData.identifier, // Sending as username
            password: loginData.password,
          },
        }),
      });

      const data = await response.json();

      if (data.status.code === 200) {
        // Handle successful login
        localStorage.setItem("token", data.status.data.token);
        console.log("Logged in successfully!");

        // Navigate based on role
        if (
          data.status.data.user.role_type === "Admin" ||
          data.status.data.user.role_type === "Trainer"
        ) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        // Handle unsuccessful login
        console.error("Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome</h1>
        <p>We are glad you are working out with us</p>
        <input
          type="text"
          placeholder="Username or Email"
          name="identifier"
          value={loginData.identifier}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <button className="login-btn" onClick={handleLogin}>
          NEXT
        </button>
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
        {/* Background image or other content */}
      </div>
    </div>
  );
};

export default Login;
