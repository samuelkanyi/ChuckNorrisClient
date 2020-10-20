import { useQuery } from "@apollo/client";
import React, { useReducer } from "react";
import { RANDOM } from "../constants";
import reducer from "./reducer";

const initialState = {
  selectedCategory: "travel"
};

const SelectedCategoryContext = React.createContext(initialState);

export const SelectedCategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeCategory = (category) => {
    dispatch({ type: "change_category", payload: category });
  };
  const { loading, error, data, refetch } = useQuery(RANDOM, {
    variables: { category: state.selectedCategory },
    fetchPolicy: "cache-and-network"
  });

  return (
    <SelectedCategoryContext.Provider
      value={{
        loading,
        error,
        data,
        changeCategory,
        selectedCategory: state.selectedCategory,
        refetch
      }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export default SelectedCategoryContext;
