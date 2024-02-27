import { createContext, useContext } from "react";

const FilterVisibilityContext = createContext();

export const useFilterVisibility = () => useContext(FilterVisibilityContext);

export { FilterVisibilityContext };
