import React, { Component } from "react";
import Homecontent from "./HomeContent/homecontent";
import classes from "./about.module.css";
import { Fullpage, HorizontalSlider, Slide } from "fullpage-react";
import Portfolio from "../../component/Portfolio/portfolio";
import Contact from "../Contact/contact";
import Aux from "../../hoc/myaux";
import Modal from "../../component/UI/Modal/Modal";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import Leftbutton from "react-icons/lib/fa/arrow-circle-left";
import Rightbutton from "react-icons/lib/fa/arrow-circle-right";
import Homebutton from "react-icons/lib/fa/home";
const baseimgurl = process.env.PUBLIC_URL + "/assets/images/";
const lists = ["1", "2", "3", "4", "5", "6"];
const lists1 = ["7", "8", "9", "10", "11", "12"];
const { changeHorizontalSlide } = Fullpage;
const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 0 is default
  scrollSensitivity: 2,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 0 is default
  touchSensitivity: 2,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true,
  enableArrowKeys: true,

  // optional, set the initial vertical slide
  activeSlide: 0
};

const horizontalNavStyle = {
  position: "absolute",
  width: "100%",
  top: "50%",
  zIndex: 15
};

const horizontalSliderProps = {
  name: "horizontalSlider1",
  infinite: true
};
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider1: 0
      }
    };

    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
    console.log("start" + state);
    if (!this.horizontalNav) {
      this.horizontalNav = document.getElementById("horizontal-nav");
    }

    if (name === "horizontalSlider1") {
      scrollNavStart(this.horizontalNav);
    }
  }

  onSlideChangeEnd(name, props, state, newState) {
    if (name === "horizontalSlider1") {
      scrollNavEnd(this.horizontalNav);
    }

    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide
    };
    console.log(newState.activeSlide);
    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }

  homeclickhandler = () => {
    window.location = "/";
  };
  render() {
    const horizontalSliderName = horizontalSliderProps.name;
    const horizontalActive = this.state.active[horizontalSliderName];

    const prevHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive - 1
    );
    const nextHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive + 1
    );

    let itemwidth = (window.innerWidth - 250) / 3;
    console.log("width" + itemwidth);

    const horizontalNav = (
      <div id="horizontal-nav" style={horizontalNavStyle}>
        <span className={classes.Left} onClick={prevHorizontalSlide}>
          <Leftbutton color="white" size="30" />
          {/* <button>PREV</button> */}
        </span>
        <span className={classes.Right} onClick={nextHorizontalSlide}>
          {/* <button>Next</button> */}
          <Rightbutton color="white" size="30" />
        </span>
      </div>
    );

    const horizontalSlides = [
      <Slide>
        <div className={classes.Portfolio}>
          <h1 className={classes.h1}>DUBAI LIFE</h1>
          <Portfolio baseimgurl={baseimgurl} lists={lists} type="about" />
        </div>
        {/* <div className={classes.Gallery}>
          <h1 className={classes.h1}>DUBAI LIFE</h1>
          <Gallery images={imagelists} rowHeight={window.innerHeight / 3} />
        </div> */}
      </Slide>,
      <Slide className={classes.Portfolio}>
        <div>
          <h1 className={classes.h1}>DUBAI LIFE</h1>
          <Portfolio baseimgurl={baseimgurl} lists={lists1} type="about" />
        </div>
      </Slide>
      //   <Slide>
      //     <Viewresume />
      //   </Slide>
    ];
    horizontalSliderProps.slides = horizontalSlides;

    const horizontalSlider = (
      <HorizontalSlider id="horizontal-slider-1" {...horizontalSliderProps}>
        {horizontalNav}
      </HorizontalSlider>
    );

    const verticalSlides = [
      <Slide>
        <div className={classes.Homecontent}>
          <Homecontent />
        </div>
      </Slide>,
      horizontalSlider,
      <Slide>
        <div className={classes.Contact}>
          <Contact />
        </div>
      </Slide>
    ];
    fullPageOptions.slides = verticalSlides;

    return (
      <Aux>
        <Modal
          show={this.props.show}
          modalClosed={() => this.props.modalcancelhandler(false)}
        >
          <img
            src={this.props.imageurl}
            className={classes.DetailImage}
            alt=""
          />
        </Modal>
        <div className={classes.Homebutton} onClick={this.homeclickhandler}>
          <Homebutton className={classes.Icon} size="40" />
        </div>
        <div className={classes.About}>
          <Fullpage
            onSlideChangeStart={this.onSlideChangeStart}
            onSlideChangeEnd={this.onSlideChangeEnd}
            {...fullPageOptions}
          />
        </div>
      </Aux>
    );
  }
}
function scrollNavStart(nav) {
  // make the nav fixed when we start scrolling horizontally
  nav.style.position = "fixed";
}

function scrollNavEnd(nav) {
  // make the nav absolute when scroll finishes
  nav.style.position = "absolute";
}
const mapDispatchToprops = dispatch => {
  return {
    modalcancelhandler: val =>
      dispatch({
        type: actionTypes.IMAGE_DETAIL_VIEW,
        value: val
      })
  };
};
const mapStateToProps = state => {
  return {
    show: state.imagedetailview,
    imageurl: state.imageurl
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(About);
