import React from "react";
import classes from "./experience.module.css";
import Heading from "../../component/Heading/heading";
import Progressbar from "../../component/Progressbar/progress";
import Skillitems from "./SkillItems/skillitems";
import Portfolio from "../Portfolio/portfolio";
import Port from "../../component/Portfolio/portfolio";
const baseimgurl = process.env.PUBLIC_URL + "/assets/images/";

const experience = props => {
  const explists = [
    { HTML: 10 },
    { CSS3: 10 },
    { JAVASCRIPT: 9 },
    { PHP: 8 },
    { "Express.js": 6 },
    { "Node.js": 6 },
    { Angular: 5 },
    { React: 3 },
    { "Vue.js": 1 },
    { "Three.js": 1 }
  ];
  const progressitems = explists.map(item => {
    return Object.keys(item).map(key => {
      return (
        <Progressbar
          key={key}
          value={item[key] * 10}
          title={key + " ( " + item[key] + " Years )"}
        />
      );
    });
  });
  return (
    <div id="Experience" className={classes.Experience}>
      <Heading text="MY SKILL EXPERIENCE" isblack={false} />
      {/* <div className={classes.Progress}>{progressitems}</div> */}
      <Skillitems />
    </div>
  );
};

export default experience;
