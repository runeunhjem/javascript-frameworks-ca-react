import styled from "styled-components";

export const SearchBarContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;
  max-width: 500px;
  margin: 15px;
  color: var(--color-black);
  height: 30px;

  @media (max-width: 791px) {
    position: absolute;
    bottom: -12px;
    left: 0;
    max-width: 100%;
    margin: 15px auto;
    /* width: 100%; */
    z-index: 1000;
    justify-content: center;
  }
`;

export const SearchBlock = styled.div`
  display: flex;
  /* border-radius: 5px; */
  flex-wrap: nowrap;
  border-radius: 5px;
  color: ${(props) => props.theme.input};
  background-color: ${(props) => props.theme.input};
  position: relative;
  justify-content: center;
  width: 95%;
  @media (max-width: 391px) {
    /* margin-left: 3px; */
    justify-content: flex-start;
  }
  @media (min-width: 791px) {
    padding-left: 3px;
    justify-content: flex-start;
  }
  /* border: 1px solid var(--color-pink-light); */
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  background-color: ${(props) => props.theme.input};
`;

export const SearchLabel = styled.label`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

export const Input = styled.input`
  display: flex;
  text-align: left;
  width: 90%;
  height: 30px;
  text-indent: 6px;
  background-color: ${(props) => props.theme.input};
  border: 0;
  &:focus {
    outline: none;
  }
  @media (min-width: 791px) {
    width: 85%;
  }
  @media (max-width: 391px) {
    justify-content: flex-start;
    width: 85%;
    margin-left: 4px;
  }
`;

export const SearchIcon = styled.i`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--color-gray-dark);
  z-index: 10;
  font-size: 1rem;
`;

export const SearchResults = styled.div`
  display: block;
  max-height: 400px;
  overflow-y: auto;
  border-radius: 4px;
  position: absolute;
  top: 40px;
  max-width: calc(100vw - 1vmin);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-pink-light);
    border-radius: 5px;
    &:hover {
      background-color: var(--color-pink-hot);
    }
  }
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.searchResultBackground};
  color: ${(props) => props.theme.searchResultText};
  box-shadow: ${(props) => props.theme.productCardShadow};
  margin: 0 6px 5px 0;
  font-size: var(--font-size-xsmall);
  transition: all 0.1s ease-in-out;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.searchResultBackgroundHover};
    /* color: ${(props) => props.theme.priceTextNormal}; */
    transform: scale(0.98);
  }
`;

export const SearchResultImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  align-items: flex-start;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.5);
`;

export const SearchResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SearchResultTitle = styled.span`
  text-align: left;
  font-weight: bold;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 400px) {
    white-space: nowrap;
  }
`;

export const SearchResultPriceInfo = styled.div`
  display: flex;
  flex-direction: column; // Change to column for vertical stacking
  align-items: flex-start; // Align items to the start
  gap: 4px; // Optional: adds space between lines
`;

export const SearchResultNormalPriceAndDiscount = styled.div`
  display: flex;
  align-items: baseline; // Keep items aligned properly
`;

export const SearchResultNormalPrice = styled.span`
  color: ${(props) => props.theme.searchResultText};
  text-decoration: line-through;
  margin-right: 10px; // Keep some spacing between the normal price and discount
`;

export const SearchResultDiscount = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-weight: bold;
`;

export const SearchResultPrice = styled.span`
  &.discounted {
    color: ${(props) => props.theme.colors.error};
    font-weight: bold;
  }
`;

export const Star = styled.span`
  color: var(--color-gold-search);
  padding: 0 2px;
`;

export const SearchResultRating = styled.div`
  display: flex;
  align-items: center;
`;
