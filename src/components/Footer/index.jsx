import * as S from "./index.styled";

function Footer() {
  return (
    <S.FooterContainer>
      <S.CopyrightText>© 2024 CGG. All rights reserved.</S.CopyrightText>
      <S.CopyrightText>
        Design and development by{" "}
        <S.Link href="https://runeunhjem.no" target="_blank">
          Rune Unhjem.
        </S.Link>
      </S.CopyrightText>
    </S.FooterContainer>
  );
}

export default Footer;
