import ProductCard from "../ProductCard";
import SortAndFilterContainer from "../SortAndFilterContainer";
import { useProducts } from "../../contexts/ProductContext";
import { useFilterVisibility } from "../../contexts/FilterVisibilityContext/FilterVisibilityContext";
import * as S from "./index.styled";
import VisuallyHidden from "../VisuallyHidden";
import StylishLoader from "../StylishLoader/index.styled";


function OnlineShop() {
  const { products, loading, error, selectedTag, setSelectedTag } = useProducts();
  const { isFilterVisible } = useFilterVisibility();

  const filteredProducts = selectedTag ? products.filter((product) => product.tags.includes(selectedTag)) : products;

  if (loading) return (
    <S.LoaderContainer>
      <S.OnlineShopP>Loading...</S.OnlineShopP>
      <StylishLoader />
    </S.LoaderContainer>
  );
  if (error) return <p>Error: {error}</p>;

  const tags = Array.from(new Set(products.flatMap((product) => product.tags))).sort();

  return (
    <S.OnlineShopContainer>
      <VisuallyHidden>
        <S.OnlineShopH1>Products</S.OnlineShopH1>
      </VisuallyHidden>
      {isFilterVisible && <SortAndFilterContainer selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />}
      <S.ProductCardsContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductCardsContainer>
    </S.OnlineShopContainer>
  );
}

export default OnlineShop;
