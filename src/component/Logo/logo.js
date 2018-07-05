import React from "react";
import classes from "./logo.module.css";
import logoimg from "../../assets/images/logo.png";
const logo = props => (
  <a className={classes.Logo}>
    <img src={logoimg} alt="James Chan" />
    <div className={classes.Logoname}>
      <h1>James Chan</h1>
      <h2>Full Stack Front-end &amp; Back-end Developer</h2>
    </div>
  </a>
);
export default logo;
