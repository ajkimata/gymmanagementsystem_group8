import React, { useState } from "react";
import "./styles/classes.css";

function Classes() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    comments: "",
  });

  const handleEnroll = (classType) => {
    setSelectedClass(classType);
    setModalOpen(true);
  };

  const closeEnrollmentForm = () => {
    setModalOpen(false);
    setSelectedClass("");
    setFeedbackMsg("");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      comments: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xknlykwq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          class: selectedClass,
        }),
      });

      if (response.ok) {
        setFeedbackMsg(
          `Thank you for enrolling in the ${selectedClass} class!`
        );
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          comments: "",
        });
      } else {
        setFeedbackMsg("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFeedbackMsg("Oops! Something went wrong.");
    }
  };

  return (
    <div className="page">
      {isModalOpen ? (
        <div className="enrollment-modal">
          {feedbackMsg ? (
            <div>
              <h3>{feedbackMsg}</h3>
              <button onClick={closeEnrollmentForm}>Close</button>
            </div>
          ) : (
            <div>
              <h2>You're enrolling for the {selectedClass} class!</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" />
                <textarea placeholder="Any special requests or comments"></textarea>
                <button type="submit">Enroll</button>
              </form>
              <button onClick={closeEnrollmentForm}>Cancel</button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="register">
            <h1>REGISTER FOR A CLASS TODAY</h1>
          </div>
          <div className="classes-container">
            {/* Beginner Class */}
            <div className="class-card">
              <div className="image-wrapper">
                <img src="/Assets/beginner.jpg" alt="Beginner Class Photo" />
                <div className="level-text">BEGINNER</div>
              </div>
              <p>
                Explore our beginner-friendly classes perfect for those new to
                fitness.
              </p>
              <button onClick={() => handleEnroll("Beginner")}>
                Enroll Now
              </button>
            </div>
            {/* Intermediate Class */}
            <div className="class-card">
              <div className="image-wrapper">
                <img
                  src="/Assets/intermediate.jpg"
                  alt="Intermediate Class Photo"
                />
                <div className="level-text">INTERMEDIATE</div>
              </div>
              <p>
                Achieve your fitness goals by establishing a tailored fitness
                routine.
              </p>
              <button onClick={() => handleEnroll("Intermediate")}>
                Enroll Now
              </button>
            </div>
            {/* Advanced Class */}
            <div className="class-card">
              <div className="image-wrapper">
                <img src="/Assets/advanced.jpg" alt="Advanced Class Photo" />
                <div className="level-text">ADVANCED</div>
              </div>
              <p>
                Join our advanced gym class designed for seasoned fitness
                enthusiasts.
              </p>
              <button onClick={() => handleEnroll("Advanced")}>
                Enroll Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Classes;
