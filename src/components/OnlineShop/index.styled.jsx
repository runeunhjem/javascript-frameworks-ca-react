import styled from "styled-components";

export const OnlineShopContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OnlineShopH1 = styled.h1`
  margin: 0 auto;
`;

export const OnlineShopP = styled.p`
  margin: 1em auto;
`;

export const ProductCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em auto;
  max-width: 100%;
`;

export const NoResults = styled.p`
  margin: 1em auto;
`;

export const PaginationControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1em auto;
`;

export const PaginationButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin: 0 0.5em;
  padding: 0.5em 1em;

  &:disabled {
    background-color: #d0d0d0;
    cursor: not-allowed;
  }
`;

export const CurrentPage = styled.p`
  font-size: 1.2em;
  margin: 0 1em;
`;