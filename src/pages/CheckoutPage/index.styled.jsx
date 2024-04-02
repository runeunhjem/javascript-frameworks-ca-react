import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const buttonStyles = css`
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  transition: background-color ease-out 200ms, transform 200ms ease;
`;

export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: var(--font-size-xxlarge);
  color: ${(props) => props.theme.colors.text};
`;

export const ClearCartButton = styled.button`
  ${buttonStyles}

  text-align: center;
  margin-bottom: 8px;
  font-size: var(--font-size-price);
  font-weight: var(--font-weight-bold);
  color: ${(props) => props.theme.errorMessage};
  background-color: transparent;
  border-radius: 4px;
  &:hover {
    background-color: var(--color-pink);
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const ItemCard = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.inputBorderColor};
  box-shadow: ${(props) => props.theme.productCardShadow};
  @media screen and (max-width: 640px) {
    align-items: flex-start;
  }
`;

export const ItemImageContainer = styled.div`
  cursor: pointer;
  flex: 1 1;
  height: 150px;
  @media screen and (max-width: 368px) {
    height: 180px;
  }
`;

export const ItemImage = styled.img`
  box-shadow: ${(props) => props.theme.productCardShadow};
  width: 100px;
  flex: 1 1;
  height: 200px;
  max-height: 100%;
  object-fit: cover;
  @media screen and (min-width: 655px) {
    width: 300px;
    height: 150px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 0 10px 0 0;
`;

export const ItemDetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  height: 100%;
`;

export const VisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
  white-space: nowrap;
`;

export const QuantityAndRemoveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  flex-grow: 1;
  margin: 4px auto;
  @media screen and (max-width: 620px) {
  }
  @media screen and (max-width: 390px) {
    justify-content: flex-end;
  }
`;

export const ItemTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-size: var(--font-size-small);
  color: ${(props) => props.theme.colors.text};
  margin: 6px 0px 3px 0;
  width: 50%;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    text-align: right;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-right: 3em;
  margin-top: 6px;
  @media screen and (max-width: 620px) {
    margin-right: 0em;
    justify-content: flex-start;
  }
`;

export const QuantityButton = styled.button`
  padding: 4px 10px;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.viewProductButton};
  color: ${(props) => props.theme.colors.text};
  box-shadow: ${(props) => props.theme.navLinkShadow};
  &:hover {
    background-color: ${(props) => props.theme.viewProductButtonHover};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const QuantityInputLabel = styled.input`
  font-size: var(--font-size-xsmall);
`;

export const QuantityInput = styled.input`
  width: 50px;
  height: 100%;
  border-radius: 4px;
  margin-top: 1px;
  border: 1px solid ${(props) => props.theme.colors.inputBorderColor};
  text-align: center;
  background-color: ${(props) => props.theme.searchResultBackground};
  color: ${(props) => props.theme.colors.text};
  align-items: center;
`;

export const PriceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  gap: 5px;
  @media screen and (max-width: 620px) {
    font-size: var(--font-size-xsmall);
  }
`;
export const PricePerItemWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 15px 0 0 0;
  gap: 5px;
  font-size: var(--font-size-xsmall);
  @media screen and (max-width: 620px) {
    font-size: var(--font-size-xsmall);
  }
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  margin-top: 6px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.error};
  color: ${(props) => props.theme.removeButtonText};
  border: none;
  border-radius: 4px;
`;

export const TotalDetails = styled.div`
  align-self: stretch;
  font-size: var(--font-size-xsmall);
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: 1em auto;
  justify-content: space-between;
  padding: 1em 8px;
  background-color: ${(props) => props.theme.searchResultBackground};
  box-shadow: ${(props) => props.theme.navLinkShadow};
  border-radius: 4px;
`;

export const TotalItems = styled.h3`
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: flex-start;
  padding: 4px;
  color: ${(props) => props.theme.colors.text};
`;

export const TotalSavings = styled.h3`
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: center;
  padding: 4px;
  color: ${(props) => props.theme.colors.success};
`;

export const TotalPrice = styled.h3`
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  color: ${(props) => props.theme.colors.text};
`;

export const TotalPricePerItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-xsmall);
  height: 100%;
  gap: 5px;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.success};
  text-align: right;
`;

export const Savings = styled.h3`
  color: ${(props) => props.theme.colors.success};
  text-align: right;
  font-size: var(--font-size-xsmall);
`;
export const Totals = styled.h3`
  color: ${(props) => props.theme.colors.text};
  text-align: right;
  font-size: var(--font-size-xsmall);
`;

export const DiscountPerItem = styled.p`
  color: ${(props) => props.theme.colors.error};
`;

export const PricePerItem = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

export const EmptyCartMessage = styled.h3`
  color: ${(props) => props.theme.colors.error};
`;

export const CheckoutButton = styled.button`
  ${buttonStyles}

  width: 250px;
  max-width: 1200px;
  text-align: center;
  padding: 10px 20px;
  font-size: var(--font-size-small);
  color: ${(props) => props.theme.checkoutButtonText};
  background-color: ${(props) => props.theme.checkoutButton};
  border-radius: 4px;
  border: 1px;
  box-shadow: ${(props) => props.theme.navLinkShadow};

  &:hover {
    background-color: var(--color-pink);
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ReturnLink = styled(RouterLink)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.viewProductButtonHover};
  color: ${(props) => props.theme.h2};
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.viewProductButtonHoverDark};
  }
`;
