import React from "react";
import classes from "./component.module.css";
export const Skillitem = props => (
  <div className={["row", classes.Skillitem].join(" ")}>
    <div className={classes.Mark}>
      <p>•</p>
    </div>
    <div className={classes.Text}>
      <p>{props.children}</p>
    </div>
  </div>
);
