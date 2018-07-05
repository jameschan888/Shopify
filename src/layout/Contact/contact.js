import React from "react";
import classes from "./contact.module.css";

import location from "../../assets/images/map.jpg";
import Linkedinicon from "react-icons/lib/fa/linkedin-square";
import Giticon from "react-icons/lib/fa/git-square";
const baseimgurl = process.env.PUBLIC_URL + "/assets/images/";
const Contact = props => (
  <div className={classes.Contact}>
    <h1 className={classes.Header}>Contact Me</h1>
    <div className={classes.Row}>
      <div
        class="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="light"
        data-vanity="james-chan-a93bbb167"
      />
      <div className={classes.ContactInfo}>
        <h2>E-Mail : jameschan666000@gmail.com</h2>
        <h2>Mobile Phone : +971559220225</h2>
        <h2>Skype : live:myfivegoldstar888@gmail.com</h2>
        <h2>Address : Al Barsha First, Dubai, UAE</h2>
        <div>
          <div
            className={classes.Linkedin}
            onClick={() => {
              window.location =
                "https://ae.linkedin.com/in/james-chan-a93bbb167?trk=profile-badge";
            }}
          >
            <Linkedinicon color="#bbbbbb" size="40" />
          </div>
          <div
            className={classes.Github}
            onClick={() => {
              window.location = "https://github.com/jameschan888";
            }}
          >
            <Giticon color="#bbbbbb" size="40" />
          </div>
        </div>
      </div>
      <div className={classes.Map}>
        <img
          src={baseimgurl + "map.jpg"}
          className={classes.Location}
          alt="Dubai"
        />
      </div>
    </div>
  </div>
);

export default Contact;
