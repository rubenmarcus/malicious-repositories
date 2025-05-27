"use client";

import React, { useEffect } from "react";
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
import SideEllipse from "@/public/assets/svg/sidebar.svg";
import Chat from "@/public/assets/svg/chat.svg";
import TippingModal from "./TippingModal";
import { Sheet, SheetContent } from "../ui/Sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const MobileSidebar = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  const handleClose = (open: boolean) => {
    dispatch(setIsOpen(false));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)"); // Tailwind's 2xl breakpoint

    const handleMediaChange = (e: MediaQueryListEvent) => {
      console.log("Media query matched:", e.matches);
      if (e.matches) {
        dispatch(setIsOpen(false));
      }
    };

    // Add the listener to the media query
    mediaQuery.addEventListener("change", handleMediaChange);

    // Initial check
    if (mediaQuery.matches) {
      dispatch(setIsOpen(false));
    }

    // Cleanup function to remove the listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);
  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="2xl:hidden">
        <div
          className={`gBorder px-[13px] rounded-3xl  fixed right-0 pt-[25px] pb-[110px] top-[70px] bottom-20 border-l border-l-[#21201F] bg-[#181715] flex 2xl:hidden max-h-screen flex-col gap-[14px] w-[273px] duration-300 z-50`}
        >
          {/* <div className="abolute h-[60px] bording w-1" /> */}
          <SideEllipse className={"absolute top-0 left-0"} />
          <div className="flex border-[2px]  yellogradient overflow-hidden min-h-[120px] relative">
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
            <div className="relative">
              <h2 className="absolute right-3 text-nowrap pt-5 text-xs font-medium text-[#9C9C9C] leading-4 uppercase">
                Flash Giveaway
              </h2>
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
                      <Image
                        src={item.image}
                        height={30}
                        width={30}
                        alt="player"
                      />
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
          <div className=" absolute flex justify-between bottom-0 mb-2 rounded-[22px] left-[13px] right-[13px] h-[80px] pt-[12px] pl-[12px] pr-[15px] border border-[#1E1D1B] bg-[#181716] z-30 overflow-hidden">
            <input
              type="text"
              name="message"
              placeholder="Send message"
              className="bg-inherit outline-none h-6"
            ></input>
            <div className="bg-inherit border border-[#25221D] rounded-lg p-[10px] h-fit overflow-hidden relative">
              <Messenger />
              <Chat className="absolute -top-5 -right-5" />
            </div>
            <Chat className="absolute top-0 right-0" />
          </div>
          <Image
            src={background}
            className="absolute w-full bottom-0 z-20"
            alt="bg"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
