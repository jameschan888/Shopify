import React, { Component } from "react";
import classes from "./header.module.css";
import Navigation from "../UI/Navigation/navigation";

class Header extends Component {
  state = {
    headerfixed: false
  };
  componentDidMount() {
    console.log("did mount");
    document.addEventListener("scroll", this.scrollEventHandler);
  }
  scrollEventHandler = () => {
    if (document.documentElement.scrollTop > 1 && !this.state.headerfixed) {
      console.log("navigation:fixed");
      this.setState({ headerfixed: true });
    }
    if (document.documentElement.scrollTop <= 1 && this.state.headerfixed) {
      console.log("navigation:flexible");
      this.setState({ headerfixed: false });
    }
  };
  componentWillUnmount() {
    console.log("will unmount");
    document.removeEventListener("scroll", this.scrollEventHandler);
  }
  render() {
    return (
      <div
        className={
          this.state.headerfixed
            ? [classes.Headerarea, classes.Nabarfixedtop].join(" ")
            : classes.Headerarea
        }
      >
        <div className={classes.Container}>
          <div className={classes.Topbar}>
            {/* <!-- Start: Top Logo --> */}
            <div className={classes.Logobar}>
              <div className={classes.Logo}>
                <a href="index-2.html">
                  <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                </a>
              </div>
            </div>
            {/* <!-- End: Top Logo --> */}
            <Navigation
              click={ele => this.props.onclick(ele)}
              className={classes.Navigationbar}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
