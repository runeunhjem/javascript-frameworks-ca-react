import propTypes from "prop-types";
import * as S from "./index.styled";
import { ResetLink } from "../CategorySelector/index.styled";

function SortComponent({ onSortChange, sortOption }) {
  return (
    <S.SelectorContainer>
      <S.SortContainer>
        <S.Label htmlFor="sort-select">Sort By</S.Label>
        <ResetLink onClick={() => onSortChange("")}>Reset</ResetLink>
      </S.SortContainer>
      <S.Select id="sort-select" value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort By</option>
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
        <option value="title_a_z">Title: A-Z</option>
        <option value="title_z_a">Title: Z-A</option>
      </S.Select>
    </S.SelectorContainer>
  );
}

SortComponent.propTypes = {
  onSortChange: propTypes.func.isRequired,
  sortOption: propTypes.string.isRequired,
};

export default SortComponent;
