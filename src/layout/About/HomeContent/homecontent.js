import React from "react";

import classes from "./homecontent.module.css";

import Hometitle from "./Hometitle/hometitle";
const baseimgurl = process.env.PUBLIC_URL + "/assets/images/";
const homecontent = props => (
  <div className={classes.HomeContent}>
    <img src={baseimgurl + "about.jpg"} alt="James Eric" />

    <div className={classes.Hometitle}>
      <Hometitle />
    </div>
  </div>
);
export default homecontent;
