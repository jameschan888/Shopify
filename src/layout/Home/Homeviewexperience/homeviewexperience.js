import React from "react";

import Paragraph from "../../../component/Paragrapth/paragragh";

import classes from "./homeviewexperience.module.css";

import angledown from "../../../assets/angle-down.svg";
import Link from "../../../component/Link/link";
const homeviewexperience = props => (
  <div className={classes.Homeviewexperience}>
    <Link link="#experience">
      <Paragraph text="VIEW EXPERIENCE" />
      <img src={angledown} alt="" />
    </Link>
  </div>
);
export default homeviewexperience;
