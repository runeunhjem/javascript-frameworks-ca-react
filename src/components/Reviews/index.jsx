import PropTypes from "prop-types";
import * as S from "./index.styled";

function Reviews({ reviews }) {
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<i key={i} className={`bi ${i <= rating ? "bi-star-fill" : "bi-star"}`} aria-hidden="true"></i>);
    }
    return <S.Stars>{stars}</S.Stars>;
  };

  return (
    <S.ReviewsContainer>
      {reviews.map((review) => (
        <S.ReviewCard key={review.id}>
          <S.ReviewHeader>
            <S.ReviewUsername>{review.username}</S.ReviewUsername>
            <S.ReviewRating>{renderStars(review.rating)}</S.ReviewRating>
          </S.ReviewHeader>
          <S.ReviewDescription>{review.description}</S.ReviewDescription>
        </S.ReviewCard>
      ))}
    </S.ReviewsContainer>
  );
}

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
