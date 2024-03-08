// index.jsx
import { useProducts } from "../../hooks/useProducts";
import * as S from "./index.styled"; // Import styled components with alias S

function CategorySelector() {
  const { selectedTag, setSelectedTag, products } = useProducts();
  const resetFilter = () => setSelectedTag("");

  const tags = Array.from(new Set(products.flatMap((product) => product.tags))).sort();

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <S.CategoriesContainer>
      <S.LabelContainer>
        <S.TagLabel htmlFor="tag-select">Categories: </S.TagLabel>
        <S.ResetLink onClick={resetFilter} role="button" tabIndex={0}>
          Reset
        </S.ResetLink>
      </S.LabelContainer>
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
