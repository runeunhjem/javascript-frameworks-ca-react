import ProductCard from "../ProductCard";
import SortAndFilterContainer from "../SortAndFilterContainer"; // Import the new component
import { useProducts } from "../../contexts/ProductContext"; // Adjust the import path as necessary

function OnlineShop() {
  const { products, loading, error, selectedTag, setSelectedTag } = useProducts();

  // Calculate filteredProducts based on selectedTag
  const filteredProducts = selectedTag ? products.filter((product) => product.tags.includes(selectedTag)) : products;

  // Early return patterns for loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Extract unique tags from products for the SortAndFilterContainer
  const tags = Array.from(new Set(products.flatMap((product) => product.tags))).sort();

  return (
    <div className="OnlineShop">
      <h1 className="visually-hidden">Products</h1>
      <SortAndFilterContainer selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OnlineShop;
