import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import SearchResultsPage from "./pages/SearchResultsPage";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme, could be passed down to components that need it
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <ProductProvider>
          <CartProvider>
            {/* Pass toggleTheme function to Layout or other components if needed */}
            <Layout toggleTheme={toggleTheme}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/success" element={<CheckoutSuccessPage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </CartProvider>
        </ProductProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ProductPage from "./pages/ProductPage";
// import ContactPage from "./pages/ContactPage";
// import CartPage from "./pages/CartPage";
// import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import Layout from "./components/Layout";
// import SearchResultsPage from "./pages/SearchResultsPage";
// import { CartProvider } from "./contexts/CartContext";
// import { ProductProvider } from "./contexts/ProductContext";

// function App() {
//   return (
//     <Router>
//       <ProductProvider>
//         <CartProvider>
//           <Layout>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/product/:productId" element={<ProductPage />} />
//               <Route path="/cart" element={<CartPage />} />
//               <Route path="/contact" element={<ContactPage />} />
//               <Route path="/success" element={<CheckoutSuccessPage />} />
//               <Route path="/search" element={<SearchResultsPage />} />
//               <Route path="*" element={<NotFoundPage />} />
//             </Routes>
//           </Layout>
//         </CartProvider>
//       </ProductProvider>
//     </Router>
//   );
// }

// export default App;
