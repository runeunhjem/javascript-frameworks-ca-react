// Import necessary hooks and components
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import ThemeSwitch from "../ThemeToggleButton";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../../styles/theme";
import { useProducts } from "../../contexts/ProductContext";
import SearchBar from "../SearchBar";
import "./index.css";
import { useFilterVisibility } from "../../contexts/FilterVisibilityContext/FilterVisibilityContext";

function Header() {
  const [theme, setTheme] = useState("light");
  const [showSearchBar, setShowSearchBar] = useState(true);
  const { setSelectedTag } = useProducts();
  const navigate = useNavigate();
  const location = useLocation(); // Get current route location
  const { toggleFilterVisibility } = useFilterVisibility();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const handleLogoClick = () => {
    setSelectedTag("");
    navigate("/");
  };

  const toggleSearchBar = () => setShowSearchBar(!showSearchBar);
  const toggleFilterContainer = () => toggleFilterVisibility();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 790) {
        setShowSearchBar(false);
      } else {
        setShowSearchBar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if the current route is the homepage
  const isHomePage = location.pathname === "/";

  return (
    <header className={`${showSearchBar ? "search-bar-visible" : ""}`}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <div className="header-container">
          <div className="logo" onClick={handleLogoClick}>
            <img className="header-logo" src="/header-logo-cgg.svg" alt="Illustration of the cgg logo" />
          </div>
          {showSearchBar && <SearchBar />}
          <div className="header-content">
            <NavBar setSelectedTag={setSelectedTag} />
            <div className="header-content-row2">
              <div className="search-and-filter-icons">
                <i className="bi bi-search" onClick={toggleSearchBar}></i>
                {/* Conditionally render sliders icon only on the homepage */}
                {isHomePage && <i className="bi bi-sliders" onClick={toggleFilterContainer}></i>}
              </div>
              <div className="mode-switch">
                <i className="bi bi-sun"></i>
                <ThemeSwitch toggleTheme={toggleTheme} />
                <i className="bi bi-moon"></i>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </header>
  );
}

export default Header;
