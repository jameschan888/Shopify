import React from "react";

import classes from "./portfolio.module.css";
import Oneitem from "./OneItem/oneitem";
const portfolio = props => {
  const portfolioitems = props.lists.map((val, index) => {
    let text = null;
    let skills = null;
    if (props.type !== "about"){
      text = props.portfolios[index].name;
skills = props.portfolios[index].tech.join(" , ") ;
    } 
    // console.log(props.text);
    return (
      <Oneitem
        key={index}
        img={props.baseimgurl + val + ".jpg"}
        index={index + 1}
        text={text}
        skills={skills}
        type={props.type}
      />
    );
  });
  return <div className={classes.Grid}>{portfolioitems}</div>;
};
export default portfolio;
