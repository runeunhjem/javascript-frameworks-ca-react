import { useEffect } from "react";
import * as S from "./index.styled";

function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not found | 404";
  }, []);
  return (
    <S.NotFoundContainer>
      <S.NotFoundTitle>We cant seem to find it.</S.NotFoundTitle>
      <S.NotFoundMessage>Sorry, the page you are looking for does not exist.</S.NotFoundMessage>
      <S.ReturnLink to="/">Return to Home</S.ReturnLink>
    </S.NotFoundContainer>
  );
}

export default NotFoundPage;
