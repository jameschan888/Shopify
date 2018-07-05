import React from "react";
import classes from "./deeplook.module.css";
import Heading from "../../component/Heading/heading";
import Para from "../../component/Paragrapth/paragragh";
import Portfolio from "../../component/Portfolio/portfolio";
import location from "../../assets/images/map.jpg";
const deeplook = props => (
  <div className={classes.Deeplook}>
    <Heading text="TAKE A DEEPER LOOK" isblue={false} />
    <div className={classes.Content}>
      <Para
        text="Senior full stack developer, graduate of Nanyang University.
Have 9 years commercial experience working with clients from around the world, providing responsive front-end development and high performance back-end development.
The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.

Often front-end development of a website is overlooked, but being the part of your project that combines design, back-end development and the layer that your users interact with, from my experience, it is the most important to get right.

My clients have found that launching with a well considered and well developed front-end has saved them time and money and makes for a product that is consistently of high quality."
      />
      <img src={location} className={classes.Location} alt="Dubai" />
    </div>
    <Portfolio />
  </div>
);
export default deeplook;
