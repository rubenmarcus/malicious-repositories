"use client";

import { useEffect, useState } from "react";
import ProgressPic from "@/public/assets/svg/progress.svg";
import ProgressBig from "@/public/assets/svg/progressbig.svg";
import { FaCaretDown } from "react-icons/fa";
type progressType = {
  done: number;
  height: number;
};


const Progress: React.FC<progressType> = ({ done, height }) => {
  const [style, setStyle] = useState({});
  const [caretStyle, setCaretStyle] = useState({});

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    const newCaretStyle = {
      left: `${done-5}%`,
    };

    setStyle(newStyle);
    setCaretStyle(newCaretStyle);
  }, [done]);

  return (
    <div className="progress relative">
      <FaCaretDown
        className="absolute rounded-[12px] -top-8 text-[#da1a27] transition-all duration-1000 "
        style={caretStyle}
        fontSize={32}
      />
      <div
        className={`progress-done rounded-[12px] relative overflow-hidden`}
        style={{ ...style, height: height }}
      >
        {height>30?
          <ProgressBig className="absolute -top-[15px] left-[140px] rotate-[6deg] scale-x-[1.4] rounded-[12px] inset-0 opacity-10 brightness-200"  />:
        <ProgressPic className="absolute rounded-[12px] -top-[5px] left-[68px] scale-x-[1.2] inset-0 opacity-20  "  />}
      </div>
    </div>
  );
};

export default Progress;
