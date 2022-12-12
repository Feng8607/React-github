import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerPage">
      <div className="footerContainer">
        <div className="footerFirst">
          <FontAwesomeIcon
            style={{
              fontSize: "1.5rem",
              color: "rgb(150,150,150)",
              marginRight: "0.5rem",
            }}
            icon={faGithub}
          />
          © 2022 GitHub, Inc.
        </div>
        <div className="footerSecond">
          <a>Terms</a>
          <a>Privacy</a>
          <a>Security</a>
          <a>Status</a>
          <a>Docs</a>
          <a>Contact GitHub</a>
          <a>Pricing</a>
          <a>API</a>
          <a>Training</a>
          <a>Blog</a>
          <a>About</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
