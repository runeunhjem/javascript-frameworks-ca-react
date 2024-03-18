import styled, { css } from "styled-components";

const buttonStyles = css`
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
  text-align: center;
  font-size: var(--font-size-xsmall);
  padding: 5px 10px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.viewProductButton};
  border-radius: 5px;
  border: 1px;
  box-shadow: ${(props) => props.theme.navLinkShadow};
  min-width: 110px;
  width: auto;
  &:hover {
    background-color: ${(props) => props.theme.colors.pink};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  flex: 1 1;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.productCardShadow};
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const DetailsContainer = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 50%;
  max-height: 100%;
  @media screen and (max-width: 768px) {
    width: 95%;
    max-width: 100%;
    padding: 0 1em 0 1em;
  }
`;

export const ProductTitle = styled.h1`
  margin: 0 0 5px;
  font-size: var(--font-size-large);
  color: ${({ theme }) => theme.colors.text};
`;

export const ProductDescription = styled.p`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DiscountInfo = styled.p`
  font-size: var(--font-size-xsmall);
  color: ${({ theme }) => theme.colors.error};
`;

export const Savings = styled.p`
  font-size: var(--font-size-xsmall);
  color: ${({ theme }) => theme.colors.error};
`;
export const Tags = styled.p`
  font-size: var(--font-size-xsmall);
  color: ${({ theme }) => theme.colors.text};
`;

export const PriceInfo = styled.span`
  font-size: var(--font-size-xsmall);
  color: ${({ theme }) => theme.colors.text};
  text-decoration: ${({ $hasDiscount }) => ($hasDiscount ? "line-through" : "none")};
  margin-right: 10px;
`;
export const StarAverage = styled.span`
  font-size: var(--font-size-xsmall);
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px;
`;

export const DiscountedPrice = styled.span`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  color: ${({ theme }) => theme.colors.success};
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: var(--font-size-xsmall);
  margin: 0 0 8px;
  width: 100%;
`;

export const RatingInfo = styled.div`
  display: flex;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xsmall);
  margin: 8px auto;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 6px 0;
  gap: 10px;
  max-width: 100%;
`;

export const AddToCartButton = styled.button`
  ${buttonStyles}
`;

export const GoToCheckoutButton = styled.button`
  ${buttonStyles}
`;

export const ProductReviews = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 1em auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }
`;

export const NoReviewsMessage = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xsmall);
  margin: 8px auto;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 95%;
    max-width: 100%;
  }
`;

export const ProductRatingsContainer = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 0;
    padding: 0 1em 0 1em;
  }
`;
