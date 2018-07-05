import React from "react";

import classes from "./menu.module.css";
import Logo from "../Logo/logo";
import NavigationItems from "./NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const menu = props => (
  <header
    className={
      props.iscenter
        ? [classes.Menu, classes.Center].join(" ")
        : [classes.Menu, classes.Right].join(" ")
    }
  >
    <Logo className={classes.Logo} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default menu;
