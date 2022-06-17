//  @include flex(flex-start, center, row, 15px);
import React from "react";
import "./project.scss";
import bnleo1 from "../../assets/bnleo_pg2.png";
import bnleo2 from "../../assets/bnleo_pg1.png";
import dnpg1 from "../../assets/dn_pg1.png";
import bndash from "../../assets/bn3.png";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <span>02.</span> <h1>Projects</h1>
        <div className="project_line"></div>
      </div>
      <div className="project_list">
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
                A music application created to archive, and listen to african
                hits from 1950s to early 1980s. For now, it includes crud
                functionalities to manage our playlists.
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
                A mini blog, where you can create and publish articles in one
                board and News publications can bid on your content. This
                includes a static dashboard soon dynamic,to track your top
                performing content.
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
      </div>
    </div>
  );
};

export default Projects;
