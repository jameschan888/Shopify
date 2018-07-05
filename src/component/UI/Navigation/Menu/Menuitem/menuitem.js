import React, { Component } from "react";
import classes from "./menuitem.module.css";
import * as actionTypes from "../../../../../store/actions";
import { connect } from "react-redux";
class Menuitem extends Component {
  clickhandler = () => {
    const item = this.props.children;
    if (item === "Resume") {
      window.location = "/resume";
    } else if (item === "About") {
      window.location = "/about";
    } else {
      window.location = "/#" + this.props.children;
    }
  };
  render() {
    return (
      <li className={classes.Menuitem}>
        {/* <a href={props.link}>{props.children}</a> */}
        <a onClick={this.clickhandler}>{this.props.children}</a>
      </li>
    );
  }
}
const mapDispatchToprops = dispatch => {
  return {
    setClickedMenuItem: val =>
      dispatch({
        type: actionTypes.MENUITEM_CLICKED,
        value: val
      })
  };
};
export default connect(
  null,
  mapDispatchToprops
)(Menuitem);
