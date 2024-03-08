import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import VisuallyHidden from "../VisuallyHidden";
import * as S from "./index.styled.jsx";

function SearchBar() {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const navigate = useNavigate();
  const { products, setSearchTerm } = useProducts();
  const searchBarRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setLocalSearchTerm(""); // Reset search term, closing the results
      }
    };

    // Listen for both mousedown and touchstart events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      // Make sure to remove both event listeners on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [searchBarRef]);

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<S.Star key={i} className={`star ${i <= rating ? "bi-star-fill" : "bi-star"}`}></S.Star>);
    }
    return <S.SearchResultRating>{stars}</S.SearchResultRating>;
  };

  return (
    <S.SearchBarContainer onSubmit={handleSearchSubmit} ref={searchBarRef}>
      <S.SearchBlock>
        <VisuallyHidden>
          <S.SearchLabel htmlFor="productSearch">Search for products, categories, or descriptions</S.SearchLabel>
        </VisuallyHidden>
        <S.Input
          id="productSearch"
          type="search"
          placeholder="Search product, category or description"
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
        />
        <S.SearchButton type="submit">
          <i className="bi bi-search">
            <VisuallyHidden>Search</VisuallyHidden>
          </i>
        </S.SearchButton>
      </S.SearchBlock>
      {localSearchTerm && (
        <S.SearchResults>
          {filteredProducts.map((product) => (
            <S.SearchResultItem key={product.id} onClick={() => handleProductClick(product.id)}>
              <S.SearchResultImage
                src={product.image ? product.image.url : "https://via.placeholder.com/50"}
                alt={product.image && product.title ? product.image.alt : "Product image unavailable"}
              />
              <S.SearchResultInfo>
                <S.SearchResultTitle>{product.title}</S.SearchResultTitle>
                <S.SearchResultPriceInfo>
                  <S.SearchResultNormalPriceAndDiscount>
                    {product.discountedPrice < product.price && (
                      <>
                        <S.SearchResultNormalPrice>${(product.price / 10).toFixed(2)}</S.SearchResultNormalPrice>
                        <S.SearchResultDiscount>
                          -{Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                        </S.SearchResultDiscount>
                      </>
                    )}
                  </S.SearchResultNormalPriceAndDiscount>
                  {product.discountedPrice < product.price ? (
                    <S.SearchResultPrice className="discounted">
                      Now: ${(product.discountedPrice / 10).toFixed(2)}
                    </S.SearchResultPrice>
                  ) : (
                    <S.SearchResultPrice>${(product.price / 10).toFixed(2)}</S.SearchResultPrice>
                  )}
                </S.SearchResultPriceInfo>
                {renderStars(Math.round(product.rating))}
              </S.SearchResultInfo>
            </S.SearchResultItem>
          ))}
        </S.SearchResults>
      )}
    </S.SearchBarContainer>
  );
}

export default SearchBar;
