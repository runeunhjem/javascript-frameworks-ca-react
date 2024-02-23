import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext"; // Adjust the import path as necessary
import "./index.styled.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { products } = useProducts(); // Access products from context

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const lowerCaseTerm = searchTerm.toLowerCase();
    return products
      .filter(
        (product) =>
          product.title.toLowerCase().includes(lowerCaseTerm) ||
          product.description.toLowerCase().includes(lowerCaseTerm) ||
          product.tags.some((tag) => tag.toLowerCase().includes(lowerCaseTerm))
      )
      .slice(0, 25); // Limit to first 25 results
  }, [searchTerm, products]);

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "bi-star-fill" : "bi-star"}`}>
        </span>
      );
    }
    return <div className="search-result-rating">{stars}</div>;
  };

  const handleProductClick = (productId) => {
    setSearchTerm(""); // Clear the search term
    navigate(`/product/${productId}`); // Navigate to the product page
  };

  return (
    <div className="search-bar">
      <div className="searchBlock">
        <label htmlFor="productSearch" className="productSearch visually-hidden">
          Search:
        </label>
        <input
          id="productSearch"
          type="search"
          placeholder="Search products, categories or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="search-results">
        {filteredProducts.map((product) => (
          <div key={product.id} className="search-result-item" onClick={() => handleProductClick(product.id)}>
            <img
              src={product.image ? product.image.url : "https://via.placeholder.com/50"}
              alt={product.image && product.title ? product.image.alt : "Product image unavailable"}
              className="search-result-image"
              id="search-result-image"
            />
            <div className="search-result-info">
              <span className="search-result-title">{product.title}</span>
              <div className="search-result-price-info">
                {product.discountedPrice < product.price && (
                  <span className="search-result-discount">
                    -{Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                  </span>
                )}
                <span className={`search-result-price ${product.discountedPrice < product.price ? "discounted" : ""}`}>
                  ${((product.discountedPrice < product.price ? product.discountedPrice : product.price) / 100).toFixed(2)}
                </span>
                {product.discountedPrice < product.price && (
                  <span className="search-result-normal-price">${(product.price / 100).toFixed(2)}</span>
                )}
              </div>
              <div className="search-result-rating">{renderStars(Math.round(product.rating))}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
