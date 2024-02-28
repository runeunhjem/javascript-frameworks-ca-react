import styled, { keyframes } from "styled-components";

// Animation for the spinner
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the loader
const LoaderContainer = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  margin: 2em auto;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #800091 transparent #800091 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

const StylishLoader = () => <LoaderContainer />;

export default StylishLoader;
