import React from "react";
import Backstrips from "@/public/assets/svg/buttonstrips.svg";
import Image from "next/image";
import { displayNumbers } from "@/utils/usableFunc";
import { IoPersonSharp } from "react-icons/io5";

const StatsCard = ({
  title,
  img,
  stat,
  variant,
}: {
  title: string;
  img?: any;
  stat: number;
  variant?: string;
}) => {
  return (
    <div className="relative flex items-center justify-center flex-col bg-[#21201F] w-full rounded-[10px] py-[14px] overflow-hidden">
      <Backstrips className={"absolute top-0 left-0 z-10"} />
      <h2
        className={
          "font-stopbuck text-lg leading-[21.8px] text-[#DDDDDD] !z-50"
         }
      >
        {title}
      </h2>
      <div className="flex items-center gap-[9px]">
        {img ? (
          <Image src={img} alt="image" className="w-5 h-5 object-cover" />
        ) : variant === "red" ? (
          <div>
          <IoPersonSharp className="text-[#f82123]" fontSize={24} />
          <IoPersonSharp className="text-[#f82123] rotate-180 absolute blur-sm top-14  h-3" fontSize={24} />
          </div>
        ) : (
          variant === "green" && (
            <div>
            <IoPersonSharp className="text-[#11c619]" fontSize={24} />
            <IoPersonSharp className="text-[#11c619] rotate-180 absolute blur-sm top-14  h-3" fontSize={24} />
            </div>
          )
        )}
        <h2 className="text-base font-medium leading-[19.2px] flex">
          {variant === "green" ? "+" : ""}
          {displayNumbers(Math.floor(stat))}
          {Math.round((stat-Math.floor(stat))*100) ? <p className="text-gray-500">.{displayNumbers(Math.round((stat-Math.floor(stat))*100))}</p>:""}
        </h2>
      </div>
    </div>
  );
};

export default StatsCard;
