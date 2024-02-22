import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout"; // Assuming Layout includes the Header
import { CartProvider } from "./contexts/CartContext";
import "./index.css";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [selectedTag, setSelectedTag] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://v2.api.noroff.dev/online-shop/");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setProducts(data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <Router>
      <CartProvider>
        <ProductProvider>
          <Layout>
            {/* <Layout selectedTag={selectedTag} setSelectedTag={setSelectedTag} products={products}> */}
            {/* Layout now needs to handle passing down selectedTag, setSelectedTag, and products to Header */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/" element={<HomePage products={products} selectedTag={selectedTag} />} /> */}
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/success" element={<CheckoutSuccessPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </ProductProvider>
      </CartProvider>
    </Router>
  );
}

export default App;

