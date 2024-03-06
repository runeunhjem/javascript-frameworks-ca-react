import styled from "styled-components";

export const ProductCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* gap: 10px; */
  justify-content: center;
  padding: 10px;
`;

// Adding new styled components for the heading and search result text
export const Heading = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

export const SearchResultInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
  font-style: italic;
  font-weight: var(--font-weight-bold);
  color: ${(props) => props.theme.colors.success};
`;
