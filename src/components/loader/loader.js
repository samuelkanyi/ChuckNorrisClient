import React from "react";
import { StyledLoader } from "./loader.styled";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function MyLoader({ active, children, text }) {
  console.log(children);
  return (
    <StyledLoader
      active={active}
      classNamePrefix="MyLoader_"
      text={text}
      spinner={<PacmanLoader color={"#FFC0CB"} />}
    >
      {children}
    </StyledLoader>
  );
}
