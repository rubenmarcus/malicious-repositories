"use client";
import { AppState, useAppSelector, useAppDispatch } from "@/store/store";
import { login } from "@/store/actions/authActions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { navLinks } from "@/config/constants/navlinks";
import UserContainer from "./UserContainer";
import { AiOutlineMenu } from "react-icons/ai";
import { displayNumbers } from "@/utils/usableFunc";
import tools from "@/public/assets/images/tools.png";
import DepositButton from "./DepositButton";
import ShopButton from "./ShopButton";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { setIsOpen } from "@/store/reducers/sidebarReducer";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isJackpot, setIsJackpot] = useState(true);
    const { isAuthenticated, user } = useAppSelector(
        (state: AppState) => state.auth
    );
    const isOpen = useAppSelector((state) => state.sidebar.isOpen);

    const handleSidebarOpen = () => {
        dispatch(setIsOpen(isOpen ? false : true));
    };

    const handleSignIn = () => {
        dispatch(login("fghjxxxqwertyujdsdhgfdsaghytreqw"));
    };

    const handleClose = () => {
        setMobileNavOpen(false);
    };

    const handleJackpotCoinflipToggle = () => {
        setIsJackpot(!isJackpot);
    };

    const [navbtn, setNavbtn] = useState(navLinks);
    return (
        <>
            <div className="flex fixed items-center justify-between pl-6 pr-96 pring py-[10px] z-50  w-[100%] mt-5 md:mt-0">
                <div className="flex items-center gap-[20px]">
                    <Link href={"/"} className="z-50">
                        <Image
                            src={"/logo.png"}
                            height={150}
                            width={143}
                            className=" h-[34px] md:h-[58px] w-[84px] md:w-[143px] object-cover"
                            alt="logo"
                        />
                    </Link>
                    <div className="flex res-min items-center gap-[13px] bg-[#21201F] border border-[#222120] p-[6px] rounded-full">
                        {navbtn.map((nav, idx) => (
                            <Link
                                key={idx}
                                href={nav.name.toLowerCase().replace(/ /, "-")}
                                className="bg-[#1a1a18] rounded-full flex items-center gap-[9px] border border-[#2A2A28] p-2"
                                onClick={
                                    idx === 0
                                        ? handleJackpotCoinflipToggle
                                        : undefined
                                }
                            >
                                <nav.icon />
                                <h2 className="text-sm font-medium  text-[#686868]">
                                    {idx === 0
                                        ? isJackpot
                                            ? "Jackpot"
                                            : "Coinflip"
                                        : nav.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4 z-50">
                    {isAuthenticated ? (
                        <UserContainer user={user} />
                    ) : (
                        <Button onClick={handleSignIn} variant="secondary">
                            <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
                                sign in
                            </h2>
                        </Button>
                    )}
                    {
                        <Button
                            onClick={() => setMobileNavOpen(true)}
                            variant={"ghost"}
                            className="!border !border-[#292828] !bg-[#21201F] w-10 h-10 !rounded-xl !p-3  2xl:hidden"
                        >
                            <AiOutlineMenu fontSize={24} />
                        </Button>
                    }
                </div>
                <div
                    id="sidebar"
                    onClick={handleClose}
                    className={` ${
                        mobileNavOpen ? "block" : "hidden"
                    } fixed inset-0 h-[100vh]  bg-black bg-opacity-50 backdrop-blur-sm md:hidden z-40`}
                ></div>
                <div
                    className={`${
                        mobileNavOpen ? "scale-100 origin-center" : "scale-0"
                    } md:hidden z-40  fixed top-24 w-[calc(100%-52px)] mx-auto h-[428px] right-0 left-0 bottom-0 bg-[#21201F] py-[19.5px] px-[16.75px] rounded-[32px] flex flex-col gap-[27px]  transition-all`}
                >
                    <div className=" md:hidden flex w-full flex-col gap-3">
                        {navbtn.map((nav, idx) => (
                            <Link
                                key={idx}
                                href={nav.name.toLowerCase().replace(/ /, "-")}
                                className="rounded-[17px] flex items-center gap-[9px] py-3 px-5  bg-[#181716] border border-[#222120]"
                                onClick={
                                    idx === 0
                                        ? handleJackpotCoinflipToggle
                                        : undefined
                                }
                            >
                                <nav.icon />
                                <h2 className="text-sm font-medium leading-4 text-[#686868]">
                                    {idx === 0
                                        ? isJackpot
                                            ? "Jackpot"
                                            : "Coinflip"
                                        : nav.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                    {isAuthenticated && (
                        <div className="flex flex-col gap-[9px]">
                            {/* <div className="flex gap-[10px] self-end">
                <Button className="!bg-[#1A1A19] py-2 h-8 !border !border-[#272625] rounded-lg flex items-center gap-1">
                  <h2 className="pl-1 font-fredoka text-[14px] font-normal text-[#eeeeee]">
                    Deposit
                  </h2>
                </Button>
                <Button className="!bg-[#1A1A19] !border py-2 h-8 !border-[#272625] rounded-lg flex items-center gap-1">
                  <h2 className="pl-1 font-fredoka text-[14px] font-normal text-[#eeeeee]">
                    Withdraw
                  </h2>
                </Button>
                <Button className="!bg-[#1A1A19] !border py-2 h-8 !border-[#272625] rounded-lg flex items-center gap-1">
                  <h2 className="pl-1 font-fredoka text-[14px] font-normal text-[#eeeeee]">
                    invetory
                  </h2>
                </Button>
              </div> */}
                            <div className="w-full flex justify-between sm:justify-end gap-5">
                                <div className="flex items-center gap-[9px] bg-[#1A1A19] py-[11px] pl-3 pr-[7px] rounded-xl border border-[#272625]">
                                    <Image
                                        src={tools}
                                        alt="image"
                                        className="w-5 h-5 object-cover"
                                    />
                                    <h2 className="text-base font-medium leading-[19.2px]">
                                        {displayNumbers(user?.balance)}
                                    </h2>
                                </div>
                                <DepositButton />
                                <ShopButton />
                            </div>
                        </div>
                    )}
                </div>
                <Button
                    onClick={handleSidebarOpen}
                    className=" fixed right-[27px] z-50 top-[730px] flex items-center justify-center 2xl:hidden w-10 h-10 rounded-[13px] bg-gradient-to-t p-[10px] from-[#EC1B24] to-[#FF323B]"
                >
                    <HiMiniChatBubbleLeftRight className="w-5 h-5 text-white" />
                </Button>
            </div>
        </>
    );
};

export default Navbar;
