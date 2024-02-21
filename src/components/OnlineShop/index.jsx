import { useState, useEffect } from "react";
import SearchBar from "../SearchBar"; // Import the SearchBar component
import ProductCard from "../ProductCard"; // Import the ProductCard component

function OnlineShop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Extract unique tags
  const tags = Array.from(new Set(products.flatMap((product) => product.tags))).sort((a, b) => a.localeCompare(b));

  // Filter products by selected tag
  const filteredProducts = selectedTag ? products.filter((product) => product.tags.includes(selectedTag)) : products;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="OnlineShop">
      <h1 className="visually-hidden">Online Shop Products</h1>
      <div className="sort-and-filter-container">
        <div className="categories">
          <label htmlFor="tag-select" className="tag-label visually-hidden">
            Categories:{" "}
          </label>
          <select id="tag-select" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
            <option value="">Categories</option>
            {tags.map((tag) => (
              // Capitalize the first letter of each word in the tag
              <option key={tag} value={tag}>
                {capitalizeWords(tag)}
              </option>
            ))}
          </select>
        </div>
        <SearchBar products={products} />
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
