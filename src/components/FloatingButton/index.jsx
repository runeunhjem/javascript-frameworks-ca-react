import { useState, useEffect } from "react";
import * as S from "./index.styled";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <S.Button onClick={scrollToTop} $show={isVisible}>
      &#8679; {/* Arrow up */}
    </S.Button>
  );
};

export default FloatingButton;
