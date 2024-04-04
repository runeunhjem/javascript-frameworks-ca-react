import { useEffect, useMemo } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";
import * as S from "./index.styled";

function SearchResultsPage() {
  useEffect(() => {
    document.title = "Search results";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.getElementsByTagName("head")[0].appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Discover the best gifts with our search feature. Browse a wide selection of gifts that match your search criteria."
    );
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
