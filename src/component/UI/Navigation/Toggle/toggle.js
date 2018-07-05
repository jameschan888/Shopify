import React from "react";
import classes from "./toggle.module.css";
import Fabars from "react-icons/lib/fa/bars";

const Toggle = props => (
  <div className={classes.Toggle} onClick={props.clicked}>
    <Fabars className={classes.Icon} />
  </div>
);
export default Toggle;
