import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: ${(props) => props.theme.input};
  position: relative;
  align-items: center;
  justify-content: center;
  width: 516px;
  max-width: 100%;
  margin: 0 0 15px 0;
  background-color: ${(props) => props.theme.header};
`;
export const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 88%;
`;

export const Label = styled.label`
  font-weight: bold;
  width: 100%;
  text-align: left;
  margin-bottom: 4px;
  font-size: var(--font-size-xsmall);
`;

export const Select = styled.select`
  height: 30px;
  width: 100%;
  max-width: 88%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.input};
  font-size: var(--font-size-xsmall);
  border-radius: 5px;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    background-color: var(--color-pink-xlight);
  }
  &:hover {
    background-color: var(--color-pink-xlight);
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-pink-light);
    border-radius: 5px;
  }
`;
