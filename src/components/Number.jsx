import React from "react";

  // we do not need useParams anymore because we get the value from props in Value.jsx
  // this deconstructs value so we do not need props.value
function Number(props) {
  const {value} = props;

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>The number is : {value}</h1>
      </div>
    </div>
  );
}

export default Number;
