import React, { useState } from "react";
import "./styles/register.css";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Welcome to Powerhouse Gym</h1>
        <p>Please Sign Up for an awesome experience</p>
        <button>Continue With Google</button>
        <div className="or-divider"></div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div>
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleInputChange}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button>Register</button>
        <div className="login-prompt">
          Already have an account? <a href="#">Login</a>
        </div>
      </div>

      <div className="register-right">
        {/* Image or background-image CSS style */}
      </div>
    </div>
  );
};

export default Register;
