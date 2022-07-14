import React, { useState } from "react";
import muggshot from "../../assets/django.png";
import "./about.scss";

import { BiRightArrow } from "react-icons/bi";
import deo from "../../assets/Deo.jpeg";

const About = () => {
  const [pos, setPos] = useState(0);
  window.addEventListener("scroll", () => {
    setPos(window.scrollY);
  });

  return (
    <div className="about" id="about">
      <div className="title">
        <span>01.</span> <h1>About Me</h1>
        <div className="about_line"></div>
      </div>

      <div className="about_brandstatement">
        <div className="brandstatement">
          My Interest in web development started back in 2013. I was working
          small jobs making posters and flyers when someone asked if I could
          build a website — turns out research and hard work can do anything!
          (please see my 2013 website{" "}
          <a href="http://chea-ar.org/Index.html">here</a> )
          <br />
          <br />I followed a different path working in sales (Software,Api,
          features,etc.) for a software company and throughout the years, my
          curiosity for programming had me dig deep to understand how best to
          improve clients' experience. I have since acquired skills to develop,
          test, and deploy full stack applications.
        </div>
        <div className="avatar">
          <img src={deo} alt="" />
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
              MongoDB
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
