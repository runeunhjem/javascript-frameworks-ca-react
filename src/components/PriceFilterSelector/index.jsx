import PropTypes from "prop-types";
import * as S from "./index.styled";

function PriceFilterSelector({ selectedPriceRange, setSelectedPriceRange }) {
  return (
    <S.SelectorContainer>
      <S.Label htmlFor="price-select">Price Range: </S.Label>
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
