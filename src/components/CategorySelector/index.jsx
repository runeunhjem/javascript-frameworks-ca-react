// index.jsx
import { useProducts } from "../../contexts/ProductContext"; // Adjust the import path as necessary
import * as S from "./index.styled"; // Import styled components with alias S

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
    <S.CategoriesContainer>
      <S.TagLabel htmlFor="tag-select" className="visually-hidden">
        Categories:{" "}
      </S.TagLabel>
      <S.TagSelect id="tag-select" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
        <option value="">Categories</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {capitalizeWords(tag)}
          </option>
        ))}
      </S.TagSelect>
    </S.CategoriesContainer>
  );
}

export default CategorySelector;
