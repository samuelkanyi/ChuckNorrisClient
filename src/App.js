import React from "react";
import "./styles.css";
import "antd/dist/antd.css";

import { CategoryProvider } from "./state/CategoryState";
import { SelectedCategoryProvider } from "./state/SelectedCategoryState";
import Home from "./pages/Home";

export default function App(props) {
  return (
    <CategoryProvider>
      <SelectedCategoryProvider>
        <Home />
      </SelectedCategoryProvider>
    </CategoryProvider>
  );
}
