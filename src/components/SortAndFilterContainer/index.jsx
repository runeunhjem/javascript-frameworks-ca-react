// SortAndFilterContainer.jsx
import PropTypes from "prop-types";
import CategorySelector from "../CategorySelector";

function SortAndFilterContainer({ selectedTag, setSelectedTag, tags }) {
  return (
    <div className="sort-and-filter-container">
      <h2>Sort and Filter</h2>
      <CategorySelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />
      {/* Add sorting options here if needed */}
    </div>
  );
}

SortAndFilterContainer.propTypes = {
  selectedTag: PropTypes.string,
  setSelectedTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortAndFilterContainer;
