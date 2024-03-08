// NavBar/index.styled.jsx
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0 0 6px 0;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-left: 3px;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  padding: 2px 0;
  font-size: var(--font-size-xsmall);

  &.active {
    color: ${(props) => props.theme.colors.active};
    text-decoration: underline;
    cursor: default;
  }
  @media (max-width: 467px) {
    font-size: var(--font-size-icons);
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
