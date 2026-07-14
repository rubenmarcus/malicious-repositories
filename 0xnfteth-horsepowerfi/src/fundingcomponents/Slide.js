import React, { useState, useEffect, useContext } from "react";
import SlideLBtn2 from "../images/SlideLBtn2.svg";
import SlideRBtn2 from "../images/SlideRBtn2.svg";
import Slidecontent1 from "../images/Slidecontent1.png";
import Slidecontent2 from "../images/Slidecontent2.png";
import SlideRBtnHo2 from "../images/SlideRBtnHo2.svg";
import SlideLBtnHo2 from "../images/SlideLBtnHo2.svg";
import { useAccount } from "wagmi";
import SpinnerImg from "../images/Spinner.jpg";
import _ from "lodash";

export const Slide = (props) => {
  const { address } = useAccount();
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const [isHoveredL, setIsHoveredL] = useState(false);
  const [isHoveredR, setIsHoveredR] = useState(false);
  const [allNfts, setAllNfts] = useState([]);
  const [ownedTokenIds, setOwnedTokenIds] = useState();
  const {
    availableNfts,
    availableNftIds,
    stakedNfts,
    stakedNftIds,
    isStaked,
    resetTokenID,
    resetCurrentStaked,
    activeBtn,
  } = props.contextData;

  useEffect(() => {
    (async () => {
      if (!address) return;
      setOwnedTokenIds(availableNftIds.concat(stakedNftIds));
      setAllNfts(availableNfts.concat(stakedNfts));
    })();
  }, [availableNftIds, stakedNftIds, availableNfts, stakedNfts, address]);

  const setChange = (params) => {
    setIndex(params);
    resetTokenID(ownedTokenIds[params]);
    resetCurrentStaked(isStaked[params]);
  };

  return (
    <div
      className="slideshowIn"
      style={
        allNfts.length !== 0
          ? { border: "1px solid rgba(95, 61, 255, 1)" }
          : { border: "none" }
      }
    >
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {allNfts.length === 0 ? (
          <img
            src={SpinnerImg}
            width={424}
            height={424}
            className="loadingImg"
          />
        ) : (
          allNfts.map((item, index) => (
            <div className="Slide">
              <video
                src={item}
                width="100%"
                height={"100%"}
                alt="MetaHorse"
                autoPlay={true}
                muted
                playsInline
              >
                <source src={item} />
              </video>
            </div>
          ))
        )}
      </div>
      {allNfts.length !== 0 ? (
        <div className="slideTools" style={{ height: "0px" }}>
          <img
            src={isHoveredL === true ? SlideLBtnHo2 : SlideLBtn2}
            alt="My"
            id="slideLBtn"
            onClick={() => {
              index === 0
                ? setChange(allNfts.length - 1)
                : setChange(index - 1);
            }}
            onMouseEnter={() => setIsHoveredL(true)}
            onMouseLeave={() => setIsHoveredL(false)}
          />
          <img
            src={isHoveredR === true ? SlideRBtnHo2 : SlideRBtn2}
            alt="My"
            id="slideRBtn"
            onClick={() => {
              index === allNfts.length - 1
                ? setChange(0)
                : setChange(index + 1);
            }}
            onMouseEnter={() => setIsHoveredR(true)}
            onMouseLeave={() => setIsHoveredR(false)}
          />
        </div>
      ) : (
        ""
      )}

      <div className="slideContent">
        <div>
          <div id="slideContent1">
            <img src={Slidecontent1} alt="My" />
          </div>
          <div>
            <p>History </p>
          </div>
        </div>
        <div id="slideContent2">
          <div>
            <div>
              <img src={Slidecontent2} alt="My" />
            </div>
            <div>
              <p>1156</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
