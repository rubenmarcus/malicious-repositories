import React, { useState } from "react";
import HomeBtn from "../images/HomeBtn.svg"; // Import the SVG file for the initial src
import ChangeHomeBtn from "../images/HomeBtn2.svg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
export const HeaderLeft = () => {
  const [imgHomeBtn, setImgHomeBtn] = useState(HomeBtn);

  const handleHomeEnter = () => {
    setImgHomeBtn(ChangeHomeBtn);
  };

  const handleHomeLeave = () => {
    setImgHomeBtn(HomeBtn);
  };
  return (
    <div className="leftHeader">
      <Link to="#">
        <img src={logo} alt="logo" className="leftHeadImg" />
      </Link>
      <span id="leftHeaderSpan">MUNITYHUB</span>
      <Link to="/">
        <img
          src={imgHomeBtn}
          alt="My"
          id="homeBtn"
          onMouseEnter={handleHomeEnter}
          onMouseLeave={handleHomeLeave}
        />
      </Link>
    </div>
  );
};
