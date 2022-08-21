import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";

function Footer() {
  return (
    <div className="footerContainer">
      <ul>
        <li>
          <a href="#">
            {" "}
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={github} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
