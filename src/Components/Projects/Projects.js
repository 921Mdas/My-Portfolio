//  @include flex(flex-start, center, row, 15px);
import React, { useState, useRef } from "react";
import "./project.scss";
import bnleo1 from "../../assets/bnleo_pg2.png";
import bnleo2 from "../../assets/bnleo_pg1.png";
import pdart01 from "../../assets/pendart01.png";
import dnpg1 from "../../assets/dn_pg1.png";
import bndash from "../../assets/bn3.png";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Projects = () => {
  return (
    <div className={`projects`} id="projects">
      <div className="title">
        <span>02.</span> <h1>Projects</h1>
        <div className="project_line"></div>
      </div>
      <div className={`project_list`}>
        <div className="project_presentation project01">
          <div className="presentation_screen">
            <div className="overlay_screen1"></div>
            <img src={bnleo2} alt="" />
          </div>
          <div className="presentation_description">
            <div className="project_title">
              <p className="small_title">Music App</p>
              <p className="big_title">Bana Leo</p>
            </div>
            <div className="project_descr">
              <p>
                You have a music event? Say goodbye to spreadsheets. Banaleo
                allows your team to create a list of all performing artists,
                their bio and the tracks you want them to perform. Decide
                together which musician is a good fit and update information in
                real-time
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>React</li>
                <li>Aws</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>Mongodb</li>
              </ul>
            </div>
            <div className="external_links">
              <div className="github">
                <a href="https://github.com/921Mdas/BNLmusic">
                  <FaGithubSquare />
                </a>
              </div>
              <div className="liveproject">
                <a href="https://banaleo.herokuapp.com/">
                  <BsArrowUpRightSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_presentation project02">
          <div className="presentation_screen">
            <div className="overlay_screen2"></div>
            <img src={bndash} alt="" />
          </div>
          <div className="presentation_description">
            <div className="project_title">
              <p className="small_title">Mini blog</p>
              <p className="big_title">Daily News</p>
            </div>
            <div className="project_descr">
              <p>
                Are you a student working on a group essay? This is an
                alternative to saving in Microsoft word and forwarding to your
                classmates via email at each edit. DN allows you and your team
                to work in one interface online, and save the best version in
                your favourite.
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Jwt</li>
              </ul>
            </div>
            <div className="external_links">
              <div className="github">
                <a href="https://github.com/921Mdas/DN">
                  <FaGithubSquare />
                </a>
              </div>
              <div className="liveproject">
                <a href="https://dashnewsmads.herokuapp.com/">
                  <BsArrowUpRightSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_presentation project03">
          <div className="presentation_screen">
            <div className="overlay_screen1"></div>
            <img src={pdart01} alt="" />
          </div>
          <div className="presentation_description">
            <div className="project_title">
              <p className="small_title">NFT APP</p>
              <p className="big_title">PendArt</p>
            </div>
            <div className="project_descr">
              <p>
                Brilliant African artists in less privileged areas sell their
                valuable Art for so little. What if they could have access to an
                international market without resellers taking advantage of their
                work? PendArt allows its users to purchase unique African arts
                directly from the artist.
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>React Native</li>
                <li>Redux</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="external_links">
              <div className="github">
                <a href="https://github.com/921Mdas/PENDART">
                  <FaGithubSquare />
                </a>
              </div>
              <div className="liveproject">
                <a href="https://expo.dev/@rodeomads/PendArt">
                  <BsArrowUpRightSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
