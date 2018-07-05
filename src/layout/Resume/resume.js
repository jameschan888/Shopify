import React from "react";
import classes from "./resume.module.css";
import Contact from "../Contact/contact";
import "./resume.css";
import { Skillitem } from "./Component/component";
import Fabriefcase from "react-icons/lib/fa/briefcase";
import Fagraudationcap from "react-icons/lib/fa/graduation-cap";
import Header from "../../component/Header/header";
const Resume = props => {
  return (
    <div className={classes.Resume}>
      <Header />
      <div className={classes.Name_Summary}>
        <div className={classes.Image}>
          <img src={process.env.PUBLIC_URL + "/assets/images/avatar.jpg"} />
        </div>
        <div className={classes.Summary}>
          <div className={classes.Namewrapper}>
            <h1 className={classes.Name}>James Chan</h1>
            <span>Freelance Web Developer</span>
          </div>
          <p>
            Highly motivated, skilled software engineer with over 9 years of
            professional experience building web applications. Strong background
            in JavaScript, web standards, open source, and have worked on some
            of the largest sites on the internet. Proficient communication,
            leadership, and project management skills. Experience with a wide
            range of software libraries, tools, and languages. Able to plan &
            lead full project life cycles. Patient and calm with excellent
            interpersonal abilities. Skilled at listening and gathering
            information. Excellent at research and problem finding.
          </p>
          <div className="row">
            <div className="col-md-3">
              <div className={classes.Personaldetails}>
                <strong>JANUARY 6, 1989</strong>
                <small>BIRTH</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className={classes.Personaldetails}>
                <strong>SINGAPORE</strong>
                <small>NATIONALITY</small>
              </div>
            </div>
            <div className="col-md-6">
              <div className={classes.Personaldetails}>
                <strong>
                  Malay <span>(NATIVE)</span>, ENGLISH <span>(FLUENT)</span>
                </strong>
                <small>LANGUAGE</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={classes.Expertise}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="section-title">
                <h2>My Specialities</h2>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6">
                  <div className="expertise-item">
                    <h3>React, Angular & Vue based Frontend Development</h3>

                    <p>
                      Designing and developing user interfaces based on trend
                      javascript frameworks
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="expertise-item">
                    <h3>Node.js based Backend Development</h3>

                    <p>
                      Developing Reat Time Applications and Fast RESTful APIs
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="expertise-item">
                    <h3>PHP based Website Development</h3>

                    <p>
                      Developing huge kinds of CMS and Web applications with
                      Wordpress and Laravel
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="expertise-item">
                    <h3>FAST LEARNING AND DEVELOPING</h3>

                    <p>
                      Acquiring new trend techniques quickly and Developing in
                      agile mode
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.Skill}>
        <div className="container">
          <div className="row">
            <div className="col-sm-1 col-md-3">
              <h2>Skills & Abilities</h2>
            </div>
            <div className="col-sm-9 col-md-9">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <Skillitem>HTML, CSS, JavaScript, Python, PHP, SQL</Skillitem>
                  <Skillitem>React/Redux, Angular, Vue.js</Skillitem>
                  <Skillitem>Node.js</Skillitem>
                  <Skillitem>Data visualization / D3.js</Skillitem>
                  <Skillitem>
                    Databases, data storage / MongoDB, MySQL, Oracle
                  </Skillitem>
                </div>
                <div className="col-md-6">
                  <Skillitem>API design, systems architecture</Skillitem>
                  <Skillitem>
                    Unit testing, TDD, BDD (chai, mocha, enzyme)
                  </Skillitem>
                  <Skillitem>Git/Youtrack/Jira</Skillitem>
                  <Skillitem>
                    Strong communication, collaboration, mentor skills
                  </Skillitem>
                  <Skillitem>Agile/Scrum methodology</Skillitem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume">
        {" "}
        <div className="container ex-container">
          {" "}
          <div className="work-experiense">
            {" "}
            <div className="ex-block mb-head ex-block-right">
              {" "}
              <div className="marker-head">
                <Fabriefcase />
              </div>{" "}
              <div className="ex-content b-r">
                {" "}
                <h3>Work Experiense</h3>
              </div>{" "}
            </div>{" "}
            <div className="ex-block ex-block-left">
              <div className="marker" />
              <div className="ex-content ex-shadow">
                <h4>Full Stack web Developer - Plus65 Solutions</h4>{" "}
                <span>Febuary 2016 - December 2016</span>
                <p>
                  Partake in the development of a multi scope project that deals
                  with complex gaming mechanics Worked on a Blockchain
                  technology Distributed Application, that deals with exchange
                  of Crypto currency and Token to cash exchange. Work on Admin,
                  API and Player scoped of the project{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="ex-block ex-block-right">
              {" "}
              <div className="marker" />{" "}
              <div className="ex-content ex-shadow b-r">
                {" "}
                <h4>Full Stack Developer - Facebook Inc</h4>{" "}
                <span>May 2014.5 – November 2015</span>{" "}
                <p>
                  {" "}
                  My role was to develop a React UI for the admin backend,
                  design API endpoints, as well as to develop the report
                  generators in PHP{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="ex-block ex-block-left">
              {" "}
              <div className="marker" />{" "}
              <div className="ex-content ex-shadow">
                {" "}
                <h4>Web Developer - BeMyGuest</h4>{" "}
                <span>April 2013 – June 2014</span>{" "}
                <p>
                  {" "}
                  Front-End developer responsible for builds of company website,
                  B2B platform, Whitelabel and Micro site using Laravel
                  framework. Trained in agile project management and thoroughly
                  utilised within teams internally{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="education">
            {" "}
            <div className="ex-block mb-head mt-head ex-block-right">
              {" "}
              <div className="marker-head">
                <Fagraudationcap />
              </div>{" "}
              <div className="ex-content b-r">
                {" "}
                <h3>Education</h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="ex-block ex-block-left">
              {" "}
              <div className="marker" />{" "}
              <div className="ex-content ex-shadow">
                {" "}
                <h4>
                  Full Stack Web Development Certification - freeCodeCamp{" "}
                </h4>{" "}
                <span>June 2015 - January 2016</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="ex-block ex-block-right">
              {" "}
              <div className="marker" />{" "}
              <div className="ex-content ex-shadow b-r">
                {" "}
                <h4>
                  Bachelor of Computer Science - National University of
                  Singapore{" "}
                </h4>{" "}
                <span>2005 - 2010</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </section>
      <Contact />
    </div>
  );
};
export default Resume;
