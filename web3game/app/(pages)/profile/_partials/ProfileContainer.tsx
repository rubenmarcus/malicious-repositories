"use client";

import React from "react";
import imperial from "@/public/assets/images/imperial.png";
import Image from "next/image";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import Backstrips from "@/public/assets/svg/buttonstrips.svg";
import tools from "@/public/assets/images/tools.png";
import { displayNumbers } from "@/utils/usableFunc";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
const ProfileContainer = () => {
    return (
        <div className="p-3 flex flex-col gap-[10px] rounded-[18px] lg:w-1/2 border border-[#21201F]">
            <div className="flex gap-5 items-center h-[95px]">
                <div className="w-[98px] h-full overflow-hidden">
                    <Image
                        src={imperial}
                        className="!w-[98px] !h-[98px] sm:w-full sm:h-full object-cover rounded-[22px] border-2 border-[#ED3440]/50"
                        alt="userProfile"
                    />
                </div>
                <div className="flex flex-col gap-[21px]">
                    <div className="flex flex-col gap-[5px]">
                        <div className="flex gap-[14px] items-center">
                            <h2 className="text-[22px] leading-6 font-medium">
                                mjolnir
                            </h2>
                            <div className="flex justify-between gap-[150px] pt-3">
                                <div className="flex gap-[7px]">
                                    <div className="h-[22px] w-[63px] px-[2px] rounded flex items-center bg-[#ED3440]/15 border-[0.5px] border-[#F94954]/40">
                                        <div className="rounded-sm font-fredoka bg-gradient-to-t from-[#F94954] to-[#FF535E] text-[10px] py-[1px] w-full text-center font-normal">
                                            Developer
                                        </div>
                                    </div>
                                    <div className="py-[1.5px] rounded-sm px-[5.5px] h-[16px] mt-1 text-[10px] font-normal text-[#21201F] bg-gradient-to-t from-[#949494] to-[#FFFFFF]">
                                        223
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xs font-normal text-[#686868]">
                            Joined Rustyflips on 10/7/24
                        </h2>
                    </div>
                    <div className="flex gap-[14px] items-center">
                        <Button className="!bg-[#1A1A19] py-2 h-8 !border !border-[#272625] rounded-lg flex items-center gap-1">
                            <FaArrowUpFromBracket
                                className="rotate-180"
                                fontSize={14}
                            />
                            <h2 className="pl-1 font-fredoka text-[14px] font-normal text-[#eeeeee]">
                                Deposit
                            </h2>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full border-[1px] border-dashed border-[#2D2B2A]/50"></div>
            <div className="flex flex-col gap-[7px]">
                <div className="flex items-center w-full border border-[#2D2B2A] rounded-lg">
                    <Input
                        type="text"
                        placeholder="https://steamcommunity.com/tradeoffer/new/?partner=1154920102&token=hF20ToIC"
                        className="pl-3 py-[16px] overflow-x-hidden flex-1 pr-[10px] text-nowrap border-none  rounded-none text-[12px] h-full"
                    />

                    <div className="flex pl-[21px] justify-end gap-3 py-1 pr-[6.5px] border-l border-[#2D2B2A]">
                        <div className="outline-none px-[7px] py-[5px] text-[#686868] rounded-[6px] bg-[#1A1A19] !text-[16px] !font-fredoka border border-[#272625] cursor-pointer">
                            Find it here
                        </div>
                        <Button
                            variant={"secondary"}
                            className=" rounded-[8px] h-[33px]"
                        >
                            Save
                        </Button>
                    </div>
                </div>
                <div className="flex items-center flex-col gap-5 sm:flex-row mt-[7px] justify-between">
                    <div className="relative py-[6.5px] px-[14px] w-full sm:w-[179px] h-[52px] bg-[#21201F] rounded-[10px] overflow-hidden">
                        <Backstrips className={"absolute top-0 left-0 z-10"} />
                        <h2 className={"text-sm absolute z-50 font-stopbuck"}>
                            Total deposited
                        </h2>
                        <div className="flex items-center gap-[9px] mt-4">
                            <Image
                                src={tools}
                                alt="tools"
                                className="w-5 h-5 object-cover"
                            />
                            <h2 className="font-fredoka text-base font-normal flex">
                                {displayNumbers(23455)}.
                                <p className="text-gray-500">
                                    {displayNumbers(56)}
                                </p>
                            </h2>
                        </div>
                    </div>
                    <div className="border-[0.8px] hidden sm:block  h-[30px] border-dashed border-[#2D2B2A]/50"></div>
                    <div className="borderinggreen relative py-[6.5px] px-[14px] w-full sm:w-[179px] h-[52px] bg-[#21201F] rounded-[10px] overflow-hidden">
                        <Backstrips className={"absolute  top-0 left-0 z-40"} />
                        <h2 className={"text-sm absolute z-50 font-stopbuck"}>
                            Total net profit
                        </h2>
                        <div className="flex items-center gap-[9px] mt-4 ">
                            <Image
                                src={tools}
                                alt="tools"
                                className="w-5 h-5 object-cover"
                            />
                            <h2 className="font-fredoka text-base font-normal flex">
                                {displayNumbers(23455)}.
                                <p className="text-gray-500">
                                    {displayNumbers(56)}
                                </p>
                            </h2>
                        </div>
                    </div>
                    <div className="border-[0.8px] hidden sm:block  h-[30px] border-dashed border-[#2D2B2A]/50"></div>
                    <div className="relative py-[6.5px] px-[14px] w-full sm:w-[179px] h-[52px] bg-[#21201F] rounded-[10px] overflow-hidden">
                        <Backstrips className={"absolute top-0 left-0 z-10"} />
                        <h2 className={"text-sm absolute z-50 font-stopbuck"}>
                            <span className="z-50">Total WAGERED</span>
                        </h2>
                        <div className="flex items-center gap-[9px] mt-4">
                            <Image
                                src={tools}
                                alt="tools"
                                className="w-5 h-5 object-cover"
                            />
                            <h2 className="font-fredoka text-base font-normal flex">
                                {displayNumbers(23455)}.
                                <p className="text-gray-500">
                                    {displayNumbers(56)}
                                </p>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;
