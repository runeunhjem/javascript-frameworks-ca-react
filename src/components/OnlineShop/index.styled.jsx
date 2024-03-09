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

export const PaginationButton = styled.button`
  background-color: ${(props) => props.theme.viewProductButton};
  box-shadow: ${(props) => props.theme.navLinkShadow};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: var(--font-size-xxsmall);
  margin: 0 0.5em;
  color: ${(props) => props.theme.colors.text};
  width: 80px;
  height: 30px;

  &:hover {
    background-color: ${(props) => props.theme.viewProductButtonHover};
    color: ${(props) => props.theme.colors.white};
  }
  &:disabled {
    background-color: #d0d0d0;
    color: ${(props) => props.theme.disabledButtonBgColor};
    cursor: not-allowed;
  }
`;

export const CurrentPage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-xxsmall);
  margin: 0 1em;
  gap: 6px;
`;

// export const CurrentPageWrapper = styled.span`
//   margin-right: 1em;
// `;

// export const PageSizeSelect = styled.select`
//   font-size: var(--font-size-xxsmall);
//   padding: 4px;
// `;
export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xxsmall);
  margin: 1em auto;
`;

export const CurrentPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em;
  width: 120px;
  // Additional styles
`;

export const PageSizeSelect = styled.select`
  margin: 1em auto;
  text-align: center;
  width: 100%;
  // Additional styles
`;

export const Label = styled.label`
  margin-right: 8px; // Adjust spacing as needed
  width: 100%;
  // Add other styles as necessary
`;
