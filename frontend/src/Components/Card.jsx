import React from "react";

const Card = (props) => {
  const path = "PNG/" + props.value + ".png";
  return (
    <div>
      <img src={path} alt="" className="w-[150px]" />
    </div>
  );
};

export default Card;
