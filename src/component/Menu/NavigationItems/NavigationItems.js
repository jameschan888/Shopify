import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      HOME
    </NavigationItem>
    <NavigationItem link="/">EXPERIENCE</NavigationItem>
    <NavigationItem link="/">DEEPER LOOK</NavigationItem>
    <NavigationItem link="/">WORK</NavigationItem>
  </ul>
);

export default navigationItems;
