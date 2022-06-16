import React from "react";

const Sidebar = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`sidebar ${showMenu ? "showmenu" : ""}`}>
      <div className="welcome">
        <span className="first_pop">Welcome,</span>
        <span className="second_pop">nice to meet you!</span>
      </div>
      <ul className="links">
        <li onClick={() => setShowMenu(false)}>
          <span>01.</span>
          <a name="about" href="#about">
            About
          </a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <span>02.</span>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <span>03.</span>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <button className="resume">Resume</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
