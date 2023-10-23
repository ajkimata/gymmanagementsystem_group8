import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Import the useUser hook from UserContext
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome icon component
import { faGoogle } from "@fortawesome/free-brands-svg-icons"; // Import Google icon from FontAwesome
import "./styles/login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser } = useUser(); // Obtain setUser from UserContext

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    console.log("Attempting to login with data:", loginData);

    try {
      const response = await fetch("http://localhost:4000/users/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: loginData.identifier,
            username: loginData.identifier,
            password: loginData.password,
          },
        }),
      });

      const data = await response.json();
      console.log("Received response:", data);

      if (data.status.code === 200) {
        localStorage.setItem("token", data.status.data.token);
        console.log("Logged in successfully!");

        setUser(data.status.data.user); // Update the user context

        if (
          data.status.data.user.role_type === "Admin" ||
          data.status.data.user.role_type === "Trainer"
        ) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
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
          <button className="google-btn">
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>
        <div className="register-prompt">
          Don't have an account?{" "}
          {/* <button className="link-style-button">Register Now</button> */}
          <a href="/register">Register</a>
        </div>
      </div>
      <div className="login-right">
        {/* Background image or other content */}
      </div>
    </div>
  );
};

export default Login;
