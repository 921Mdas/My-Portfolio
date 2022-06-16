import React from "react";
import "./contact.scss";
import Footer from "../Contact/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <div className="title">
          <div className="first_title">
            <span>03.</span> <p>Next step</p>
          </div>
          <p className="big_title">Contact Me</p>
        </div>

        <p className="message">
          I’m currently interviewing for new opportunities, my inbox is always
          open. Looking forward to hearing from you :-)
        </p>

        <div className="Emailme">
          <form action="mailto:rodeomads@gmail.com" method="GET">
            <button className="email">Invite me</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
