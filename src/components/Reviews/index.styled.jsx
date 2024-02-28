import styled from "styled-components";

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 10px 1em;
`;

export const ReviewCard = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: var(--color-white);
  width: 100%;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ReviewUsername = styled.span`
  font-weight: bold;
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-white);
  padding: 2px 6px;
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
