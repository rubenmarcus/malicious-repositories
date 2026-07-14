import React, { useState, useEffect, useRef } from "react";
import { SliderControl } from "./SliderControl";
import { Slider } from "./Slider";

export const Slides = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  const handleMouseMove = (event) => {
    const r = event.target.getBoundingClientRect();
    setX(event.clientX - (r.left + Math.floor(r.width / 2)));
    setY(event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  useEffect(() => {
    // Your existing useEffect code here
  }, [current]);

  return (
    <div className="islider">
      <ul className="islider__wrapper" style={wrapperTransform}>
        {slides.map((slide) => (
          <Slider
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
            handleMouseMove={handleMouseMove}
            handleMouseLeave={handleMouseLeave}
            x={x}
            y={y}
          />
        ))}
      </ul>

      <div className="islider__controls">
        <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};
