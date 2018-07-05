import React from "react";
import classes from "./viewresume.module.css";
import Heading from "../../component/Heading/heading";
import Para from "../../component/Paragrapth/paragragh";
import Button from "../../component/Button/button";
const viewresume = props => (
  <div className={classes.Viewresume}>
    <Heading text="What I've done & what I can do" isblue={false} />
    <Para
      isblue={false}
      text="Feel free to take a deeper look at what I've accomplished over the years and what I'm able to do for you. "
    />
    <Para
      isblue={false}
      text="My resume goes over the standard items, but please understand that I don't embellish my capabilities (no good ever comes out of that)."
    />
    <Button
      onClick={() => {
        console.log("view resume");
        window.location = "/resume";
        return;
      }}
    >
      VIEW MY RESUME
    </Button>
  </div>
);
export default viewresume;
