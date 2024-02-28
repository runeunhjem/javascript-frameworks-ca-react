import styled from "styled-components";

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 4px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-pink-light);
  transition: 0.4s;
  border-radius: 14px;
  padding: 0 6px;
  height: 26px;
  box-shadow: 1px 1px 6px 0px var(--color-gray-dark);

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 34px;
  justify-self: flex-end;

  ${Checkbox}:checked + ${Slider} {
    background-color: var(--color-gray-dark);
    box-shadow: 1px 1px 3px 1px var(--color-gray);
  }

  ${Checkbox}:checked + ${Slider}:before {
    background-color: var(--color-gray-light);
    transform: translateX(16px);
  }
`;
