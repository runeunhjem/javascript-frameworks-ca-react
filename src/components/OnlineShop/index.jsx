// import SearchBar from "../SearchBar";
import ProductCard from "../ProductCard";
import CategorySelector from "../CategorySelector";
import { useProducts } from "../../contexts/ProductContext"; // Adjust path as necessary

function OnlineShop() {
  const { products, loading, error, selectedTag, setSelectedTag } = useProducts();

  // Filter products by selected tag
  const filteredProducts = selectedTag ? products.filter((product) => product.tags.includes(selectedTag)) : products;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Extract unique tags from products for the CategorySelector
  const tags = Array.from(new Set(products.flatMap((product) => product.tags))).sort();

  return (
    <div className="OnlineShop">
      <h1 className="visually-hidden">Online Shop Products</h1>
      <div className="sort-and-filter-container">
        <h2>Products</h2>
        <CategorySelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />
        {/* <SearchBar /> */}
      </div>
      <div className="product-cards" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OnlineShop;
