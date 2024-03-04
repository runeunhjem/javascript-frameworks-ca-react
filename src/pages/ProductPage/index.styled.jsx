import styled, { css } from "styled-components";

const buttonStyles = css`
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  font-weight: bold;
  transition: background-color 0.3s ease;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  flex: 1 1 300px; // Flex-grow, flex-shrink, flex-basis
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 400px;
`;

export const DetailsContainer = styled.div`
  flex: 1 1 300px; // Flex-grow, flex-shrink, flex-basis
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
`;

export const ProductTitle = styled.h1`
  margin: 0 0 15px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProductDescription = styled.p`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

export const DiscountInfo = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const PriceInfo = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  ${({ hasDiscount }) =>
    hasDiscount &&
    css`
      text-decoration: line-through;
      margin-right: 10px;
    `}
`;

export const DiscountedPrice = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.success};
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddToCartButton = styled.button`
  ${buttonStyles}
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const GoToCheckoutButton = styled.button`
  ${buttonStyles}
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  text-align: center;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

export const ProductReviews = styled.div`
  width: 100%;
  margin-top: 30px;
`;
