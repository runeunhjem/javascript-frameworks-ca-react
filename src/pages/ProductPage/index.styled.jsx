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
  &:hover {
    background-color: var(--color-pink);
    color: var(--color-white);
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
  flex: 1 1; // Flex-grow, flex-shrink, flex-basis
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
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const DetailsContainer = styled.div`
  flex: 1 1 300px; // Flex-grow, flex-shrink, flex-basis
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 50%;
  max-height: 100%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0 1em 0 1em;
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
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const PriceInfo = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: ${({ $hasDiscount }) => ($hasDiscount ? "line-through" : "none")};
  margin-right: 10px;
`;

export const DiscountedPrice = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.success};
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* margin-bottom: 10px; */
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
  /* margin-top: 30px; */
  display: flex;
  justify-content: flex-start;
  text-align: left;
  flex-wrap: wrap;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 100%;
    /* margin: 0 auto; */
  }
`;

export const ProductRatingsContainer = styled.div`
  flex: 1 1 300px; // Flex-grow, flex-shrink, flex-basis
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  max-height: 100%;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
