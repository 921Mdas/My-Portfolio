import React from "react";
import "./greet.scss";

const Greet = () => {
  return (
    <div className="landing_page">
      <div className="greetings">Hi, my name is</div>
      <div className="whoami">
        <div className="my_name">Deo Gratias</div>
        <div className="whatido">I build softwares</div>
      </div>
      <div className="statement">
        <span>Agile full-stack engineer</span> with knowledge in developing,
        testing and deploying full-stack web applications. With a professional
        background in account management SaaS (software as a service), I have
        acquired <span>client-focused, </span> communication and team-work
        skills that help me work better strive in any environment. I'm driven by
        the process of transforming user stories into
        <span>well architected softwares.</span>
      </div>
    </div>
  );
};

export default Greet;
