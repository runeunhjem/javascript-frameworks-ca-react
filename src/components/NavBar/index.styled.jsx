// NavBar/index.styled.jsx
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin: 0 0 6px 0;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-right: 0.5em;
  gap: 0.5em;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--color-white);
  text-decoration: none;
  padding: 2px;
  font-size: var(--font-size-xsmall);

  &.active {
    color: var(--color-pink-light);
    text-decoration: underline;
    cursor: default;
  }
`;

export const ListItem = styled.li`
  padding: 4px 6px;
  margin: 0 auto;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.header};
  text-decoration: none;
  text-align: center;
  font-size: var(--font-size-xsmall);
  transition: all ease-out 0.1s;

  &:hover {
    box-shadow: ${(props) => props.theme.navLinkShadow};
    transform: scale(1.08);
  }
`;
