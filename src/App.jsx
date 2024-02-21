import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import ThemeSwitch from "./components/ThemeSwitch";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import { CartProvider } from "./CartContext";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log("Theme toggled");
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <div>
          {/* <h1>Hello, world!</h1> */}
          <ThemeSwitch toggleTheme={toggleTheme} />
        </div>
      </ThemeProvider>
      <CartProvider>
        {" "}
        {/* Wrap routes with CartProvider */}
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/success" element={<CheckoutSuccessPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;

