import { createContext, useReducer, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

// Initial state for the context's data
const initialState = {
  products: [],
  loading: true,
  error: null,
  selectedTag: "",
  searchTerm: "",
};

// Reducer function to handle state updates
function productReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_SELECTED_TAG":
      return { ...state, selectedTag: action.payload };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

// Create a context
export const ProductContext = createContext();

// Custom hook to use the context
// export const useProducts = () => useContext(ProductContext);


// Context Provider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  // eslint-disable-next-line no-unused-vars
  // const setSearchTerm = (term) => {
  //   dispatch({ type: "SET_SEARCH_TERM", payload: term });
  // };

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    const fetchData = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      ...state,
      setProducts: (products) => dispatch({ type: "FETCH_SUCCESS", payload: products }),
      setSelectedTag: (tag) => dispatch({ type: "SET_SELECTED_TAG", payload: tag }),
      setSearchTerm: (term) => dispatch({ type: "SET_SEARCH_TERM", payload: term }),
    }),
    [state]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

// Prop validation for the provider
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
