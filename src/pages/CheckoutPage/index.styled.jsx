import styled from "styled-components";

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
  height: 150px;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ItemDetailsHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemTitle = styled.h2`
  font-size: var(--font-size-large);
  color: ${(props) => props.theme.colors.text};
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
`;

export const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
`;

export const PriceDetails = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.error};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 4px;
`;

export const TotalDetails = styled.div`
  margin-top: 20px;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const TotalItems = styled.h3`
  color: ${(props) => props.theme.colors.text};
`;

export const TotalPrice = styled.h3`
  color: ${(props) => props.theme.colors.success};
`;

export const CheckoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.success};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 4px;
`;
