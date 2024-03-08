import PropTypes from "prop-types";
import * as S from "./index.styled";

function PriceFilterSelector({ selectedPriceRange, setSelectedPriceRange }) {
  const resetFilter = () => setSelectedPriceRange("");
  return (
    <S.SelectorContainer>
      <S.LabelContainer>
        <S.Label htmlFor="price-select">Price: </S.Label>
        <S.ResetLink onClick={resetFilter} role="button" tabIndex={0}>
          Reset
        </S.ResetLink>
      </S.LabelContainer>
      <S.Select id="price-select" value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
        <option value="">All Prices</option>
        <option value="under10">Under $10</option>
        <option value="10to50">$10 - $50</option>
        <option value="50to100">$50 - $100</option>
        <option value="over100">Over $100</option>
      </S.Select>
    </S.SelectorContainer>
  );
}

PriceFilterSelector.propTypes = {
  selectedPriceRange: PropTypes.string.isRequired,
  setSelectedPriceRange: PropTypes.func.isRequired,
};

export default PriceFilterSelector;
