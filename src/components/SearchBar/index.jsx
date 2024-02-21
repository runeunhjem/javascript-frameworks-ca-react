import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.styles.css";

function SearchBar({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const [delayedSearchTerm, setDelayedSearchTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDelayedSearchTerm(searchTerm);
    }, 250); // Add a 250ms delay

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    if (delayedSearchTerm) {
      const results = products
        .filter((product) => {
          const term = delayedSearchTerm.toLowerCase();
          return (
            product.title.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.tags.some((tag) => tag.toLowerCase().includes(term))
          );
        })
        .slice(0, 25); // Limit to first 25 results
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [delayedSearchTerm, products]);

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="star">
            &#9733;
          </span>
        ); // Filled star
      } else {
        stars.push(
          <span key={i} className="star">
            &#9734;
          </span>
        ); // Empty star
      }
    }
    return stars;
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
          <div key={product.id} className="search-result-item" onClick={() => navigate(`/product/${product.id}`)}>
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

// Define the prop types for SearchBar
SearchBar.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      image: PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      }),
      price: PropTypes.number.isRequired,
      discountedPrice: PropTypes.number,
      rating: PropTypes.number
    })
  )
};

export default SearchBar;
