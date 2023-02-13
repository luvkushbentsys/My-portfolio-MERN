import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setCick] = useState(false);
  const handleClick = () => {
    setCick(!click);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollX <= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          <h1 className="logo">LAVKUSH YADAV</h1>
        </Link>

        <ul className={click ? "Nav-menu active" : "Nav-menu"}>
          <li>
            <Link  to="/">
              <p style={{color:"yellowgreen"}} >HOME</p>
            </Link>
          </li>
          <li>
            <Link to="/project">
              <p>PROJECTS</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>ABOUT</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p>CONTACT</p>
            </Link>
          </li>
        </ul>
        <div className="hamb" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
