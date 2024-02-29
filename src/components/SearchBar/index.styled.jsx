import styled from "styled-components";

export const SearchBarContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: left;
  width: 100%;
  max-width: 300px;
  margin: 15px auto;
  color: var(--color-black);
  height: 30px;

  @media (max-width: 791px) {
    position: absolute;
    bottom: -16px;
    left: 0;
    max-width: 100vw;
    z-index: 1000;
  }
`;

export const SearchBlock = styled.div`
  display: flex;
  /* border-radius: 5px; */
  flex-wrap: nowrap;
  color: var(--color-white);
  position: relative;
  justify-content: flex-start;
  width: 100%;
  border: 1px solid var(--color-pink-light);
  /* border: none; */
  background-color: white;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  background-color: ${(props) => props.theme.input};
`;

export const Input = styled.input`
  width: 90%;
  height: 30px;
  text-indent: 6px;
  border: 0;
  &:focus {
    box-shadow: 0 0 0 0;
    /* outline: 1px solid var(--color-pink-xlight); */
    outline: none;
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
  z-index: 1000;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-pink-light);
    border-radius: 5px;
    &:hover {
      background-color: var(--color-gold);
    }
  }
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.searchResultBackground};
  box-shadow: ${(props) => props.theme.productCardShadow};
  margin-bottom: 5px;
  transition: all 0.1s ease-in-out;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: var(--color-pink-light);
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
`;

export const SearchResultTitle = styled.span`
  text-align: left;
  font-weight: bold;
`;

export const SearchResultDiscount = styled.span`
  color: var(--color-red);
  margin-right: 5px;
`;

export const SearchResultNormalPrice = styled.span`
  color: var(--color-red);
  margin-left: 10px;
  text-decoration: line-through;
`;

export const SearchResultPrice = styled.span`
  &.discounted {
    color: var(--color-black);
    margin-left: 5px;
  }
`;

export const SearchResultPriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
`;

export const Star = styled.span`
  color: var(--color-gold-search);
`;

export const SearchResultRating = styled.div`
  display: flex;
  align-items: center;
`;
