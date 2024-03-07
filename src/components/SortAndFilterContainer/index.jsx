import PropTypes from "prop-types";
import CategorySelector from "../CategorySelector";
import RatingSelector from "../RatingSelector/index.jsx";
import * as S from "./index.styled.jsx";

function SortAndFilterContainer({ selectedTag, setSelectedTag, tags, selectedRating, setSelectedRating }) {
  return (
    <S.SortAndFilterWrapperStyled>
      <h2>Sort and Filter</h2>
      <S.SortAndFilterContainerStyled>
        <CategorySelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />
        <RatingSelector selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
      </S.SortAndFilterContainerStyled>
    </S.SortAndFilterWrapperStyled>
  );
}

SortAndFilterContainer.propTypes = {
  selectedTag: PropTypes.string,
  setSelectedTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedRating: PropTypes.number.isRequired,
  setSelectedRating: PropTypes.func.isRequired,
};

export default SortAndFilterContainer;
