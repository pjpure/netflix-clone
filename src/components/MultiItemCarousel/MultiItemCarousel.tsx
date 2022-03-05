import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

//import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./MultiItemCarousel.css";

//hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

function MultiItemCarousel({ type, data }: { type: string; data: any }) {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(data.length);

  const { width } = useWindowDimensions();

  // useEffect(() => {
  //   setStartIndex(0);
  //   setEndIndex(Math.floor(width / 370));
  // }, [width]);

  return (
    <div className="multi-item">
      <h4 style={{ color: "white", marginBottom: "10px" }}>{type}</h4>
      <div className="slider">
        {data
          .filter((item: any, idx: number) => {
            return idx >= startIndex && idx < endIndex;
          })
          .map((item: any) => {
            return <Card {...item} />;
          })}
      </div>
    </div>
  );
}

export default MultiItemCarousel;
