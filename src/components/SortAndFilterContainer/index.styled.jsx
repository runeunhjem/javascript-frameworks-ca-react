import styled from "styled-components";

export const SortAndFilterWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.h2};
  background-color: ${(props) => props.theme.header};
`;

export const SortAndFilterContainerStyled = styled.div`
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  flex-direction: row;
  width: 95%;
  justify-content: center;
  color: ${(props) => props.theme.h2};
  background-color: ${(props) => props.theme.header};
  align-items: center;
  padding: 0 0 20px 0;
  font-size: var(--font-size-xsmall);
  margin: 0 auto;
  gap: 6px;
`;

export const SortAndFilterH2 = styled.h2`
  font-size: var(--font-size-medium);
  margin: 10px 0 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.h2};
  padding: 0;
  color: ${(props) => props.theme.h2};
`;
