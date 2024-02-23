import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import ThemeSwitch from "../ThemeToggleButton";
import { useState } from "react";
import { darkTheme, lightTheme } from "../../styles/theme";
import { useProducts } from "../../contexts/ProductContext"; // Import useProducts hook
import SearchBar from "../SearchBar";

function Header() {
  const [theme, setTheme] = useState("light");
  const { setSelectedTag } = useProducts(); // Destructure setSelectedTag from the context
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log("Theme toggled");
  };

  const handleLogoClick = () => {
    setSelectedTag(""); // Reset category selection
    navigate("/"); // Navigate to homepage
  };

  return (
    <header className="header-container">
      <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img className="header-logo" src="/header-logo-cgg.svg" alt="Illustration of the cgg logo" />
      </div>
      <SearchBar />
      <div className="header-content">
        <NavBar setSelectedTag={setSelectedTag} />
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <div>
            <span>Mode:</span>
            <ThemeSwitch toggleTheme={toggleTheme} />
          </div>
        </ThemeProvider>
      </div>
    </header>
  );
}

export default Header;
