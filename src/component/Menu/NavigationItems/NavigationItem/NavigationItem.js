import React from "react";

import classes from "./NavigationItem.module.css";

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? classes.active : classes.inactive}
    >
      {props.children}
    </a>
  </li>
);

export default navigationItem;
