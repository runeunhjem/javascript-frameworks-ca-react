import PropTypes from "prop-types";
import * as S from "./index.styled";
import RenderStars from "../RenderStars";

function Reviews({ reviews }) {
  return (
    <S.ReviewsContainer>
      {reviews.map((review) => (
        <S.ReviewCard key={review.id}>
          <S.ReviewHeader>
            <S.ReviewUsername>{review.username}</S.ReviewUsername>
            <S.RatingContainer aria-label={`Rating: ${review.rating} out of 5`}>
              <RenderStars rating={review.rating} />
            </S.RatingContainer>
            <S.ReviewRating>({review.rating} stars)</S.ReviewRating>
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
