import React from "react";
import muggshot from "../../assets/django.png";
import "./about.scss";

import { BiRightArrow } from "react-icons/bi";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <span>01.</span> <h1>About Me</h1>
        <div className="about_line"></div>
      </div>

      <div className="about_brandstatement">
        <div className="brandstatement">
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
          <br />
          <br />
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients. <br /> <br /> I also recently launched a course
          that covers everything you need to build a web app with the Spotify
          API using Node & React. Here are a few technologies I’ve been working
          with recently:
        </div>
        <div className="avatar">
          <img src={muggshot} alt="" />
        </div>
      </div>

      <div className="stacks">
        <p>A few technologies I've been working with recently:</p>

        <div className="stacks_list">
          <div className="stack_list1">
            <p className="stack1">
              <span>
                <BiRightArrow className="stack_arrow" />
              </span>{" "}
              React
            </p>
            <p className="stack2">
              <span>
                <BiRightArrow className="stack_arrow" />
              </span>{" "}
              Javascript
            </p>
            <p className="stack3">
              <span>
                <BiRightArrow className="stack_arrow" />
              </span>{" "}
              Node.js
            </p>
          </div>
          <div className="stack_list2">
            <p className="stack4">
              {" "}
              <span>
                <BiRightArrow className="stack_arrow" />
              </span>{" "}
              React Native
            </p>
            <p className="stack5">
              {" "}
              <span>
                <BiRightArrow className="stack_arrow" />
              </span>{" "}
              Python
            </p>
            <p className="stack6">
              {" "}
              <span>
                <BiRightArrow className="stack_arrow" />
              </span>{" "}
              Express
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
