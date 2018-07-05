import React, { Component } from "react";
import classes from "./menu.module.css";
import Menuitem from "./Menuitem/menuitem";
import Aux from "../../../../hoc/myaux";

class Menu extends Component {
  clickhandler = menuitem => {};
  render() {
    const menuitems = ["Home", "Portfolio", "Skill", "Resume", "About"];
    let ul = null;
    const items = menuitems.map(item => {
      return (
        <Menuitem key={item} clicked={ele => this.props.clicked(ele)}>
          {item}
        </Menuitem>
      );
    });
    if (!this.props.visible) {
      ul = <ul className={[classes.Ul, classes.Appear].join(" ")}>{items}</ul>;
    } else {
      ul = (
        <ul className={[classes.Ul, classes.Disappear].join(" ")}>{items}</ul>
      );
    }
    return (
      <Aux>
        <nav className={classes.Menu}>{ul}</nav>
      </Aux>
    );
  }
}

export default Menu;
