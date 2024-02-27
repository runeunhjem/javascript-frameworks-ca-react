import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import ThemeSwitch from "../ThemeToggleButton";
import { useState } from "react";
import { darkTheme, lightTheme } from "../../styles/theme";
import { useProducts } from "../../contexts/ProductContext"; // Import useProducts hook
import SearchBar from "../SearchBar";
import "./index.css";
import { useFilterVisibility } from "../../contexts/FilterVisibilityContext/FilterVisibilityContext";

function Header() {
  const [theme, setTheme] = useState("light");
  const [showSearchBar, setShowSearchBar] = useState(true); // State to toggle search bar visibility
  // const [showFilterContainer, setShowFilterContainer] = useState(true); // State to toggle filter container visibility
  const { setSelectedTag } = useProducts();
  const navigate = useNavigate();
  const { toggleFilterVisibility } = useFilterVisibility();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const handleLogoClick = () => {
    setSelectedTag("");
    navigate("/");
  };

  // Toggle functions for search bar and sort-and-filter-container
  const toggleSearchBar = () => setShowSearchBar(!showSearchBar);
  // const toggleFilterContainer = () => setShowFilterContainer(!showFilterContainer);
  const toggleFilterContainer = () => toggleFilterVisibility();

  return (
    <header>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <div className="header-container">
          <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <img className="header-logo" src="/header-logo-cgg.svg" alt="Illustration of the cgg logo" />
          </div>
          {showSearchBar && <SearchBar />}
          <div className="header-content">
            <NavBar setSelectedTag={setSelectedTag} />
            <div className="header-content-row2">
              <div className="search-and-filter-icons">
                {/* Toggle search bar visibility */}
                <i className="bi bi-search" onClick={toggleSearchBar}></i>
                {/* Toggle filter container visibility */}
                <i className="bi bi-sliders" onClick={toggleFilterContainer}></i>
              </div>
              <div className="mode-switch">
                <i className="bi bi-sun"></i>
                <ThemeSwitch toggleTheme={toggleTheme} />
                <i className="bi bi-moon"></i>
              </div>
            </div>
          </div>
          {/* {showFilterContainer && <SortAndFilterContainer />} */}
        </div>
      </ThemeProvider>
    </header>
  );
}

export default Header;
