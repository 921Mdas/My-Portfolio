import React from "react";
import "./greet.scss";

const Greet = () => {
  return (
    <div className="landing_page" id="nav">
      <div className="greetings">My name is</div>
      <div className="whoami">
        <div className="my_name">DEO GRATIAS</div>
        <div className="whatido">I build user-friendly apps</div>
      </div>
      <div className="statement">
        <div>
          I'm a software developer based out of Toronto. From working as a
          Client Success consultant in a SaaS (Software as a Service) Company to
          writing code for the web, I have successfully combined{" "}
          <span>client-focused skills</span> and
          <span> programming skills</span> to transform less-defined user
          stories into well-architected applications.
        </div>
        <div>
          <br />
          I'm excited to continue refining my skills with the right company and
          to have an opportunity to contribute toward more inclusivity and
          diversity in tech. I'm looking forward to meeting over coffee ☕️ or
          via my social links 👋.
        </div>
      </div>
    </div>
  );
};

export default Greet;
