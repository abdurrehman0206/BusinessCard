import React from "react";
import email from "../images/email.png";
import LinkedIn from "../images/linkedin.png";
function Info() {
  return (
    <div className="infoContainer">
      {/* <img src={PlaceHolder} alt="" /> */}
      <div className="titleContainer">
        <h1>John Doe</h1>
        <h3>Frontend Developer</h3>
        <p>johndoes@reactive.com</p>
        <ul>
          <li>
            <a href="#">
              <img src={email} alt="Email Button" />
              Email
            </a>
          </li>
          <li>
            <a href="#">
              <img src={LinkedIn} alt="LinkedIn Button" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
