import React from "react";
import backgroundStrips2 from "@/public/assets/images/backgroundstrips2.png";
import Image from "next/image";
import Levelcard from "@/components/common/Levelcard";
import Progress from "@/components/common/Progress";
import Rank from "@/components/common/Rank";

const LevelCounter = () => {
  return (
    <div className="relative rounded-[18px] lg:w-1/2 border border-[#21201F] pt-[38px] px-3 flex flex-col gap-[22px] overflow-hidden">
      <Image
        src={backgroundStrips2}
        className="absolute -top-20 right-0 z-10"
        alt="background"
      />
      <div className="sm:flex flex-col gap-[10px] hidden ">
        <h2 className="text-sm font-medium">Levels</h2>
        <p className="text-xs font-normal text-[#9c9c9c] max-w-[207px]">
          Earn more XP by joining battles, starting battles etc.
        </p>
      </div>
      <div className="flex flex-col ">
        <div className=" flex justify-between">
          <Levelcard number={45} variant="primary" />
          <Levelcard number={46} variant="secondary" />
        </div>
        <div className="relative ">
          <Progress done={34.56} height={46} />
        </div>
        <h2 className="text-sm font-normal mt-[10px] mb-[12px] text-[#9c9c9c]  self-end">
          30 021 392 | 31 000 000 XP
        </h2>
      </div>
      <div className="absolute left-[35%] sm:left-[45%] top-3 flex items-center justify-center z-30 sm:top-[25%] w-[117px] mt-2">
        {/* <Rank level={245}/> */}
      </div>
    </div>
  );
};

export default LevelCounter;
