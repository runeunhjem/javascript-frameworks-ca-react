import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import "./index.css";
import VisuallyHidden from "../VisuallyHidden";

function SearchBar() {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const navigate = useNavigate();
  const { products, setSearchTerm } = useProducts();
  const searchBarRef = useRef(null); // Step 2: Create a ref

  const filteredProducts = useMemo(() => {
    const lowerCaseTerm = localSearchTerm.toLowerCase();
    return localSearchTerm.trim()
      ? products.filter(
          (product) =>
            product.title.toLowerCase().includes(lowerCaseTerm) ||
            product.description.toLowerCase().includes(lowerCaseTerm) ||
            product.tags.some((tag) => tag.toLowerCase().includes(lowerCaseTerm))
        ).slice(0, 25)
      : [];
  }, [localSearchTerm, products]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setLocalSearchTerm("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
    navigate("/search");
    setLocalSearchTerm("");
  };

  // Step 3: Add and remove event listener using useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setLocalSearchTerm(""); // Reset search term, closing the results
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchBarRef]); // Empty dependency array means this effect runs only on mount and unmount

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "bi-star-fill" : "bi-star"}`}></span>
      );
    }
    return <div className="search-result-rating">{stars}</div>;
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit} ref={searchBarRef}>
      <div className="searchBlock">
        <VisuallyHidden>
          <label htmlFor="productSearch">Search for products, categories, or descriptions</label>
        </VisuallyHidden>
        <input
          id="productSearch"
          type="search"
          placeholder="Search product, category or description"
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
        />
        <button className="searchButton" type="submit">
          <i className="bi bi-search">
            <VisuallyHidden>Search</VisuallyHidden>
          </i>
        </button>
      </div>
      {localSearchTerm && (
        <div className="search-results">
          {filteredProducts.map((product) => (
            <div key={product.id} className="search-result-item" onClick={() => handleProductClick(product.id)}>
              {/* Product details */}
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
      )}
    </form>
  );
}

export default SearchBar;
