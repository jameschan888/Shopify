import React from "react";
import classes from "./paragraph.module.css";
const paragraph = props => (
  <p
    className={
      props.isblue
        ? [classes.Para, classes.blue].join(" ")
        : [classes.Para, classes.white].join(" ")
    }
  >
    {props.text}
  </p>
);
export default paragraph;
