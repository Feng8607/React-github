import React, { useState } from "react";
import Profot from "../image/Jack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faPlus,
  faBell,
  faBars,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [active, setActive] = useState("left");
  const [head, setHead] = useState("headPage");
  const navToggle = () => {
    active === "left" ? setActive("left nav_active") : setActive("left");
    head === "headPage" ? setHead("headPage rwdHead") : setHead("headPage");
  };
  return (
    <div className={head}>
      <div className="rwdIcons">
        <div onClick={navToggle} className="rwdIcon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`rwdIcon`}>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className={`rwdIcon`}>
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
      <div className="headBox">
        <div className={active}>
          <p className="navIcon">
            <FontAwesomeIcon icon={faGithub} />
          </p>
          <input placeholder="Search or jump to ...."></input>
          <p className="navText">Pull requests</p>
          <p className="navText">Issies</p>
          <p className="navText">Codespaces</p>
          <p className="navText">Marketplace</p>
          <p className="navText">Explore</p>
          <p className="rwdNavText">Sponsors</p>
          <p className="rwdNavText">Settings</p>
          <div className="rwdNavText">
            <img
              style={{
                width: "2rem",
                borderRadius: "50%",
                marginRight: "0.75rem",
              }}
              src={Profot}
            ></img>
            Feng8607
          </div>
          <div className="rwdNavText">
            <FontAwesomeIcon
              style={{ marginRight: "0.75rem" }}
              icon={faArrowRightToBracket}
            />
            Sign out
          </div>
        </div>
        <div className="right">
          <p className="navText">
            <FontAwesomeIcon icon={faBell} />
          </p>
          <p className="navText">
            <FontAwesomeIcon icon={faPlus} />
          </p>
          <div className="navProfot">
            <img src={Profot}></img>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
