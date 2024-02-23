import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import "./index.css";

function SearchBar() {
  // Local state for input value
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const navigate = useNavigate();
  const { products, setSearchTerm } = useProducts(); // Access setSearchTerm from your context

  // Lookahead search results based on localSearchTerm
  const filteredProducts = useMemo(() => {
    const lowerCaseTerm = localSearchTerm.toLowerCase();
    return localSearchTerm.trim()
      ? products
          .filter(
            (product) =>
              product.title.toLowerCase().includes(lowerCaseTerm) ||
              product.description.toLowerCase().includes(lowerCaseTerm) ||
              product.tags.some((tag) => tag.toLowerCase().includes(lowerCaseTerm))
          )
          .slice(0, 25)
      : []; // Limit to first 25 results
  }, [localSearchTerm, products]);

  // Handle clicking on a product from lookahead results
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSearchTerm(localSearchTerm); // Update the global search term for fetching search results
    navigate("/search"); // Navigate to a dedicated search results page
    setLocalSearchTerm(""); // Optionally clear the search input after submit
  };

  // Function to render stars based on a rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={`star ${i <= rating ? "bi-star-fill" : "bi-star"}`}></span>);
    }
    return <div className="search-result-rating">{stars}</div>;
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <div className="searchBlock">
        <input
          id="productSearch"
          type="search"
          placeholder="Search products, categories or descriptions..."
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
        />
          <button className="searchButton" type="submit">
            <i className="bi bi-search"></i> {/* Bootstrap search icon */}
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
