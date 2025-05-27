"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const BackVideoPlayer = () => {
  const [isClient, setIsClient] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [playerWidth, setPlayerWidth] = useState<number | string>();
  const [playerHeight, setPlayerHeight] = useState<number | string>();

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    setPlaying(true);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
  };

  useEffect(() => {
    setIsClient(true);
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 1240) {
      setPlayerWidth("100%");
      setPlayerHeight("100%");
    } else if (screenWidth > 1023) {
      setPlayerWidth("100%");
      setPlayerHeight("100%");
    } else if (screenWidth > 767) {
      setPlayerWidth("100%");
      setPlayerHeight("100%");
    } else {
      setPlayerWidth("100%");
      setPlayerHeight("100%");
    }
  }, [screenWidth]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full object-fill h-full rounded-[32px] overflow-hidden"
    >
      {isClient ? (
        <ReactPlayer
          playing={playing}
          url={"/assets/videos/RustyFlip.mp4"}
          light={false}
          width={playerWidth}
          height={playerHeight}
          muted={true}
          loop={true}
          pip={true}
          // style={{ filter: "brightness(30%)" }}
        />
      ) : null}
    </div>
  );
};

export default BackVideoPlayer;
