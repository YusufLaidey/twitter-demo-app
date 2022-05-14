import React from "react";
import classes from "./Card.css";

const Card = (props) => {
  return <div className={`input `}>{props.children}</div>;
};

export default Card;
