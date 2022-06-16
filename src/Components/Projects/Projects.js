//  @include flex(flex-start, center, row, 15px);
import React from "react";
import "./project.scss";
import bnleo1 from "../../assets/bnleo_pg2.png";
import bnleo2 from "../../assets/bnleo_pg1.png";
import dnpg1 from "../../assets/dn_pg1.png";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="projects">
      <div className="title">
        <span>02.</span> <h1>Projects</h1>
        <div className="project_line"></div>
      </div>
      <div className="project_list">
        <div className="project_presentation project01">
          <div className="presentation_screen">
            <img src={bnleo2} alt="" />
          </div>
          <div className="presentation_description">
            <div className="project_title">
              <p className="small_title">Crud Project</p>
              <p className="big_title">Bana Leo</p>
            </div>
            <div className="project_descr">
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Express</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="external_links">
              <div className="github">
                <a href="#">
                  <FaGithubSquare />
                </a>
              </div>
              <div className="liveproject">
                <a href="#">
                  <BsArrowUpRightSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project_presentation project02">
          <div className="presentation_screen">
            <img src={dnpg1} alt="" />
          </div>
          <div className="presentation_description">
            <div className="project_title">
              <p className="small_title">Crud Project</p>
              <p className="big_title">Bana Leo</p>
            </div>
            <div className="project_descr">
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
            </div>
            <div className="stack_used">
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Express</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="external_links">
              <div className="github">
                <a href="#">
                  <FaGithubSquare />
                </a>
              </div>
              <div className="liveproject">
                <a href="#">
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
