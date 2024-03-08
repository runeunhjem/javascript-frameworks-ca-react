// index.styled.jsx
import styled, { css } from "styled-components";

export const Card = styled.div`
  position: relative;
  padding: 20px;
  margin: 10px;
  width: 300px;
  /* height: 640px; */
  display: inline-block;
  font-size: var(--font-size-xsmall);
  background-color: ${(props) => props.theme.productCardBackground};
  box-shadow: ${(props) => props.theme.productCardShadow};
  border-radius: 4px;
  border: 1px solid var(--color-pink-light);
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transition: transform 0.1s ease-in-out;
    transform: scale(0.98);
    cursor: pointer;
  }
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
  color: ${(props) => props.theme.colors.white};

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
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.viewProductButton};
  border-radius: 4px;
  border: 1px;
  box-shadow: ${(props) => props.theme.navLinkShadow};

  &:hover {
    background-color: ${(props) => props.theme.colors.pink};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const DiscountTag = styled.div`
  position: absolute;
  top: 130px;
  right: -65px;
  background-color: ${(props) => props.theme.colors.error};
  color: ${(props) => props.theme.colors.white};
  transform: rotate(45deg);
  transform-origin: right bottom;
  width: 320px;
  height: 30px;
  text-align: center;
  padding: 5px;
  font-size: 18px;
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 60px;
`;

export const ProductTitle = styled.h2`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0 0 0;
  font-size: var(--font-size-title);
`;

export const Price = styled.p`
  position: absolute;
  top: 15px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 110px;
  font-size: var(--font-size-price);
  font-weight: bold;
  color: ${(props) => (props.$isDiscounted ? props.theme.priceTextDiscounted : props.theme.priceTextNormal)};
  /* background-color: ${(props) => (props.$isDiscounted ? props.theme.priceBgDiscounted : props.theme.priceBgNormal)}; */
  border-radius: ${(props) => (props.$isDiscounted ? "4px" : "4px")};
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  /* margin-bottom: 1em; */
  height: 100%;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  i {
    color: var(--color-gold);
    margin-right: 3px;
  }
`;

export const RatingText = styled.span`
  margin-right: 5px;
`;
