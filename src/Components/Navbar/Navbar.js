import React, { useState } from "react";
import "./navbar.scss";

// components
import Sidebar from "./Sidebar";

// icons
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const sideDrawer = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="navbar">
        <div className="welcome">
          <span className="first_pop">Bonjour,</span>
          <span className="second_pop">nice to meet you!</span>
        </div>
        <ul className="links">
          <li>
            <span>01.</span>
            <a name="about" href="#about">
              About
            </a>
          </li>
          <li>
            <span>02.</span>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <span>03.</span>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <button className="resume">
              <a
                target={"/"}
                href="https://drive.google.com/file/d/1Hu3Qk0aN407Rp_QNFv6S8Ccw6n-We-1r/view?usp=sharing"
              >
                Resume
              </a>{" "}
            </button>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={sideDrawer}>
        {showMenu ? <ImCross /> : <GiHamburgerMenu />}
      </div>
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
