import ProductCard from "../ProductCard";
import SortAndFilterContainer from "../SortAndFilterContainer";
import { useProducts } from "../../contexts/ProductContext/useProducts";
import { useFilterVisibility } from "../../contexts/FilterVisibilityContext/FilterVisibilityContext";
import * as S from "./index.styled";
import VisuallyHidden from "../VisuallyHidden";
import StylishLoader from "../StylishLoader/index.styled";

function OnlineShop() {
  // Make sure setSelectedTag is included here
  const { products, loading, error, selectedTag, setSelectedTag, selectedRating, setSelectedRating } = useProducts();
  const { isFilterVisible } = useFilterVisibility();

  const filteredProducts = products.filter((product) => {
    const tagMatches = selectedTag ? product.tags.includes(selectedTag) : true;
    let ratingMatches = false;
    if (selectedRating === 0) {
      ratingMatches = true; // No filter applied
    } else if (selectedRating === -1) {
      ratingMatches = product.reviews.length === 0; // Products with no reviews
    } else {
      ratingMatches = product.rating === selectedRating; // Exact rating match
    }
    return tagMatches && ratingMatches;
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
          setSelectedRating={setSelectedRating} // Make sure this is passed
        />
      )}
      <S.ProductCardsContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <S.NoResults>No results found.</S.NoResults> // Add this line
        )}
      </S.ProductCardsContainer>
    </S.OnlineShopContainer>
  );
}

export default OnlineShop;


