import React from "react";
import classes from "./skillitem.module.css";
const Skillitem = props => {
  return (
    <div className={classes.Item}>
      <img src={props.img} className={classes.Image} alt="" />
      <div className={classes.Overlay}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
export default Skillitem;
