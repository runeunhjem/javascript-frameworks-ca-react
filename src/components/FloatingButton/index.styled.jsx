import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${(props) => props.theme.viewProductButton};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-medium);
  box-shadow: var(--box-shadow-light);
  opacity: ${({ $show }) => ($show ? 0.7 : 0)};
  transition: opacity 0.3s ease-in-out;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  &:hover {
    opacity: 1;
    background-color: ${(props) => props.theme.viewProductButtonHover};
  }
`;
