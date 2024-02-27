// index.styled.jsx
import styled, { css } from "styled-components";

export const Card = styled.div`
  position: relative;
  padding: 20px;
  margin: 10px;
  width: 300px;
  height: 650px;
  display: inline-block;
  font-size: var(--font-size-xsmall);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const buttonStyles = css`
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  transition: background-color ease-out 200ms, transform 200ms ease;
`;

export const AddToCartButton = styled.button`
  ${buttonStyles}
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: var(--color-pink);
  color: var(--color-white);

  &.added {
    background-color: var(--color-success);
  }

  &:hover {
    transform: scale(1.05);
    background-color: var(--color-success);
  }
`;

export const ViewProductButton = styled.button`
  ${buttonStyles}

  width: 100%;
  text-align: center;
  padding: 10px 20px;
  font-size: calc(1rem);
  color: ${(props) => props.theme.viewProductButton};
  background-color: ${(props) => props.theme.productCardText};
  border-radius: 8px;
  border: 1px;
  /* box-shadow: ${(props) => props.theme.productCardShadow}; */
  box-shadow: 1px 1px 2px 1px var(--color-pink-light);

  &:hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 130px;
  right: -65px;
  background-color: var(--color-red);
  color: var(--color-white);
  transform: rotate(45deg);
  transform-origin: right bottom;
  width: 320px;
  height: 30px;
  text-align: center;
  padding: 5px;
  font-size: 18px;
`;

export const ProductTitle = styled.h2`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
  font-size: var(--font-size-xsmall);
`;

export const ProductDescription = styled.p`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
  font-size: var(--font-size-xsmall);
  height: 65px;
`;

export const Price = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: var(--font-size-xsmall);

  &.normal-price {
  }

  &.discounted-price {
    height: 20px;
    ${(props) =>
      props.discountPercentage <= 0 &&
      css`
        visibility: hidden;
      `}
  }
`;

export const Tags = styled.p`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-bottom: 1em;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;

  i {
    color: var(--color-gold);
    margin-right: 3px;
  }
`;

export const RatingText = styled.span`
  margin-right: 5px;
`;
