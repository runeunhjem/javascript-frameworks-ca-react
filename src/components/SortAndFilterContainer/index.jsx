import PropTypes from "prop-types";
import CategorySelector from "../CategorySelector";
import * as S from "./index.styled.jsx";

function SortAndFilterContainer({ selectedTag, setSelectedTag, tags }) {
  return (
    <S.SortAndFilterContainerStyled>
      <h2>Sort and Filter</h2>
      <CategorySelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />
    </S.SortAndFilterContainerStyled>
  );
}

SortAndFilterContainer.propTypes = {
  selectedTag: PropTypes.string,
  setSelectedTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortAndFilterContainer;
