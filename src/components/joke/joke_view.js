import React, { useContext } from "react";
import SelectedCategoryContext from "../../state/SelectedCategoryState";
import MyLoader from "../loader/loader";
import { Div, Paragraph } from "./joke.styled";
import { RedoOutlined } from "@ant-design/icons";

export default function JokeView(props) {
  const { loading, error, data, changeCategory, selectedCategory } = useContext(
    SelectedCategoryContext
  );

  if (loading)
    return (
      <Div>
        <MyLoader active={true} />
      </Div>
    );
  if (error)
    return (
      <Div>
        <blockquote>
          <Paragraph>error</Paragraph>
        </blockquote>
      </Div>
    );
  return (
    <Div>
      <blockquote>
        <Paragraph>{data.joke.value}</Paragraph>
      </blockquote>
      <RedoOutlined
        onClick={() => changeCategory(selectedCategory)}
        style={{
          fontSize: "40px",
          width: "100%",
          margin: "0 auto",
          color: "#7FFF00",
          fontWeight: "700"
        }}
      />
    </Div>
  );
}
