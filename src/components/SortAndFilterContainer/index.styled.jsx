import styled from "styled-components";

export const SortAndFilterWrapperStyled = styled.div`
  /* display: flex;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.h2};
  background-color: ${(props) => props.theme.header}; */
`;

export const SortAndFilterContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  color: ${(props) => props.theme.h2};
  background-color: ${(props) => props.theme.header};
  align-items: center;
  padding: 20px;
  font-size: var(--font-size-xsmall);
  margin: 0 auto;
  gap: 6px;
`;

export const SortAndFilterH2 = styled.h2`
  font-size: var(--font-size-medium);
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.text};
`;
