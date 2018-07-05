import React, { Component } from "react";
import Allpage from "./Allpage/allpage";
import Detailpages from "./Detailpages/detailpages";
class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      showDetail: false
    };
  }

  render() {
    let portfolio = null;
    if (this.state.showDetail) {
      portfolio = <Detailpages />;
    } else portfolio = <Allpage />;
    return <div id="Portfolio">{portfolio}</div>;
  }
}
export default Portfolio;
