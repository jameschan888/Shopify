import React from "react";
import classes from "./ending.module.css";
import Heading from "../../component/Heading/heading";
import Menu from "../../component/Menu/menu";
const ending = props => (
  <div className={classes.Ending}>
    <Heading
      text="Get a website that looks amazing and actually works."
      isblue={false}
    />
    <Menu iscenter />
    <p>Made by React.js</p>
  </div>
);
export default ending;
