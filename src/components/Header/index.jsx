import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import ThemeSwitch from "../ThemeToggleButton"; // Ensure this component is adjusted to use the prop
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import SearchBar from "../SearchBar";
import { useFilterVisibility } from "../../contexts/FilterVisibilityContext/FilterVisibilityContext";
import * as S from "./index.styled";
import "./index.css";

function Header({ toggleTheme }) {
  // Accept toggleTheme as a prop
  const [showSearchBar, setShowSearchBar] = useState(true);
  const { setSelectedTag } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleFilterVisibility } = useFilterVisibility();

  const handleLogoClick = () => {
    setSelectedTag("");
    navigate("/");
  };

  const toggleSearchBar = () => setShowSearchBar(!showSearchBar);
  const toggleFilterContainer = () => toggleFilterVisibility();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 791) {
        setShowSearchBar(true);
      } else {
        setShowSearchBar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <S.HeaderContainer className={`${showSearchBar ? "search-bar-visible" : ""}`}>
      <S.Container>
        <S.Logo onClick={handleLogoClick}>
          <S.LogoImage src="/header-logo-cgg.svg" alt="Illustration of the CGG logo" />
        </S.Logo>
        {showSearchBar && <SearchBar />}
        <S.HeaderContent>
          <NavBar setSelectedTag={setSelectedTag} />
          <S.HeaderContentRow2>
            <S.SearchAndFilterIcons>
              <i className="bi bi-search" onClick={toggleSearchBar}></i>
              {isHomePage && <i className="bi bi-sliders" onClick={toggleFilterContainer}></i>}
            </S.SearchAndFilterIcons>
            <div className="mode-switch">
              <i className="bi bi-sun"></i>
              {/* Ensure ThemeSwitch uses the toggleTheme prop effectively */}
              <ThemeSwitch toggleTheme={toggleTheme} />
              <i className="bi bi-moon"></i>
            </div>
          </S.HeaderContentRow2>
        </S.HeaderContent>
      </S.Container>
    </S.HeaderContainer>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
