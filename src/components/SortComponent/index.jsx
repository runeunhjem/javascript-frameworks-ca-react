import propTypes from "prop-types";
import * as S from "./index.styled";
import VisuallyHidden from "../VisuallyHidden";

function SortComponent({ onSortChange }) {
  return (
    <S.SelectorContainer>
      <VisuallyHidden>
      <S.Label htmlFor="sort-select">Sort By</S.Label>
      </VisuallyHidden>
      <S.Select id="sort-select" onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort</option>
        <option value="price_high_to_low">Price: High to Low</option>
        <option value="price_low_to_high">Price: Low to High</option>
        <option value="rating_high_to_low">Rating: High to Low</option>
        <option value="rating_low_to_high">Rating: Low to High</option>
        <option value="reviews_high_to_low">Number of Reviews: High to Low</option>
        <option value="reviews_low_to_high">Number of Reviews: Low to High</option>
        <option value="discount_percent_high_to_low">Discount %: High to Low</option>
        <option value="discount_percent_low_to_high">Discount %: Low to High</option>
        <option value="discount_amount_high_to_low">Discount $: High to Low</option>
        <option value="discount_amount_low_to_high">Discount $: Low to High</option>
      </S.Select>
    </S.SelectorContainer>
  );
}

SortComponent.propTypes = {
  onSortChange: propTypes.func.isRequired,
};

export default SortComponent;
