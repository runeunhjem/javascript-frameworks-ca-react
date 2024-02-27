import { useState } from "react";
import PropTypes from "prop-types";
import { FilterVisibilityContext } from "./FilterVisibilityContext";

export const FilterVisibilityProvider = ({ children }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => setIsFilterVisible(!isFilterVisible);

  return (
    <FilterVisibilityContext.Provider value={{ isFilterVisible, toggleFilterVisibility }}>
      {children}
    </FilterVisibilityContext.Provider>
  );
};

FilterVisibilityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
