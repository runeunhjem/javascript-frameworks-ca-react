// RatingSelector.jsx
import { useProducts } from "../../hooks/useProducts";
import * as S from "./index.styled"; // Adjust the import path as necessary

function RatingSelector() {
  const { selectedRating, setSelectedRating } = useProducts();
  const resetFilter = () => setSelectedRating(0);

  return (
    <S.SelectorContainer>
      <S.LabelContainer>
        <S.Label htmlFor="rating-select">Rating: </S.Label>
        <S.ResetLink onClick={resetFilter} role="button" tabIndex={0}>
          Reset
        </S.ResetLink>
      </S.LabelContainer>
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
