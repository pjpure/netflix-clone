import React from "react";
import "./Watch.css";
import { useParams } from "react-router-dom";
function Watch() {
  const { id } = useParams();
  return (
    <div className="watch">
      <h1>{id}</h1>
    </div>
  );
}

export default Watch;
