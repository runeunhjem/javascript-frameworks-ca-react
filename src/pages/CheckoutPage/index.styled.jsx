import styled, { css } from "styled-components";

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
  margin-bottom: 2rem;
  font-size: var(--font-size-xxlarge);
  color: ${(props) => props.theme.colors.text};
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
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.inputBorderColor};
  box-shadow: ${(props) => props.theme.productCardShadow};
`;

export const ItemImageContainer = styled.div`
  cursor: pointer;
  flex-shrink: 0;
`;

export const ItemImage = styled.img`
  width: 100px;
  box-shadow: ${(props) => props.theme.productCardShadow};
  height: 150px;
  object-fit: cover;
  @media screen and (min-width: 620px) {
    width: 50px;
    height: 75px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const ItemDetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
`;

export const QuantityAndRemoveContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap; // Allow the items to wrap to the next line
  gap: 10px; // Adjust as needed for spacing
  flex-grow: 1;
  margin: 4px auto;
  @media screen and (max-width: 620px) {
    justify-content: flex-start;
  }
`;

export const ItemTitle = styled.h2`
  font-size: var(--font-size-small);
  color: ${(props) => props.theme.colors.text};
  margin: 6px 8px 3px 0;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-right: 3em;
  @media screen and (max-width: 620px) {
    margin-right: 0em;
    justify-content: flex-start;
  }
`;

export const QuantityButton = styled.button`
  padding: 5px 10px;
  /* margin: 0 5px; */
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.viewProductButton};
  color: ${(props) => props.theme.colors.text};
  box-shadow: ${(props) => props.theme.navLinkShadow};
`;

export const QuantityInputLabel = styled.input`
  font-size: var(--font-size-xsmall);
`;

export const QuantityInput = styled.input`
  width: 50px;
  height: 100%;
  border-radius: 4px;
  text-align: center;
  background-color: ${(props) => props.theme.searchResultBackground};
  color: ${(props) => props.theme.colors.text};
`;

export const PriceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
  @media screen and (max-width: 620px) {
    font-size: var(--font-size-xsmall);
  }
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.error};
  color: ${(props) => props.theme.removeButtonText};
  border: none;
  border-radius: 4px;
`;

export const TotalDetails = styled.div`
  align-self: stretch;
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: 1em auto;
  justify-content: space-between;
  padding: 1em 20px;
  background-color: ${(props) => props.theme.searchResultBackground};
  box-shadow: ${(props) => props.theme.navLinkShadow};
  border-radius: 4px;
`;

export const TotalItems = styled.h3`
  color: ${(props) => props.theme.colors.text};
`;

export const TotalPrice = styled.h3`
  color: ${(props) => props.theme.colors.success};
`;

export const CheckoutButton = styled.button`
  ${buttonStyles}

  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding: 10px 20px;
  font-size: calc(1rem);
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.viewProductButton};
  border-radius: 4px;
  border: 1px;
  box-shadow: ${(props) => props.theme.navLinkShadow};

  &:hover {
    background-color: var(--color-pink);
    color: var(--color-white);
  }
`;
