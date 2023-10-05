import React, { useState } from 'react';
import './style.css';

//The Reviews.js displays of customer reviews and allows users to submit new reviews.

  const Reviews = () => {
  // State for storing the new review and author
  const [newReview, setNewReview] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [reviewsData, setReviewsData] = useState([
    // State for storing existing reviews
    { id: 1, review: 'Great service!', author: 'John Doe' },
    { id: 2, review: 'Amazing experience!', author: 'Jane Smith' },
    {id: 3, review: 'Thank you for everything!', author:'Ann Trotman'}
  
  ]);
  
  // Function to handle submitting a new review
  const submitReview = (e) => {
    e.preventDefault();

    if (newReview && newAuthor) {
      const newReviewItem = {
        id: reviewsData.length + 1,
        review: newReview,
        author: newAuthor
      };
     
      // Update reviewsData with the new review item
      setReviewsData([...reviewsData, newReviewItem]);
      setNewReview('');
      setNewAuthor('');
    }
  };

  return (
     // Component structure and content
    <div className="reviews-container">
      <h5>Customer Reviews</h5>
      <div className="reviews-list">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-item">
            <blockquote>{review.review}</blockquote>
            <p>- {review.author}</p>
          </div>
        ))}
      </div>

      <div className="add-review">
        <h5>Add a Review</h5>
        <form onSubmit={submitReview}>
          <div className="mb-3">
            <label htmlFor="newReview" className="form-label">Review:</label>
            <textarea
              id="newReview"
              className="form-control"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              rows="3"
              placeholder="Enter your review"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newAuthor" className="form-label">Your Name:</label>
            <input
              type="text"
              id="newAuthor"
              className="form-control"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
