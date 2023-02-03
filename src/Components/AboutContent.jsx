import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";
// import abutimg from "../images/aboutimg.avif";
const AboutContent = () => {
  return (
    <div className="AboutContent">
      <div className="leftAbout">
        <h1>Who I Am</h1>
        <p>I am a MERN Developer .</p>
        <Link className="btn" to="/contact">
          Contact
        </Link>
      </div>
      <div className="RightAbout">
        <div className="imgContainer ">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="myimg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
