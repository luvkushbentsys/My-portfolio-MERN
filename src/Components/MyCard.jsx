import React from "react";
import "./mycard.css"
import {Link} from "react-router-dom"
const MyCard = (props) => {
  return (
    <div className="ProjectCard">
    <img className="images1" src={props.image} alt="project" />
    <h2 className="projectTitle"> {props.title}</h2>
    <div className="proDetail">
      <p>
        {props.text}
      </p>
      <div className="proBTN">
      <a className="btn"  href={props.view}>View</a>
        <Link className="btn" to={{ pathname: "https://github.com" }}>Source</Link>
      </div>
    </div>
  </div>
  );
};

export default MyCard;