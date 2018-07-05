import React, { Component } from "react";
import classes from "./skillitems.module.css";
import Skillitem from "./SkillItem/skillitem";
const baseimgurl = process.env.PUBLIC_URL + "/assets/images/skill/";
const items = ["10", "8", "10", "7", "5", "5", "6", "3", "5", "6", "8", "6"];
const Skillitems = props => {
  const skillitems = items.map((val, index) => {
    const imgurl = baseimgurl + (index + 1) + ".png";
    return <Skillitem key={index} img={imgurl} text={val + " Years"} />;
  });
  return <div className={classes.Grid}>{skillitems}</div>;
};
export default Skillitems;
