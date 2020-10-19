import React, { useContext } from "react";
import CategoriesContext from "../state/CategoryState";
import CategoryTable from "../components/table/category_table";
import JokeView from "../components/joke/joke_view";
import { Div } from "./home.styled";
import MyLoader from "../components/loader/loader";

export default function Home() {
  const { loading, error, data } = useContext(CategoriesContext);
  if (loading) return <MyLoader active={true} text="INITIALIZING🚀🚀🚀" />;
  if (error) return <h1>Error occured</h1>;
  return (
    <Div>
      <CategoryTable data={data.categories} />
      <JokeView name="" />
    </Div>
  );
}
