import React from "react";

import classes from "./link.module.css";
const link = props => (
  <div className={classes.Link}>
    <a href={props.link} className={classes.Link}>
      {props.children}
    </a>
  </div>
);

export default link;
