// index.styled.jsx
import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: var(--color-white);
  position: relative;
  width: 150px;
  max-width: 100%;
  margin: 6px auto;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const ResetLink = styled.span`
  margin-left: 8px;
  color: ${(props) => props.theme.h2};
  cursor: pointer;
  font-size: var(--font-size-xxsmall);

  &:hover {
    text-decoration: underline;
  }
`;

export const TagLabel = styled.label`
  font-weight: bold;
  width: 100%;
  text-align: left;
  margin-bottom: 4px;
`;

export const TagSelect = styled.select`
  height: 30px;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: flex-start;
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
