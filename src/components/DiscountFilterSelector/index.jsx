import PropTypes from "prop-types";
import * as S from "./index.styled";

function DiscountFilterSelector({ selectedDiscountRange, setSelectedDiscountRange }) {
  const resetFilter = () => setSelectedDiscountRange("");
  return (
    <S.SelectorContainer>
      <S.LabelContainer>
        <S.Label htmlFor="discount-select">Discount: </S.Label>
        <S.ResetLink onClick={resetFilter} role="button" tabIndex={0}>
          Reset
        </S.ResetLink>
      </S.LabelContainer>
      <S.Select
        id="discount-select"
        value={selectedDiscountRange}
        onChange={(e) => setSelectedDiscountRange(e.target.value)}>
        <option value="showAll">Show all</option>
        <option value="allDiscounted">All discounted</option>
        <option value="notOnSale">Not on sale</option>
        <option value="under10">Under 10%</option>
        <option value="10to20">10% - 20%</option>
        <option value="20to30">20% - 30%</option>
        <option value="30to40">30% - 40%</option>
        <option value="40to50">40% - 50%</option>
        <option value="over50">Over 50%</option>
      </S.Select>
    </S.SelectorContainer>
  );
}

DiscountFilterSelector.propTypes = {
  selectedDiscountRange: PropTypes.string.isRequired,
  setSelectedDiscountRange: PropTypes.func.isRequired,
};

export default DiscountFilterSelector;
