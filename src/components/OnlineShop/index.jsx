import React, { useState, useContext, useMemo } from "react";
import ProductCard from "../ProductCard";
import SortAndFilterContainer from "../SortAndFilterContainer";
import SortComponent from "../SortComponent";
import { ProductContext } from "../../contexts/ProductContext";
import { useFilterVisibility } from "../../contexts/FilterVisibilityContext/FilterVisibilityContext";
import * as S from "./index.styled";
import VisuallyHidden from "../VisuallyHidden";
import StylishLoader from "../StylishLoader/index.styled";

function OnlineShop() {
  const {
    products,
    loading,
    error,
    currentPage,
    totalPages,
    setPage,
    pageSize,
    setPageSize,
    selectedTag,
    setSelectedTag,
    selectedRating,
    setSelectedRating,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedDiscountRange,
    setSelectedDiscountRange,
  } = useContext(ProductContext);

  const { isFilterVisible } = useFilterVisibility();
  const [sortOption, setSortOption] = useState("");

  const sortedAndFilteredProducts = React.useMemo(() => {
    return products
      .filter((product) => {
        const tagMatches = !selectedTag || product.tags.includes(selectedTag);
        const ratingMatches =
          selectedRating === 0 ||
          product.rating === selectedRating ||
          (selectedRating === -1 && product.reviews.length === 0);

        let priceMatches = true;
        const normalizedPrice = (product.discountedPrice || product.price) / 10;
        if (selectedPriceRange) {
          switch (selectedPriceRange) {
            case "under10":
              priceMatches = normalizedPrice < 10;
              break;
            case "10to50":
              priceMatches = normalizedPrice >= 10 && normalizedPrice <= 50;
              break;
            case "50to100":
              priceMatches = normalizedPrice > 50 && normalizedPrice <= 100;
              break;
            case "over100":
              priceMatches = normalizedPrice > 100;
              break;
            default:
              break;
          }
        }

        let discountMatches = true;
        if (selectedDiscountRange) {
          const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;
          const normalizedDiscountedPrice = hasDiscount ? product.discountedPrice / 10 : normalizedPrice;
          const discountPercentage = hasDiscount
            ? ((normalizedPrice - normalizedDiscountedPrice) / normalizedPrice) * 100
            : 0;

          switch (selectedDiscountRange) {
            case "showAll":
              discountMatches = true;
              break;
            case "under10":
              discountMatches = discountPercentage > 0 && discountPercentage < 10;
              break;
            case "10to20":
              discountMatches = discountPercentage >= 10 && discountPercentage < 20;
              break;
            case "20to30":
              discountMatches = discountPercentage >= 20 && discountPercentage < 30;
              break;
            case "30to40":
              discountMatches = discountPercentage >= 30 && discountPercentage < 40;
              break;
            case "40to50":
              discountMatches = discountPercentage >= 40 && discountPercentage < 50;
              break;
            case "over50":
              discountMatches = discountPercentage >= 50;
              break;
            case "notOnSale":
              // Items that don't have a discountedPrice at all or if discountedPrice is zero
              discountMatches = !hasDiscount;
              break;
            default:
              // Error state or log for debugging since all cases should be covered
              console.warn("Unexpected selectedDiscountRange value:", selectedDiscountRange);
              break;
          }
        }

        return tagMatches && ratingMatches && priceMatches && discountMatches;
      })
      .sort((a, b) => {
        const bDiscountPercent = ((b.price - b.discountedPrice) / b.price) * 100;
        const aDiscountPercent = ((a.price - a.discountedPrice) / a.price) * 100;
        const aDiscountPercentLowHigh = ((a.price - a.discountedPrice) / a.price) * 100;
        const bDiscountPercentLowHigh = ((b.price - b.discountedPrice) / b.price) * 100;
        const bDiscountAmount = b.price - b.discountedPrice;
        const aDiscountAmount = a.price - a.discountedPrice;
        const aDiscountAmountLowHigh = a.price - a.discountedPrice;
        const bDiscountAmountLowHigh = b.price - b.discountedPrice;
        switch (sortOption) {
          case "price_high_to_low":
            return b.price - a.price;
          case "price_low_to_high":
            return a.price - b.price;
          case "rating_high_to_low":
            return b.rating - a.rating;
          case "rating_low_to_high":
            return a.rating - b.rating;
          case "reviews_high_to_low":
            return b.reviews.length - a.reviews.length;
          case "reviews_low_to_high":
            return a.reviews.length - b.reviews.length;
          case "discount_percent_high_to_low":
            return bDiscountPercent - aDiscountPercent;
          case "discount_percent_low_to_high":
            return aDiscountPercentLowHigh - bDiscountPercentLowHigh;
          case "discount_amount_high_to_low":
            return bDiscountAmount - aDiscountAmount;
          case "discount_amount_low_to_high":
            return aDiscountAmountLowHigh - bDiscountAmountLowHigh;
          case "title_a_z":
            return a.title.localeCompare(b.title);
          case "title_z_a":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
  }, [products, sortOption, selectedTag, selectedRating, selectedPriceRange, selectedDiscountRange]);

  // Function to navigate to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  // Function to navigate to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  // Handler for changing page size
  const handlePageSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setPageSize(newSize);
    setPage(1); // Reset to the first page when changing page size
  };

  // Calculate unique tags from the current list of products
  const uniqueTags = useMemo(() => {
    const allTags = products.flatMap((product) => product.tags || []);
    return [...new Set(allTags)];
  }, [products]);

  if (loading) {
    return (
      <S.LoaderContainer>
        <S.OnlineShopP>Loading...</S.OnlineShopP>
        <StylishLoader />
      </S.LoaderContainer>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <S.OnlineShopContainer>
      <VisuallyHidden>
        <S.OnlineShopH1>Products</S.OnlineShopH1>
      </VisuallyHidden>
      {isFilterVisible && (
        <SortAndFilterContainer
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          tags={uniqueTags}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedDiscountRange={selectedDiscountRange}
          setSelectedDiscountRange={setSelectedDiscountRange}
          resetSort={() => setSortOption("")}>
          <SortComponent key={sortOption} onSortChange={setSortOption} sortOption={sortOption} />
        </SortAndFilterContainer>
      )}
      <S.PaginationControls>
        <S.PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </S.PaginationButton>
        <S.CurrentPageWrapper>
          <S.Label htmlFor="pageSizeSelect">Items Per Page:</S.Label>
          <S.PageSizeSelect id="pageSizeSelect" onChange={handlePageSizeChange} value={pageSize}>
            {[1, 5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </S.PageSizeSelect>
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </S.CurrentPageWrapper>
        <S.PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </S.PaginationButton>
      </S.PaginationControls>
      <S.ProductCardsContainer>
        {sortedAndFilteredProducts.length > 0 ? (
          sortedAndFilteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <S.NoResults>No results found.</S.NoResults>
        )}
      </S.ProductCardsContainer>
    </S.OnlineShopContainer>
  );
}

export default OnlineShop;
