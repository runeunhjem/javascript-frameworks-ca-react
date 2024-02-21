import { Link } from "react-router-dom"; // Import the Link component
import NavBar from "../NavBar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import ThemeSwitch from "../ThemeSwitch";
import { useState } from "react";
import { darkTheme, lightTheme } from "../../styles/theme";

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log("Theme toggled");
  };
  return (
    <header className="header-container">
      <Link to="/">
        <img className="header-logo" src="/header-logo-cgg.svg" alt="Illustration of the cgg logo" />
      </Link>
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
    </header>
  );
}

export default Header;
