//  @include flex(flex-start, center, row, 15px);
import React from "react";
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
                A music application allowing users to listen to african hits
                from 1950s to early 1980s. It includes crud functionalities to
                manage a playlists and a bio.
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
                A mini blog, allowing users to create and publish articles and
                perform crud tasks. This includes a static dashboard soon
                dynamic,to track top performing content based on views and
                shares.
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
                An NFT application allowing users to bid on unique african arts
                using Ethereum. This includes a landing page, detailed
                view,cart, and checkout form.
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>React Native</li>
                <li>Redux Toolkit</li>
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
