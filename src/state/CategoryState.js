import { useQuery } from "@apollo/client";
import React from "react";
import { CATEGORIES } from "../constants";

const CategoryContext = React.createContext({});

export const CategoryProvider = ({ children }) => {
  const { loading, error, data } = useQuery(CATEGORIES);

  return (
    <CategoryContext.Provider
      value={{
        loading,
        error,
        data
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
