import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

export const CartTitle = styled.h1`
  color: ${(props) => props.theme.header};
  text-align: center;
  margin-bottom: 2rem;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.productCardBackground};
  box-shadow: ${(props) => props.theme.productCardShadow};
  border-radius: 8px;
  margin-bottom: 1.5rem;
  padding: 1rem;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: auto;
  border-radius: 5px;
`;

export const ItemTitle = styled.h3`
  color: ${(props) => props.theme.text};
  margin: 0 0 0.5rem 0;
`;

export const ItemPrice = styled.p`
  color: ${(props) => props.theme.normalPrice};
`;

export const ItemQuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: ${(props) => props.theme.viewProductButton};
  color: ${(props) => props.theme.text};
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.header};
  }
`;

export const QuantityInput = styled.input`
  border: 1px solid ${(props) => props.theme.header};
  text-align: center;
  width: 50px;
  margin: 0 5px;
`;

export const CheckoutSection = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const TotalPrice = styled.h2`
  color: ${(props) => props.theme.text};
`;

export const CheckoutButton = styled.button`
  background-color: ${(props) => props.theme.header};
  color: ${(props) => props.theme.discountedPriceText};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.viewProductButton};
  }
`;

export const RemoveItemButton = styled.button`
  background-color: ${(props) => props.theme.discountedPriceBackground};
  color: ${(props) => props.theme.discountedPriceText};
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: auto;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;
