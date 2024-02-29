// Header/index.styled.jsx
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.header};
  flex-wrap: nowrap;
  min-height: 140px;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto;
  padding: 10px;
  font-size: var(--font-size-xsmall);
  border-bottom: 1px solid var(--color-pink-light);
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100vw;
  max-width: 1200px;
  font-size: calc(10px + 2vmin);
  color: var(--color-white);
`;

export const LogoImage = styled.img`
  height: 8vmin;
  min-height: 30px;
  max-height: 60px;
  pointer-events: none;
  margin: 15px 0 0 0;
  filter: drop-shadow(3px 3px 3px rgba(10, 10, 1, 0.5));
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  max-width: 250px;
  align-items: flex-start;
  margin: 14px 0;
`;

export const IconContainer = styled.div`
  display: flex;
  margin: 0 6px;
  align-items: center;
`;

export const HeaderContentRow2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
`;

export const SearchAndFilterIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  margin: 6px 10px 6px 25px;
  font-size: var(--font-size-xsmall);

  @media (max-width: 567px) {
    font-size: var(--font-size-icons);
    margin: 6px 10px 6px 28px;
    gap: 12px;
  }
  @media (max-width: 468px) {
    margin: 6px 10px 6px 24px;
  }
  @media (max-width: 412px) {
    margin: 6px 10px 6px 20px;
  }
  @media (max-width: 340px) {
    font-size: var(--font-size-small);
    margin: 6px 10px 6px 10px;
    gap: 16px;
  }
`;
