import PropTypes from "prop-types";
import styled from "styled-components";
import * as S from "../ProductCard/index.styled";

const FilledStar = styled.i.attrs({
  className: "bi bi-star-fill",
})`
  color: var(--color-gold);
  margin-right: 3px;
`;

const HalfStar = styled.i.attrs({
  className: "bi bi-star-half",
})`
  color: var(--color-gold);
  margin-right: 3px;
`;

const EmptyStar = styled.i.attrs({
  className: "bi bi-star",
})`
  color: var(--color-gold);
  margin-right: 3px;
`;

const RenderStars = ({ rating }) => {
  const roundRating = Math.round(rating * 2) / 2;
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(roundRating)) {
      stars.push(<FilledStar key={i} />);
    } else if (i === Math.ceil(roundRating) && roundRating % 1 !== 0) {
      stars.push(<HalfStar key={i} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }

  return <S.Stars>{stars}</S.Stars>;
};

RenderStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RenderStars;
