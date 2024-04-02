import { createContext, useReducer, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { API_PRODUCTS } from "../../shared/apis";

const initialState = {
  products: [],
  loading: true,
  error: null,
  selectedTag: "",
  searchTerm: "",
  selectedRating: 0,
  selectedPriceRange: "",
  selectedDiscountRange: "",
  currentPage: 1,
  totalPages: 0,
  totalCount: 0,
  pageSize: 10,
};

function productReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        currentPage: action.payload.meta.currentPage,
        totalPages: action.payload.meta.pageCount,
        totalCount: action.payload.meta.totalCount,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_PAGE_SIZE":
      return { ...state, pageSize: action.payload };
    case "SET_SELECTED_TAG":
      return { ...state, selectedTag: action.payload };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_SELECTED_RATING":
      return { ...state, selectedRating: action.payload };
    case "SET_SELECTED_PRICE_RANGE":
      return { ...state, selectedPriceRange: action.payload };
    case "SET_SELECTED_DISCOUNT_RANGE":
      return { ...state, selectedDiscountRange: action.payload };
    default:
      return state;
  }
}

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const setPageSize = (pageSize) => dispatch({ type: "SET_PAGE_SIZE", payload: pageSize });

  const fetchData = useCallback(
    async (page) => {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await fetch(`${API_PRODUCTS}?page=${page}&limit=${state.pageSize}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    },
    [state.pageSize]
  );

  useEffect(() => {
    fetchData(state.currentPage);
  }, [state.currentPage, fetchData]);

  const setPage = (page) => dispatch({ type: "SET_PAGE", payload: page });

  const value = useMemo(
    () => ({
      ...state,
      setPage,
      setPageSize,
      setProducts: (products) => dispatch({ type: "FETCH_SUCCESS", payload: products }),
      setSearchTerm: (term) => dispatch({ type: "SET_SEARCH_TERM", payload: term }),
      setSelectedTag: (tag) => dispatch({ type: "SET_SELECTED_TAG", payload: tag }),
      setSelectedRating: (rating) => dispatch({ type: "SET_SELECTED_RATING", payload: rating }),
      setSelectedPriceRange: (range) => dispatch({ type: "SET_SELECTED_PRICE_RANGE", payload: range }),
      setSelectedDiscountRange: (range) => dispatch({ type: "SET_SELECTED_DISCOUNT_RANGE", payload: range }),
    }),
    [state]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
