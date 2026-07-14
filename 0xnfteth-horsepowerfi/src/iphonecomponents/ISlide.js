import React, { useState, useEffect, useRef } from "react";
import Slide1 from "../images/Slide-1.jpg";
import Slide2 from "../images/Slide-2.jpg";
import Slide3 from "../images/Slide-3.jpg";
import SlideL from "../images/SlideL.svg";
import SlideR from "../images/SlideR.svg";
import SlideLBtn2 from "../images/SlideLBtn2.svg";
import SlideRBtn2 from "../images/SlideRBtn2.svg";
import SlideLBtnHo2 from "../images/SlideLBtnHo2.svg";
import SlideRBtnHo2 from "../images/SlideRBtnHo2.svg";

const images = [Slide1, Slide2, Slide3];
const delay = 4500;
export const ISlide = () => {
  const [index, setIndex] = useState(0);
  const [isHoveredL, setIsHoveredL] = useState(false);
  const [isHoveredR, setIsHoveredR] = useState(false);
  const timeoutRef = useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="Iphoneslideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((item, index) => (
          <div
            className="slideHorse"
            key={index}
            style={{ backgroundImage: `url(${item})` }}
          />
        ))}
      </div>
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      <div className="slideTools">
        <img
          src={isHoveredL ? SlideLBtnHo2 : SlideLBtn2}
          width="80"
          alt="My"
          id="slideLBtn"
          onMouseEnter={() => setIsHoveredL(true)}
          onMouseLeave={() => setIsHoveredL(false)}
          onClick={() => {
            index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
          }}
        />
        <img
          src={isHoveredR ? SlideRBtnHo2 : SlideRBtn2}
          width="80"
          alt="My"
          id="slideRBtn"
          onMouseEnter={() => setIsHoveredR(true)}
          onMouseLeave={() => setIsHoveredR(false)}
          onClick={() => {
            index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
          }}
        />
        <img src={SlideL} alt="My" id="slideL" />
        <img src={SlideR} alt="My" id="slideR" />
        <div id="lineL"></div>
        <div id="lineR"></div>
      </div>
    </div>
  );
};
