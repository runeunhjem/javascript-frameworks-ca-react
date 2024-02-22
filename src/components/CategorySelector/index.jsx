import { useProducts } from "../../contexts/ProductContext"; // Adjust the import path as necessary

function CategorySelector() {
  const { selectedTag, setSelectedTag, products } = useProducts();

  const tags = Array.from(new Set(products.flatMap((product) => product.tags))).sort();

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
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
  );
}

// Remove the propTypes validation for selectedTag, setSelectedTag, and tags
// as they are no longer passed as props.

export default CategorySelector;
