import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const SuccessContainer = styled.div`
  text-align: center;
  margin-top: 50px; /* Correct CSS property name */
  min-height: 60vh;
`;

export const SuccessTitle = styled.h1``;

export const SuccessMessage = styled.p``;

export const ReturnLink = styled(RouterLink)`
  display: inline-block;
  margin-top: 20px; /* Correct CSS property name */
  margin: 1em auto;
  padding: 10px 20px;
  background-color: #c92bc1; /* Correct CSS property name */
  color: white;
  text-decoration: none; /* Correct CSS property name */
  border-radius: 5px; /* Correct CSS property name */
`;
