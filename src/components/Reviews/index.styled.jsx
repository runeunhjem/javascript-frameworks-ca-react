import styled from "styled-components";

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 10px 0;
`;

export const ReviewCard = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.productSearchBackground};
  box-shadow: ${(props) => props.theme.productCardShadow};
  width: 380px;
  height: 100px;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  gap: 4px;
`;

export const ReviewUsername = styled.span`
  font-size: var(--font-size-xsmall);
  font-weight: bold;
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text};
  font-size: var(--font-size-xsmall);
  padding: 2px 6px 4px 2px;
  border-radius: 5px;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewDescription = styled.p`
  font-size: 14px;
  text-align: left;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 4px 3px;
  height: 100%;
  font-size: var(--font-size-xsmall);
`;
