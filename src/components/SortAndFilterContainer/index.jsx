import PropTypes from "prop-types";
import CategorySelector from "../CategorySelector";
import RatingSelector from "../RatingSelector";
import PriceFilterSelector from "../PriceFilterSelector";
import DiscountFilterSelector from "../DiscountFilterSelector";
import * as S from "./index.styled";

function SortAndFilterContainer({
  selectedTag,
  setSelectedTag,
  tags,
  selectedRating,
  setSelectedRating,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedDiscountRange,
  setSelectedDiscountRange,
  children,
}) {
  function resetFilters() {
    setSelectedTag("");
    setSelectedRating(0);
    setSelectedPriceRange("");
    setSelectedDiscountRange("");
  }

  return (
    <S.SortAndFilterWrapperStyled>
      <S.SortAndFilterHeaderWrapper>
        <S.SortAndFilterH2>Sort and Filter</S.SortAndFilterH2>
        <S.ResetLink onClick={resetFilters}>(Reset)</S.ResetLink>
      </S.SortAndFilterHeaderWrapper>
      <S.SortAndFilterContainerStyled>
        <CategorySelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />
        <RatingSelector selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
        <PriceFilterSelector selectedPriceRange={selectedPriceRange} setSelectedPriceRange={setSelectedPriceRange} />
        <DiscountFilterSelector
          selectedDiscountRange={selectedDiscountRange}
          setSelectedDiscountRange={setSelectedDiscountRange}
        />
      </S.SortAndFilterContainerStyled>
      {children /* Render SortComponent here */}
    </S.SortAndFilterWrapperStyled>
  );
}

SortAndFilterContainer.propTypes = {
  selectedTag: PropTypes.string,
  setSelectedTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedRating: PropTypes.number.isRequired,
  setSelectedRating: PropTypes.func.isRequired,
  selectedPriceRange: PropTypes.string.isRequired,
  setSelectedPriceRange: PropTypes.func.isRequired,
  selectedDiscountRange: PropTypes.string.isRequired,
  setSelectedDiscountRange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default SortAndFilterContainer;
