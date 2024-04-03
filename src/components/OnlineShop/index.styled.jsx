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
export const CategoriesContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  background-color: ${(props) => props.theme.header};
  padding: 0.5em 2em;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  gap: 3px;
  margin: 0 auto;
`;

export const CategoryButton = styled.button`
  background-color: ${(props) => props.theme.header};
  border: none;
  cursor: pointer;
  font-size: var(--font-size-xxsmall);
  color: ${(props) => props.theme.h2};
  height: 30px;
  text-align: center;
  padding: 2px 8px;
  border-radius: 4px;
  &:hover {
    padding: 1px 7px;
    background-color: ${(props) => props.theme.categoryButtonActive};
    border: 1px solid ${(props) => props.theme.h2};
    color: ${(props) => props.theme.categoryButtonActiveText};
  }
  ${(props) =>
    props.selected &&
    `
    background-color: ${props.theme.categoryButtonActive};
    color: ${props.theme.categoryButtonActiveText};
    `}
`;

export const ProductCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em auto;
  /* max-width: 100%; */
  max-width: 1600px;
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
  width: 60px;
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
  gap: 2px;
`;

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
`;

export const PageSizeSelect = styled.select`
  margin: 0.5em auto;
  text-align: center;
  width: 90%;
  height: 30px;
  border-radius: 5px;
`;

export const Label = styled.label`
  margin: 0 auto;
  width: 100%;
`;
