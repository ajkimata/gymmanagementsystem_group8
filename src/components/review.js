import React, { useState } from 'react';
import './review.css';

const Review = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    fetch('https://your-backend-url/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newComment })
    })
      .then(() => {
        // Clear input field
        setNewComment('');

        // Refresh comments list
        handleFetchComments();
      })
      .catch((error) => {
        console.error('Error submitting comment:', error);
      });
  };

  const handleFetchComments = () => {
    fetch('https://backend-url/api/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };

  return (
    <div className="comments-page">
      <img  className = "image-review" src="review-layer.png" alt="Background image" />
        <div className="say-container">
            <span className="clients-say">WHAT OUR CLIENTS SAY</span>
            <div className="vector-container">
                <img src="Vector.png" alt="Arrow 1" className="arrow-image" />
                <img src="Vector.png" alt="Arrow 2" className="arrow-image" />
                <img src="Vector.png" alt="Arrow 3" className="arrow-image" />
                <img src="Vector.png" alt="Arrow 3" className="arrow-image" />
            </div>
        </div>

      <div className="cards-container">
        <div className="comment-card">
          <p>We'd love to hear your experience!</p>
          <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
          <button className = "submit-comment"onClick={handleCommentSubmit}>Submit</button>
        </div>

        <div className="comments-display-card">
          <button className="arrow-button" onClick={() => handleFetchComments('previous')}>
            &#8592;
          </button>

          <div className="comments-section">
            {comments.map((comment) => (
              <div className="comment">
                <p>{comment.text}</p>
                <p className="comment-author">- {comment.author}</p>
              </div>
            ))}
          </div>

          <button className="arrow-button" onClick={() => handleFetchComments('next')}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
