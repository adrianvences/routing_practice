import React from "react";
import { useParams } from "react-router-dom";

function WordColor() {
  const { word, color1, bg } = useParams();

  return (
    <div style={{ backgroundColor: bg }} className="card mt-3 ">
      <div className="card-body">
        <h1 style={{ color: color1 }}>The word is : {word}</h1>
      </div>
    </div>
  );
}

export default WordColor;
