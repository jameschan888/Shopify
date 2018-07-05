import React from "react";
import classes from "./experience.module.css";
import Heading from "../../component/Heading/heading";

import Skillitems from "./SkillItems/skillitems";

const experience = props => {
  return (
    <div id="Experience" className={classes.Experience}>
      <Heading text="MY SKILL EXPERIENCE" isblack={false} />
      {/* <div className={classes.Progress}>{progressitems}</div> */}
      <Skillitems />
    </div>
  );
};

export default experience;
