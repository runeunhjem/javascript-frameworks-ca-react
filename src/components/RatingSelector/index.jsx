// RatingSelector.jsx
import { useProducts } from "../../contexts/ProductContext/useProducts";
import * as S from "./index.styled"; // Adjust the import path as necessary

function RatingSelector() {
  const { selectedRating, setSelectedRating } = useProducts();

  return (
    <S.SelectorContainer>
      <S.Label htmlFor="rating-select">Rating: </S.Label>
      <S.Select id="rating-select" value={selectedRating} onChange={(e) => setSelectedRating(Number(e.target.value))}>
        <option value={0}>All Ratings</option>
        <option value={-1}>No ratings</option>
        {[1, 2, 3, 4, 5].map((rating) => (
          <option key={rating} value={rating}>
            {rating} Stars
          </option>
        ))}
      </S.Select>
    </S.SelectorContainer>
  );
}

export default RatingSelector;
