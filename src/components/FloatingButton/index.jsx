import { useState, useEffect } from "react";
import * as S from "./index.styled";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkIfShouldBeVisible = () => {
      const shouldShow = window.pageYOffset > 200;
      setIsVisible(shouldShow);
    };

    // Initialize visibility based on the current scroll position
    checkIfShouldBeVisible();

    window.addEventListener("scroll", checkIfShouldBeVisible);
    return () => window.removeEventListener("scroll", checkIfShouldBeVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Button onClick={scrollToTop} $show={isVisible}>
      &#8679; {/* Arrow up */}
    </S.Button>
  );
};

export default FloatingButton;
