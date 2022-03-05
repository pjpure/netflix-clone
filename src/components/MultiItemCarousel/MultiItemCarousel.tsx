import React from "react";
import { Wrapper } from "./MultiItemCarousel.styles";
import Card from "../Card/Card";
import movies from "../../data/movies";

function MultiItemCarousel() {
  return (
    <Wrapper>
      {movies.map((movie) => {
        return <Card {...movie} />;
      })}
    </Wrapper>
  );
}

export default MultiItemCarousel;
