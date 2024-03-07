import ProductCard from "../ProductCard";
import SortAndFilterContainer from "../SortAndFilterContainer";
import { useProducts } from "../../contexts/ProductContext/useProducts";
import { useFilterVisibility } from "../../contexts/FilterVisibilityContext/FilterVisibilityContext";
import * as S from "./index.styled";
import VisuallyHidden from "../VisuallyHidden";
import StylishLoader from "../StylishLoader/index.styled";

function OnlineShop() {
  const {
    products,
    loading,
    error,
    selectedTag,
    setSelectedTag,
    selectedRating,
    setSelectedRating,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedDiscountRange,
    setSelectedDiscountRange,
  } = useProducts();
  const { isFilterVisible } = useFilterVisibility();

  const filteredProducts = products.filter((product) => {
    const tagMatches = !selectedTag || product.tags.includes(selectedTag);
    const ratingMatches =
      selectedRating === 0 || product.rating === selectedRating || (selectedRating === -1 && product.reviews.length === 0);
    let priceMatches = true; // Default to true (no filter)
    if (selectedPriceRange) {
      // Normalize the price by dividing by 10 due to API data
      const normalizedPrice = (product.discountedPrice || product.price) / 10;
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
          break; // No filter or unknown filter
      }
    }

    let discountMatches = true; // Default to true as a fallback, especially for "Show all" scenario
    if (selectedDiscountRange) {
      const normalizedPrice = product.price / 10;
      // Adjust logic to consider if discountedPrice is actually provided and not 0
      const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;
      const normalizedDiscountedPrice = hasDiscount ? product.discountedPrice / 10 : normalizedPrice; // Use normalizedPrice if no discount
      const discountPercentage = hasDiscount ? ((normalizedPrice - normalizedDiscountedPrice) / normalizedPrice) * 100 : 0;

      switch (selectedDiscountRange) {
        case "showAll":
          discountMatches = true; // Explicitly handle "Show all" option to ensure clarity
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
          // This could be an error state or log for debugging since all cases should be covered
          console.warn("Unexpected selectedDiscountRange value:", selectedDiscountRange);
          break;
      }
    }

    return tagMatches && ratingMatches && priceMatches && discountMatches;
  });

  if (loading) {
    return (
      <S.LoaderContainer>
        <S.OnlineShopP>Loading...</S.OnlineShopP>
        <StylishLoader />
      </S.LoaderContainer>
    );
  }

  if (error) return <p>Error: {error}</p>;

  const tags = Array.from(new Set(products.flatMap((product) => product.tags))).sort();

  return (
    <S.OnlineShopContainer>
      <VisuallyHidden>
        <S.OnlineShopH1>Products</S.OnlineShopH1>
      </VisuallyHidden>
      {isFilterVisible && (
        <SortAndFilterContainer
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          tags={tags}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedDiscountRange={selectedDiscountRange}
          setSelectedDiscountRange={setSelectedDiscountRange}
        />
      )}
      <S.ProductCardsContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <S.NoResults>No results found.</S.NoResults>
        )}
      </S.ProductCardsContainer>
    </S.OnlineShopContainer>
  );
}

export default OnlineShop;
