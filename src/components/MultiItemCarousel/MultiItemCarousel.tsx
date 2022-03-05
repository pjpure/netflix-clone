import React from "react";
import Card from "../Card/Card";

//import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./MultiItemCarousel.css";
function MultiItemCarousel({ type, data }: { type: string; data: any }) {
  return (
    <div className="multi-item">
      <h4 style={{ color: "white", marginBottom: "10px" }}>{type}</h4>
      <div className="slider">
        {data.map((item: any) => {
          return <Card {...item} />;
        })}
      </div>
    </div>
  );
}

export default MultiItemCarousel;
