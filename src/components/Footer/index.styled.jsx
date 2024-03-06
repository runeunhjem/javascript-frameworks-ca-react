import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 100%;
  color: ${(props) => props.theme.h2};
  background-color: ${(props) => props.theme.header};
  font-size: var(--font-size-xsmall);
`;

export const CopyrightText = styled.p`
  margin: 1em auto;
  text-align: center;
  font-size: var(--font-size-xsmall);
`;
