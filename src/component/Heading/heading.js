import React from "react";
import classes from "./heading.module.css";
const heading = props => (
  <h1 className={props.isblack ? classes.black : classes.white}>
    {props.text}
  </h1>
);
export default heading;
