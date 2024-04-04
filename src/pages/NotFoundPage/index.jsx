import { useEffect } from "react";
import * as S from "./index.styled";

function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | 404";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.getElementsByTagName("head")[0].appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
    );
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
