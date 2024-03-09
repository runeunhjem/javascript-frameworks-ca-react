import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${(props) => props.theme.header};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  font-size: var(--font-size-medium);
  box-shadow: var(--box-shadow-light);
  &:hover {
    opacity: 1;
  }
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transition: visibility 0.3s, opacity 0.3s ease;
`;
