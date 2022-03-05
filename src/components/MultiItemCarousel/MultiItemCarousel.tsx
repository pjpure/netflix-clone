import React from "react";
import { Wrapper } from "./MultiItemCarousel.styles";
import Card from "../Card/Card";
import myHero from "../../assets/my-hero.png";
function MultiItemCarousel() {
  return (
    <Wrapper>
      <Card img={myHero} video="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
      <Card img={myHero} video="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
      <Card img={myHero} video="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
      <Card img={myHero} video="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
      <Card img={myHero} video="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
    </Wrapper>
  );
}

export default MultiItemCarousel;
