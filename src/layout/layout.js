import React, { Component } from "react";
import ReactDom from "react-dom";
import Header from "../component/Header/header";
import Home from "./Home/home";
import Experience from "./Experience/experience";
import Viewresume from "./Viewresume/viewresume";
import Portfolio from "./Portfolio/portfolio";
import Aux from "../hoc/myaux";
import { connect } from "react-redux";

class Layout extends React.Component {
  componentDidMount() {}

  componentDidUpdate(prevProps) {
    //console.log("did update" + this.props.menuitem);
    //const tesNode = ReactDom.findDOMNode(this.refs[this.props.menuitem]);
    //if (tesNode) window.scrollTo(0, tesNode.offsetTop);
  }
  componentWillUnmount() {}
  anchorlink = component => {
    const target = ReactDom.findDOMNode(component);
  };

  render() {
    console.log("render");

    return (
      <Aux>
        <Header />
        <Home />
        <Portfolio />
        <Experience />
        <Viewresume />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuitem: state.menuitem
  };
};

export default connect(mapStateToProps)(Layout);
