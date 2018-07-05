import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import "./App.css";
import Layout from "./layout/layout";
import Onepage from "./layout/Portfolio/Detailpages/Onepage/onepage";
import Resume from "./layout/Resume/resume";
import About from "./layout/About/about";
class App extends Component {
  mapStyles = styles => {
    return {
      opacity: styles.opacity
      // transform: `scale(${styles.scale})`
    };
  };
  bounce = val => {
    return spring(val, {
      stiffness: 330,
      damping: 22
    });
  };

  render() {
    const bounceTransition = {
      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: this.bounce(0),
        scale: this.bounce(0.8)
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: this.bounce(1),
        scale: this.bounce(1)
      }
    };
    return (
      <div>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={this.mapStyles}
          className="route-wrapper"
        >
          <Route path="/portfolio/:id" exact component={Onepage} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/about" exact component={About} />
          <Route path="/" component={Layout} />
        </AnimatedSwitch>
      </div>
    );
  }
}

export default App;
