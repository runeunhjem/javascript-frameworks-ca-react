import styled from "styled-components";

export const CartImage = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(100%);
`;

export const ItemCountBadge = styled.span`
  position: absolute;
  top: -12px;
  right: -20px;
  height: 22px;
  width: 22px;
  background-color: var(--color-white);
  color: var(--color-pink-hot);
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const IconContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 20px;
  transition: all 0.3s ease-in-out;
  &:hover ${ItemCountBadge} {
    background-color: var(--color-pink-hot);
    color: var(--color-white);
  }
`;
