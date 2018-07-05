import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./oneitem.module.css";
import Modal from "../../UI/Modal/Modal";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
class Oneitem extends Component {
  render() {
    let img = null;
    let item = null;
    var plusStyle = {
      fontSize: "4rem"
    };
    if (this.props.type == "about") {
      img = (
        <div>
          <img src={this.props.img} className={classes.Image} />
          <div
            className={classes.Overlay}
            onClick={() => this.props.showDetailImageView(this.props.img)}
          >
            <p style={plusStyle}> + </p>
          </div>
        </div>
      );
      item = (
        <div className={classes.AboutItem}>
          <div className={classes.Bar}>
            <h2>{this.props.text}</h2>
            <i />
          </div>
          {img}
        </div>
      );
    } else {
      img = (
        <NavLink to={"/portfolio/" + this.props.index}>
          <img src={this.props.img} className={classes.Image} />
          <div className={classes.Overlay}>
            <p>{this.props.text}</p>
          </div>
        </NavLink>
      );
      item = (
        <div className={[classes.Item, classes.PortfolioItem].join(" ")}>
          <div className={classes.Bar}>
            <h2>{this.props.text}</h2>
            <i />
          </div>
          {img}
        </div>
      );
    }
    return item;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    showDetailImageView: imgname =>
      dispatch({
        type: actionTypes.IMAGE_DETAIL_VIEW,
        value: true,
        imageurl: imgname
      })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Oneitem);
