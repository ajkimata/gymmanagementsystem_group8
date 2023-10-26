import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faFrown,
  faMeh,
  faGrinStars,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/review.css";

const Review = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddComment, setShowAddComment] = useState(false);

  useEffect(() => {
    handleFetchComments();
  }, []);

  const handleCommentSubmit = () => {
    // ... (As previously defined)
  };

  const handleFetchComments = () => {
    // ... (As previously defined)
  };

  // const handleAddCommentClick = () => {
  //   setShowAddComment(!showAddComment);
  // };

  return (
    <div className="powerhouse-container">
      {/* <header>
        <img src="powerhouse-logo.png" alt="Powerhouse logo" className="logo" />
        <nav>
          <a href="/">HOME</a>
          <a href="/classes">CLASSES</a>
          <a href="/login">LOG IN</a>
          <a href="/about">ABOUT US</a>
          <a href="/contact">CONTACT US</a>
        </nav>
        <input type="search" placeholder="Search..." className="search-bar" />
      </header> */}
      <section className="comments-page">
        <h1>WHAT OUR CLIENTS SAY</h1>
        <div className="slider-arrows">
          <span>&lt;</span> <span>&gt;</span>
        </div>
        <div className="feedback-section">
          <div className="feedback-card">
            <h2>Rate your experience </h2>
            <div className="emoji-ratings">
              <FontAwesomeIcon
                icon={faSmile}
                size="2x"
                className="emoji-icon"
              />
              <FontAwesomeIcon
                icon={faFrown}
                size="2x"
                className="emoji-icon"
              />
              <FontAwesomeIcon icon={faMeh} size="2x" className="emoji-icon" />
              <FontAwesomeIcon
                icon={faGrinStars}
                size="2x"
                className="emoji-icon"
              />
            </div>
            <h2>What did you like?</h2>
            <div className="feedback-tags">
              <span>Ambience</span>
              <span>Equipment</span>
              <span>Service</span>
              <span>Music</span>
              <span>Quantity</span>
              <span>Workouts</span>
            </div>
            <textarea
              placeholder="Comments..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>Submit</button>
          </div>
          <div className="testimonial-card">
            
            <p>
              Thanks to the personalized training and encouragement from the
              trainers at this gym, I've lost 30 pounds and gained confidence in
              myself. I never thought I could enjoy working out, but this gym
              changed my perspective completely!
            </p>
            <div className="testimonial-footer">
              <img src="profile-pic.png" alt="Profile" />
              <div>
                <span>Albert Flores</span>
                <span>Member since 2019</span>
              </div>
            </div>
            <div className="comment-navigation">
              <div className="arrow left-arrow" >
                &lt;
              </div>
              <div className="arrow right-arrow" >
                &gt;
              </div>
            </div>

          </div>
        </div>
        {/* <div className="add-comment" onClick={handleAddCommentClick}>
          Tap To Add Your Comment{" "}
          <FontAwesomeIcon icon={faPlusCircle} size="2x" />
        </div> */}
        {showAddComment && (
          <div className="add-comment-section">
            {/* The comment form will appear here once the above section is clicked */}
          </div>
        )}
      </section>
    </div>
  );
};

export default Review;
