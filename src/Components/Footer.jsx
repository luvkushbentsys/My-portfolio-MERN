import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-con">
        <div className="left">
          <h3>ADDRESS</h3>
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "yellowGreen",
                marginTop: "6px",
                marginRight: "1rem",
                cursor: "pointer",
              }}
            />
            <div>
              <p>Sector : 71 ,SAS Nagar </p>
              <p>Mohali</p>
            </div>
          </div>
          <div className="phone">
            <p>
              <FaPhone
                size={20}
                style={{
                  color: "yellowGreen",
                  marginTop: "10px",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
              +91 8410657252
            </p>
          </div>
          <div className="email">
            <p>
              <FaMailBulk
                size={20}
                style={{
                  color: "yellowGreen",
                  marginTop: "10px",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
              18lavkushyadav@gmail.com
            </p>
          </div>
        </div>
        <div className="right">
          <h3>ABOUT ME</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas
            inventore soluta hic, veniam voluptatem quam impedit quos blanditiis
            ut ab error cumque molestiae laboriosam fugiat quae nam aspernatur
            beatae.
          </p>
          <h4> - Follow Me - </h4>
          <div className="social">
            <a href="https://facebook.com">
              <FaFacebook className="socialIcons1" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="socialIcons" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin className="socialIcons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
