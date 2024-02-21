import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log("Theme toggled");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div>
        <h1>Hello, world!</h1>
        <ThemeSwitch toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;

