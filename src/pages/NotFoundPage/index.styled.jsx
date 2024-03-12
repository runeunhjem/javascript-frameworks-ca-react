import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  min-height: 60vh;
`;

export const NotFoundTitle = styled.h1`
  color: ${(props) => props.theme.errorMessage};
  font-size: var(--font-size-xlarge);
  padding: 1em;
`;

export const NotFoundMessage = styled.h2`
  font-size: var(--font-size-large);
  padding: 1em;
`;

export const ReturnLink = styled(RouterLink)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.viewProductButtonHover};
  color: ${(props) => props.theme.h2};
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.viewProductButtonHoverDark};
  }
`;
