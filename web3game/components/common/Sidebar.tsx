"use client";

import React from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { setIsOpen } from "@/store/reducers/sidebarReducer";
import Discord from "@/public/assets/svg/discord.svg";
import Twitter from "@/public/assets/svg/twitter.svg";
import Battery from "@/public/assets/svg/battery.svg";
import { sidebarData } from "@/config/constants/sidebar";
import background from "@/public/assets/images/sidebackground.png";
import Messenger from "@/public/assets/images/messenger.svg";
import { FaXmark } from "react-icons/fa6";
import SideEllipse from "@/public/assets/svg/sidebar.svg"
import Chat from "@/public/assets/svg/chat.svg"
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import TippingModal from "./TippingModal";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  const handleSidebarClose = () => {
    dispatch(setIsOpen(false));
  };
  return (
    <>
    <div
      className={`gBorder absolute px-[13px] h-screen overflow-y-auto overflow-x-hidden bording  hidden right-0 2xl:relative top-0 pt-[25px] pb-[110px] border-l border-l-[#21201F] bg-[#181715] 2xl:flex flex-col gap-[14px] min-w-[333px] max-w-[333px] duration-300 z-50`}
    >
      <SideEllipse className={"absolute top-0 left-0"}/>      
      {
        <Button
          onClick={handleSidebarClose}
          variant={"ghost"}
          className="!border !border-[#292828] !bg-[#21201F] !rounded-full !p-3 w-fit self-end 2xl:hidden"
        >
          <FaXmark fontSize={18} />
        </Button>
      }
      <div className="w-[290px] ml-3 h-[2px] border yellogradient border-1px absolute z-55 top-[145px]" />
      <div className="flex border-[2px] !rounded-[15px] border-[#21201f]  overflow-hidden min-h-[120px] relative">
        <div className="py-5 pl-5 flex flex-col items-center gap-4">
          <h2 className="text-[#FFAE33] text-[20px] leading-6 font-medium">
            $52.26
          </h2>
          <Button className="bg-gradient-to-t from-[#FFAA2B] to-[#FFC266] text-base font-stopbuck font-extrabold rounded-[13px] h-[40px]">
            <span className="text-gradient bg-gradient-to-t from-[#FFC28A] to-[#FFFFFF]">
              JOIN
            </span>
          </Button>
        </div>
        <div className="absolute right-0">
          <h2 className="absolute right-3 text-nowrap pt-5 text-xs font-medium text-[#9C9C9C] leading-4 uppercase">Flash Giveaway</h2>
          <Battery className="mt-5" />
        </div>
      </div>
      <div className="bg-[#1A1A19] rounded-2xl flex justify-between p-1 border border-[#272625]">
        <div className="flex items-center gap-3 ">
          <div className="flex justify-center w-[37px] items-center px-[10px] py-[12px] border border-[#272625] bg-[#1A1A19] rounded-xl">
            <Discord />
          </div>
          <div className="flex justify-center w-[37px] items-center px-[10px] py-[12px] border border-[#272625] bg-[#1A1A19] rounded-xl">
            <Twitter />
          </div>
        </div>
        <div className="px-[8px] py-[10.5px] border border-[#272625] bg-[#1A1A19] rounded-xl flex justify-between items-center w-[106px]">
          <h2 className="font-medium text-xs">238 Online</h2>
          <div className="w-[10px] h-[10px] bg-[#00FF19] border border-[#00CC14] rounded-full mt-[2px]"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[14px] overflow-y-scroll noScrollbar flex-1 pb-5">
        {sidebarData.map((item, idx) => (
          <div
            className="p-2 flex flex-col gap-[9px] w-full bg-[#21201F] border border-[#2B2826] rounded-xl"
            key={idx}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[7px]">
                <div className="overflow-hidden rounded-md">
                  <Image src={item.image} height={30} width={30} alt="player" />
                </div>
                <h2 className="text-[13px] font-normal">{item.name}</h2>
              </div>
              <div className="flex items-start gap-[7px] z-10">
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="self-center flex items-center justify-center px-[13px] py-[3.5px] bg-[#1A1A19] border text-xs border-[#272625] text-[#686868] rounded-md">
                      Tip
                    </button>
                  </DropdownMenuTrigger>
                  <TippingModal />
                </DropdownMenu>
                <div
                  className={`flex items-center justify-center text-[#21201F] mt-[1px] text-[10px] px-[5.5px] rounded-sm h-[15px] w-[29px] ${
                    idx % 2 === 0
                      ? "bg-gradient-to-t from-[#9F4D00] to-[#FF8515]"
                      : "bg-gradient-to-t from-[#7DACC6] to-[#CEE8F6]"
                  }`}
                >
                  {item.rank}
                </div>
              </div>
            </div>
            <h2 className="text-xs text-[#9C9C9C] font-normal">
              {item.message}
            </h2>
          </div>
        ))}
      </div>
      <div className=" absolute flex justify-between w-[307px] bottom-0 mb-2 rounded-[22px] right-[13px] h-[80px] pt-[12px] pl-[12px] pr-[15px] border border-[#1E1D1B] bg-[#181716] z-30 overflow-hidden">
        <input type="text"
          name="message"
          placeholder="Send message"
          className="bg-inherit outline-none h-6"
        ></input>
        <div className="bg-inherit border border-[#25221D] rounded-lg p-[10px] h-fit overflow-hidden relative">
          <Messenger />
          <Chat className="absolute -top-5 -right-5"/>
        </div>
        <Chat className="absolute top-0 right-0"/>
      </div>
      <Image
        src={background}
        className="absolute w-full bottom-0 z-20"
        alt="bg"
      />
    </div>
    <MobileSidebar/>
    </>
  );
};

export default Sidebar;
