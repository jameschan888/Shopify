import React, { Component } from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import classes from "./onepage.module.css";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import LeftArrow from "react-icons/lib/ti/arrow-back";
import RightArrow from "react-icons/lib/ti/arrow-forward";
import CancelButton from "react-icons/lib/md/cancel";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#2098D1" }, // Purple and green play nicely together.
    secondary: { main: "#2098D1" } // This is just green.A700 as hex.
  }
});
const baseimgurl = process.env.PUBLIC_URL + "/assets/images/portfolio/";
const images = [
  {
    original: "http://lorempixel.com/1000/600/nature/1/",
    thumbnail: "http://lorempixel.com/250/150/nature/1/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/2/",
    thumbnail: "http://lorempixel.com/250/150/nature/2/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/3/",
    thumbnail: "http://lorempixel.com/250/150/nature/3/"
  },
  {
    original: "http://lorempixel.com/1000/600/nature/4/",
    thumbnail: "http://lorempixel.com/250/150/nature/4/"
  }
];
const PREFIX_URL =
  "https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/";
const portfolios = [
  {
    id: 1,
    name: "VUEHAUS",
    url: "https://www.vuhaus.com/",
    description:
      "In this project I acted as part of a small group of misfits hell-bent on making cool stuff. At the time I was working for another react project and was very busy, although this project was so urgent and only 40% of work was done by the other team member. High reusability and productivity of React helped me to complete this project successfully. That was probably the biggest challange for me as it needs a huge development speed with best quality.",
    tech: ["HTML5", "CSS3", "REACT.JS", "REDUX", "REACT ROUTING V4"]
  },
  {
    id: 2,
    name: "VERSAL",
    url: "https://versal.com/",
    description:
      "In this project I acted as a UI/UX developer for web version. Versal is a kind of huge LMS project and has a number of complicated and elaborated designs. I had to create many react UI components for it, which was a challege and gave me the chance to test my skill. I made everything run smoothly and perfectly, which was great success.",
    tech: ["HTML5", "SASS", "REACT.JS", "REDUX-SAGA", "RESPONSIVE WEB DESIGN"]
  },
  {
    id: 3,
    name: "KOGAN",
    url: "https://www.kogan.com/",
    description:
      "This website was developed for Kogan Retail in Australia as Lead Front-End Developer at Vinova web company.",
    tech: ["HTML5", "CSS3", "REACT.JS"]
  },
  {
    id: 4,
    name: "FABRIC",
    url: "http://fabric.qa/",
    description:
      "This project was so interesting. The client asked for a unique and special design which was a great challenge for designers and me as UI/UX developer.",
    tech: ["HTML5", "CSS Module", "REACT.JS", "UI/UX design"]
  },
  {
    id: 5,
    name: "PREMIUMBEAT",
    url: "https://www.premiumbeat.com/",
    description:
      "In this project I acted as part of a small group of misfits hell-bent on making cool stuff. At the time I was still using BackboneJS for the client side routing, although the views were renderd directly in the Microsoft C# MVC's back-end. The client side javascript was entirely modularized with RequireJS, which is awesome for code maintainance and scalability. That was probably the biggest challange of the project as it has a huge number of different templates, to make everything run smoothly and cohesively was a huge win.",
    tech: ["HTML5", "CSS3", "REACT.JS"]
  },
  {
    id: 6,
    name: "CHOBANIFOODSERVICE",
    url: "https://chobanifoodservice.com/",
    description:
      "In this project I acted as part of a small group of misfits hell-bent on making cool stuff. At the time I was still using BackboneJS for the client side routing, although the views were renderd directly in the Microsoft C# MVC's back-end. The client side javascript was entirely modularized with RequireJS, which is awesome for code maintainance and scalability. That was probably the biggest challange of the project as it has a huge number of different templates, to make everything run smoothly and cohesively was a huge win.",
    tech: ["HTML5", "CSS3", "REACT.JS"]
  },
  {
    id: 7,
    name: "EATINGWELL",
    url: "http://www.eatingwell.com/",
    description:
      "In this project I played a role as frontend developer. This website has huge number of UIs to build, but I did everything well in time.",
    tech: ["CSS3", "VUE.JS"]
  },
  {
    id: 8,
    name: "MAISON-ARMANCE",
    url: "http://en.paris-maison-armance.com/",
    description:
      "This project was simple, but required a luxury design. I could have done that with Angular in a short period. ",
    tech: ["CSS3", "ANGULAR 4", "RESPONSIVE"]
  },
  {
    id: 9,
    name: "CHARTREUX",
    url: "http://www.cellierdeschartreux.com/",
    description:
      "The cliend asked us a creative and unique design for this project. I was a lead UI developer for this project and I spent some time to make this look gorgeous with UI designers.",
    tech: ["PHP", "LARAVEL", "CSS3"]
  }
];
class Onepage extends Component {
  constructor() {
    super();
    this.state = {
      showmenu: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.showmenu) {
    }
    // if (
    //   this.state.slideInterval !== prevState.slideInterval ||
    //   this.state.slideDuration !== prevState.slideDuration
    // ) {
    //   // refresh setInterval
    //   this._imageGallery.pause();
    //   this._imageGallery.play();
    // }
  }
  prevPortfoliohandler = () => {
    let index = 0 + this.props.match.params.id;
    index--;
    if (index == 0) index = 9;
    this.props.history.push({ pathname: "/portfolio/" + index });
  };
  nextPortfoliohandler = () => {
    let index = 0 + this.props.match.params.id;
    index++;
    if (index == 10) index = 1;
    this.props.history.push({ pathname: "/portfolio/" + index });
  };
  visitwebsitehandler = () => {
    window.location = portfolios[this.props.match.params.id - 1].url;
  };
  menuitemclickhandler = target => {
    switch (target) {
      case "home":
        window.location = "/";
        break;
      case "portfolio":
        window.location = "/#portfolio";
        break;
      case "about":
        window.location = "/about";
        break;
      case "resume":
        window.location = "/resume";
        break;
      default:
    }
  };
  menuclickhandler = () => {
    this.setState({ showmenu: true });
  };
  cancelhandler = () => {
    this.setState({ showmenu: false });
  };
  render() {
    return (
      <div className={classes.Onepage}>
        {/* <ImageGallery
          ref={i => (this._imageGallery = i)}
          items={this.images}
          lazyLoad={false}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton &&
            this.state.showGalleryFullscreenButton
          }
          showPlayButton={
            this.state.showPlayButton && this.state.showGalleryPlayButton
          }
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          additionalClass="app-image-gallery"
        /> */}
        <div className={this.state.showmenu ? classes.Menu : classes.HideMenu}>
          <div className={classes.Cancel} onClick={this.cancelhandler}>
            <CancelButton size="45" />
          </div>
          <ul>
            <li onClick={() => this.menuitemclickhandler("home")}>HOME</li>
            <li onClick={() => this.menuitemclickhandler("portfolio")}>
              PORTFOLIO
            </li>
            <li onClick={() => this.menuitemclickhandler("resume")}>RESUME</li>
            <li onClick={() => this.menuitemclickhandler("about")}>ABOUT</li>
          </ul>
        </div>
        <div className={classes.Header}>
          <NavLink className={classes.Backlist} to="/">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <span>Back</span>
          </NavLink>
          <div className={classes.Burger} onClick={this.menuclickhandler}>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className={classes.Navigation}>
          <LeftArrow
            size={50}
            color={"#8a8a8a"}
            className={classes.Left}
            onClick={this.prevPortfoliohandler}
          />
          <RightArrow
            size={50}
            color={"#8a8a8a"}
            className={classes.Right}
            onClick={this.nextPortfoliohandler}
          />
        </div>
        <h1>{portfolios[this.props.match.params.id - 1].name}</h1>
        <div className={classes.Content}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.visitwebsitehandler}
          >
            VISIT THE WEBSITE
          </Button>
          <div className={classes.SiteImage}>
            <div className={classes.Bar}>
              <h2>Scroll on me</h2>
              <i />
            </div>
            <div className={classes.Image}>
              <img src={baseimgurl + this.props.match.params.id + ".jpg"} />
            </div>
          </div>
          <h2>About this project</h2>
          <hr />
          <h4>{portfolios[this.props.match.params.id - 1].description}</h4>
          <h2>Technical Sheet</h2>
          <hr />
          {portfolios[this.props.match.params.id - 1].tech.map(
            (value, index) => {
              return <h4 key={index}>{value}</h4>;
            }
          )}
        </div>
      </div>
    );
  }
}
export default Onepage;
