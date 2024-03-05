import { useEffect, useMemo } from "react";
import { useProducts } from "../../contexts/ProductContext/useProducts";
import ProductCard from "../../components/ProductCard";

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
    <div className="product-cards">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default SearchResultsPage;
