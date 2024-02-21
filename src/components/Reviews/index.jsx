import PropTypes from "prop-types"; // Import PropTypes
import "./Reviews.styles.css";

function Reviews({ reviews }) {
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<i key={i} className={`bi ${i <= rating ? "bi-star-fill" : "bi-star"}`} aria-hidden="true"></i>);
    }
    return <div className="stars">{stars}</div>;
  };

  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="review-header">
            <span className="review-username">{review.username}</span>
            <div className="review-rating">{renderStars(review.rating)}</div>
          </div>
          <p className="review-description">{review.description}</p>
        </div>
      ))}
    </div>
  );
}

// Define the prop types for Reviews
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      username: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Reviews;
