import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import ThemeSwitch from "../ThemeToggleButton";
import { useState } from "react";
import { darkTheme, lightTheme } from "../../styles/theme";
import { useProducts } from "../../contexts/ProductContext"; // Import useProducts hook
import SearchBar from "../SearchBar";
// import CategorySelector from "../CategorySelector";

function Header() {
  const [theme, setTheme] = useState("light");
  const { setSelectedTag } = useProducts(); // Destructure setSelectedTag from the context

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log("Theme toggled");
  };

  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setSelectedTag(""); // Reset category selection
  };

  return (
    <header className="header-container">
      <Link to="/" onClick={handleLogoClick}>
        <img className="header-logo" src="/header-logo-cgg.svg" alt="Illustration of the cgg logo" />
      </Link>
      <SearchBar />
      <div className="header-content">
        <NavBar />
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <div>
            <span>Mode:</span>
            <ThemeSwitch toggleTheme={toggleTheme} />
          </div>
        </ThemeProvider>
      </div>
      {/* <CategorySelector /> */}
    </header>
  );
}

export default Header;
