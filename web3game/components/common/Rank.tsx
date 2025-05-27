import React from "react";
import RankImage from "@/public/assets/svg/rank.svg";

const Rank = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center justify-center relative w-full">
      <RankImage className="absolute z-10" />
      <h2 className="text-base font-medium font-fredoka z-50">{level}</h2>
    </div>
  );
};

export default Rank;
