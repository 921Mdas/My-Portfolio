import React from "react";
import "./greet.scss";

const Greet = () => {
  return (
    <div className="landing_page" id="nav">
      <div className="greetings">My name is</div>
      <div className="whoami">
        <div className="my_name">Deo Gratias</div>
        <div className="whatido">I build web apps</div>
      </div>
      <div className="statement">
        I'm a software engineer driven by the process of transforming user
        stories into <span>well architected software. </span>
        With a professional background in account management SaaS (software as a
        service), I have acquired{" "}
        <span>client-focused skills, communication skills,</span>that I can use
        together with my software engineering skills to contribute in your team.
      </div>
    </div>
  );
};

export default Greet;
