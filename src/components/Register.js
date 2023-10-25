import React, { useState } from "react";
import "./styles/register.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Define the state for form data and other UI states
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role_type: "", // Added for the role type
    remember: false,
  });

  // Define states for UI feedback: loading, error, and success messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload = {
      user: {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role_type: formData.role_type,
      },
    };

    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("User registered successfully!");
        navigate("/login");
      } else {
        setError(
          data.errors ? data.errors.join(", ") : "Error registering user."
        );
      }
    } catch (error) {
      setError("There was an unexpected error registering the user.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle input changes and update the form data state
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
        {/* Wrap input fields within a form */}
        <form onSubmit={handleSubmit}>
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
          <select
            name="role_type"
            value={formData.role_type}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select Role Type (e.g. Client, Trainer or Administrator)</option>
            <option value="Client">Client</option>
            <option value="Trainer">Trainer</option>
            <option value="Admin">Admin</option>
          </select>
          <div>
          <table>
          <tbody>
          <tr>
          <td>
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <label htmlFor="remember">Remember me</label>
          </td>
          </tr>
          </tbody>
          </table>
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="login-prompt">
          Already have an account?
          <a href="/login">Login</a>
        </div>
      </div>

      {/* Display loading */}
      {loading && <p>Loading...</p>}

      {/* Display success message */}
      {success && <p className="success-message">{success}</p>}

      {/* Display error message */}
      {error && <p className="error-message">{error}</p>}

      <div className="register-right">
        {/* Image or background-image CSS style */}
      </div>
    </div>
  );
};

export default Register;
