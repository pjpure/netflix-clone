import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./MultiItemCarousel.css";

//hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

function MultiItemCarousel({ type, data }: { type: string; data: any }) {
  const [numItem, setNumItem] = useState(5);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(numItem);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 650) {
      setNumItem(1);
    } else if (width < 890) {
      setNumItem(2);
    } else if (width < 1320) {
      setNumItem(3);
    } else if (width < 1580) {
      setNumItem(4);
    } else {
      setNumItem(5);
    }
  }, [width]);

  useEffect(() => {
    setStartIndex(0);
    setEndIndex(numItem);
  }, [numItem]);

  const handleNext = () => {
    if (endIndex < data.length) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  return (
    <div className="multi-item">
      <h4 style={{ marginBottom: "10px" }}>{type}</h4>
      {startIndex !== 0 && (
        <div className="arrow-left" onClick={handlePrev}>
          <AiOutlineLeft size={40} />
        </div>
      )}
      {endIndex < data.length && (
        <div className="arrow-right" onClick={handleNext}>
          <AiOutlineRight size={40} />
        </div>
      )}

      <div className="slider">
        {data
          .filter((item: any, idx: number) => {
            return idx >= startIndex && idx < endIndex;
          })
          .map((item: any, idx: number) => {
            return <Card key={idx} {...item} numItem={numItem} />;
          })}
      </div>
    </div>
  );
}

export default MultiItemCarousel;
