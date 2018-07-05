import React, { Component } from "react";
import Slider from "react-animated-slider";

import "./slider-animations.css";
import "./horizontal.css";

const content = [
  {
    title: "Hi, I am James Chan!",
    description:
      "A full stack web developer who specializes in trend javascript frameworks such as react.js and vue.js",
    button: "About Me",
    image: process.env.PUBLIC_URL + "/assets/images/2.jpg"
  },
  {
    title: "Front & Backend Developer",
    description:
      "React, Angular, Vue.js, PHP as frontend and Node.js, ASP.Net, Python as BackEnd.",
    button: "Resume",
    image: "https://i.imgur.com/ZXBtVw7.jpg"
  },
  {
    title: "Robust Web Application",
    description:
      "I provide clients with robust web applications with highest quality.",
    button: "Portfolio",
    image: "https://i.imgur.com/DvmN8Hx.jpg"
  }
];
class home extends Component {
  buttonhandler = type => {
    if (type === "Resume") {
      window.location = "/resume";
    } else if (type === "About Me") {
      window.location = "/about";
    } else if (type === "Portfolio") {
      window.location = "/#Portfolio";
    }
  };
  render() {
    return (
      <div id="Home">
        <Slider className="slider-wrapper" autoplay={100} duration={4000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button onClick={() => this.buttonhandler(item.button)}>
                  {item.button}
                </button>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posted by <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
        {/* <HomeContent />

<Homeviewexperience /> */}
      </div>
    );
  }
}

export default home;
