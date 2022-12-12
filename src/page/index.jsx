import React, { useState } from "react";
import Profot from "../image/Jack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faCode,
  faChartLine,
  faCodePullRequest,
  faShield,
  faTableList,
  faStar,
  faEye,
  faCodeFork,
  faCaretDown,
  faCodeBranch,
  faTag,
  faClockRotateLeft,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleDot,
  faCirclePlay,
  faFile,
} from "@fortawesome/free-regular-svg-icons";

const index = () => {
  const [buttoncontent, setButtoncontent] = useState("leftSecond");
  const navToggle = () => {
    buttoncontent === "leftSecond"
      ? setButtoncontent("leftSecond dis")
      : setButtoncontent("leftSecond");
  };
  return (
    <div className="Home">
      <div className="navHeader">
        <div className="navContainer">
          <div className="navTop">
            <div className="topFirst">
              <a className="topIcon">
                <FontAwesomeIcon
                  style={{ fontSize: "1.25rem" }}
                  icon={faBookBookmark}
                />
              </a>
              <p className="topContainer">Feng8607</p>
              <p>/</p>
              <p className="topContainer">Git-project</p>
              <p className="topPublic">public</p>
            </div>
            <div className="topSecond">
              <div className="button">
                <FontAwesomeIcon
                  style={{ marginRight: "0.25rem" }}
                  icon={faEye}
                />
                watch
                <p
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "rgb(200,200,200)",
                  }}
                >
                  1
                </p>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className="buttonSum">
                <div className="buttonFirst">
                  <FontAwesomeIcon
                    icon={faCodeFork}
                    style={{ marginRight: "0.5rem" }}
                  />
                  <p className="IconBox">Fork</p>
                  <p
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgb(200,200,200)",
                    }}
                  >
                    0
                  </p>
                </div>
                <div className="buttonSecond">
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
              <div className="buttonSum">
                <div className="buttonFirst">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "0.5rem" }}
                  />
                  <p className="IconBox">Star</p>
                  <p
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgb(200,200,200)",
                    }}
                  >
                    0
                  </p>
                </div>
                <div className="buttonSecond">
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
            </div>
            <div className="topRwd">
              <div>這是git切版網頁</div>
              <div className="Rwd-Sum">
                <div className="buttonStart">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "0.5rem" }}
                  />
                  <p className="IconBox">0 Stars</p>
                </div>
                <div className="buttonFork">
                  <FontAwesomeIcon
                    icon={faCodeFork}
                    style={{ marginRight: "0.5rem" }}
                  />
                  <p className="IconBox">0 forks</p>
                </div>
              </div>
              <div className="Rwd-buttonSum">
                <div className="buttonStart">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "0.5rem" }}
                  />
                  <p className="IconBox">Star</p>
                </div>
                <div className="buttonEye">
                  <FontAwesomeIcon
                    style={{ marginRight: "0.5rem" }}
                    icon={faEye}
                  />
                  watch
                  <FontAwesomeIcon
                    style={{ marginLeft: "0.5rem" }}
                    icon={faCaretDown}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="navBar">
            <div className="navbar-xl">
              <div className="navGuide">
                <FontAwesomeIcon
                  style={{ marginRight: "0.75rem" }}
                  icon={faCode}
                />
                <p>Code</p>
              </div>
              <div className="Issues">
                <FontAwesomeIcon
                  style={{ marginRight: "0.75rem" }}
                  icon={faCircleDot}
                />
                <p>Issues</p>
              </div>
              <div className="Pull">
                <FontAwesomeIcon
                  style={{ marginRight: "0.75rem" }}
                  icon={faCodePullRequest}
                />
                <p>Pull requests</p>
              </div>
              <div className="Actions">
                <FontAwesomeIcon
                  style={{ marginRight: "0.75rem" }}
                  icon={faCirclePlay}
                />
                <p>Actions</p>
              </div>
              <div className="Projects">
                <FontAwesomeIcon
                  style={{ marginRight: "0.75rem" }}
                  icon={faTableList}
                />
                <p>Projects</p>
              </div>
              <div className="Security">
                <FontAwesomeIcon
                  style={{ marginRight: "1rem" }}
                  icon={faShield}
                />
                <p>Security</p>
              </div>
              <div className="Insights">
                <FontAwesomeIcon
                  style={{ marginRight: "1rem" }}
                  icon={faChartLine}
                />
                <p>Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeContainer">
        <div className="containerBox">
          <div className="leftContainer">
            <div className="leftTop">
              <div className="leftfirst">
                <div className="buttonSum">
                  <FontAwesomeIcon
                    style={{ marginRight: "0.25rem" }}
                    icon={faCodeBranch}
                  />
                  main
                  <p
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgb(200,200,200)",
                    }}
                  ></p>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className="buttonBranch">
                  <FontAwesomeIcon
                    style={{ marginRight: "0.25rem" }}
                    icon={faCodeBranch}
                  />
                  <h3>1 branch</h3>
                </div>
                <div className="buttonBranch">
                  <FontAwesomeIcon
                    icon={faTag}
                    style={{ marginRight: "0.25rem" }}
                  />
                  <h3>0 tags</h3>
                </div>
              </div>
              <div className="moreSum">
                <div className="more" onClick={navToggle}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
                <div className={buttoncontent}>
                  <div className="buttonGo">
                    <p>Go to file</p>
                  </div>
                  <div className="buttonAdd">
                    <p>Add file</p>
                    <FontAwesomeIcon className="rwdIcon" icon={faCaretDown} />
                  </div>
                  <div className="buttonCode">
                    <FontAwesomeIcon className="rwdIcon" icon={faCode} />
                    <p>Code</p>
                    <FontAwesomeIcon className="rwdIcon" icon={faCaretDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="containerBody">
              <div className="containerNarrative">
                <div className="NarrativeLeft">
                  <img className="pic" src={Profot}></img>
                  <p>Feng8607</p>
                  <div className="rwd-title">
                    <p className="rwd-fileCode">a4b4020</p>
                  </div>
                  <p className="decription">修改資料庫名稱</p>
                </div>
                <div className="NarrativeRight">
                  <p className="fileCode">a4b4020</p>
                  <p className="fileDate">on Aug 29</p>
                  <div className="commits">
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                    <p>6</p>
                    <p className="commitstent">commits</p>
                  </div>
                </div>
              </div>
              <div className="containerContent">
                <div className="fileTitle">
                  <FontAwesomeIcon icon={faFile} />
                  <p>controllers</p>
                </div>
                <p className="fileDepiction">
                  修改後台資料庫名稱，刪除沒用到資料庫
                </p>
                <p className="fileDate">3 months ago</p>
              </div>
              <div className="containerContent">
                <div className="fileTitle">
                  <FontAwesomeIcon icon={faFile} />
                  <p>index.html</p>
                </div>
                <p className="fileDepiction">
                  修改後台資料庫名稱，刪除沒用到資料庫
                </p>
                <p className="fileDate">3 months ago</p>
              </div>
              <div className="containerContent">
                <div className="fileTitle">
                  <FontAwesomeIcon icon={faFile} />
                  <p>index.css</p>
                </div>
                <p className="fileDepiction">新增樣式</p>
                <p className="fileDate">2 day ago</p>
              </div>
              <div className="containerContent">
                <div className="fileTitle">
                  <FontAwesomeIcon icon={faFile} />
                  <p>index.js</p>
                </div>
                <p className="fileDepiction">修改名稱</p>
                <p className="fileDate">1 months ago</p>
              </div>
              <div
                style={{ borderBottom: "none" }}
                className="containerContent"
              >
                <div className="fileTitle">
                  <FontAwesomeIcon icon={faFile} />
                  <p>controllers</p>
                </div>
                <p className="fileDepiction">
                  修改後台資料庫名稱，刪除沒用到資料庫
                </p>
                <p className="fileDate">3 months ago</p>
              </div>
            </div>
            <div className="readme">
              <h2>README.md</h2>
              <p>
                Git 切版網頁
                <br />
                Git切版練習，主要練習如何切出別人的網頁版面， <br />
                藉由觀察別人的網頁設計，來還原並做正確的切版
                <br />
                上傳日期：2022-04-14
              </p>
            </div>
          </div>
          <div className="rightContainer">
            <div>
              <h2 style={{ marginTop: "0" }}>About</h2>
              <p>No description, website, or topics provided.</p>
              <p>
                <FontAwesomeIcon icon={faStar} /> 0 stars
              </p>
              <p>
                <FontAwesomeIcon icon={faEye} /> 1 watching
              </p>
              <p>
                <FontAwesomeIcon icon={faCodeFork} /> 0 forks
              </p>
            </div>
            <div className="Releases">
              <h2>Releases</h2>
              <p>No releases published</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
