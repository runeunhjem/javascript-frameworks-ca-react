import { useEffect, useMemo } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";
import * as S from "./index.styled";

function SearchResultsPage() {
  useEffect(() => {
    document.title = "Search results";
  }, []);

  const { products, searchTerm } = useProducts();

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [products, searchTerm]);

  return (
    <>
      <S.Heading>Search Results</S.Heading>
      <S.SearchResultInfo>
        Displaying {filteredProducts.length} results for &quot;{searchTerm}&quot;
      </S.SearchResultInfo>
      <S.ProductCards>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductCards>
    </>
  );
}

export default SearchResultsPage;
