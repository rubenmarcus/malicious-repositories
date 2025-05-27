import React, { useState } from "react";
import { DialogContent } from "../ui/dialog";
import Image from "next/image";
import { displayNumbers } from "@/utils/usableFunc";
import tools from "@/public/assets/images/tools.png";
import Backstrips from "@/public/assets/svg/buttonstrips.svg";
import { Button } from "../ui/Button";
import { IoMdTrendingDown } from "react-icons/io";
import ToolsImage from "@/public/assets/images/tools.png";
import ExpandableText from "./ExpandableText";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

const item = {
    times: 5,
    amount: 12435.56,
};

const InspectUserDialog = () => {
    const itemsArray = Array.from({ length: 40 });
    const [isSelect, setIsSelect] = useState({
        white: "",
        red: "",
        isModal: false,
    });
    const show = () => {
        if (isSelect.red === "" && isSelect.white === "") return;
        setIsSelect({ ...isSelect, isModal: true });
    };
    const disClass =
        "brightness-50 hover:brightness-100 transition-all duration-200";
    const selClass =
        "brightness-100 hover:brightness-100 transition-all duration-200";
    return (
        <DialogContent className="w-fit border-none flex">
            <VisuallyHidden>
                <DialogTitle>InspectUserDialog</DialogTitle>
            </VisuallyHidden>
            <div className="flex flex-col bg-[#1A1A19] w-[308px] h-[532px] p-[16px] gap-[10px] items-center border border-[#272625] rounded-2xl">
                <div className="flex flex-col justify-between items-center gap-[5px] ">
                    <div
                        className="border-[#27262594] border  rounded-[12px] items-center flex justify-center w-[78px] h-[52px]"
                        style={{
                            boxShadow: "0px 7px 5.8px -5px #1E1E1E0F",
                        }}
                    >
                        <img
                            src="/assets/icons/user.svg"
                            className="w-[45px] h-[45px] pt-2"
                        />
                    </div>
                    <div
                        className={
                            "text-[16px] leading-[18.6px] text-[#C9C9C9] font-stopbuck"
                        }
                    >
                        user001{" "}
                    </div>
                </div>
                <div className="flex gap-[10px] justify-center">
                    <Button
                        variant={"secondary"}
                        className="w-[112px] h-[42px]"
                        onClick={() => {
                            show;
                        }}
                    >
                        BAN USER
                    </Button>
                    <div
                        className="text-[14px] border-[#27262594] border w-[99px] h-[38px] rounded-[12px] items-center flex justify-center"
                        style={{
                            boxShadow: "0px 7px 5.8px -5px #1E1E1E0F",
                        }}
                    >
                        Mute User
                    </div>
                </div>
                <div className="flex items-center w-full border border-[#2D2B2A] rounded-lg">
                    <div className="pl-3 py-[13px] overflow-x-hidden flex-1 pr-[10px] text-nowrap border-r border-[#2D2B2A] text-[10px] h-full">
                        <ExpandableText maxChars={70}>
                            https://steamcommunity.com/tradeoffer/new/?partner=1154920102&token=hF20ToIC
                        </ExpandableText>
                    </div>
                    <div className="flex pl-[15px] justify-end gap-3 py-1 pr-[6.5px]">
                        <div className="text-[13px] px-3 py-1 border border-[#2D2B2A] rounded-lg">
                            Copy
                        </div>
                    </div>
                </div>
                <div className="bg-[#21201F] w-full flex flex-col gap-[13px] rounded-[22px] p-[8px] border border-[#272625]">
                    <div
                        className={
                            "text-[#C9C9C9] text-[18px] leading-[21.6px] whitespace-nowrap font-stopbuck"
                        }
                    >
                        on-site balance
                    </div>

                    <div className="flex items-center justify-between w-[172px]">
                        <div className="flex ap-2">
                            <Image
                                src={ToolsImage}
                                height={30}
                                width={30}
                                alt="tools"
                            />
                            <div className="text-[#EEEEEE] leading-[21.6px] text-[18px] font-medium">
                                2,3487
                            </div>
                        </div>
                        <div className="flex items-center gap-[4px]">
                            <div className="text-[#DB1A28] leading-[18px] text-[12px]">
                                +15.68%
                            </div>
                            <IoMdTrendingDown color="#DB1A28" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-[14px] w-full">
                    <div className="borderinggreen relative py-[6.5px] px-[14px] w-full h-[52px] bg-[#21201F] rounded-[10px] overflow-hidden">
                        <Backstrips className={"absolute  top-0 left-0 z-40"} />
                        <h2 className={"text-sm absolute z-50 font-stopbuck"}>
                            Total profit
                        </h2>
                        <div className="flex items-center gap-[9px] mt-4 ">
                            <Image
                                src={tools}
                                alt="tools"
                                className="w-5 h-5 object-cover"
                            />
                            <h2 className="font-fredoka text-base font-normal flex text-[#00FF19]">
                                {displayNumbers(+23182)}
                            </h2>
                        </div>
                    </div>
                    <div className="bordering relative py-[6.5px] px-[14px] w-full h-[52px] bg-[#21201F] rounded-[10px] overflow-hidden">
                        <Backstrips className={"absolute  top-0 left-0 z-40"} />
                        <h2 className={"text-sm absolute z-50 font-stopbuck"}>
                            Total loss
                        </h2>
                        <div className="flex items-center gap-[9px] mt-4 ">
                            <Image
                                src={tools}
                                alt="tools"
                                className="w-5 h-5 object-cover"
                            />
                            <h2 className="font-fredoka text-base font-normal flex text-[#EEEEEE]">
                                {displayNumbers(-3182)}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[8px]">
                    <div className="flex flex-col">
                        <div
                            className=" p-1.5 pt-2  text-[14px] text-[#7F7F7F]"
                            style={{
                                boxShadow: "0px 7px 5.8px -5px #1E1E1E0F",
                            }}
                        >
                            Affiliate Code Used
                        </div>
                        <div
                            className="border-[#27262594] text-[16px]  border p-1.5 pt-2 bg-[#21201F]  rounded-[12px]"
                            style={{
                                boxShadow: "0px 7px 5.8px -5px #1E1E1E0F",
                            }}
                        >
                            SEED01
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className=" p-1.5 pt-2 text-[14px] text-[#7F7F7F]"
                            style={{
                                boxShadow: "0px 7px 5.8px -5px #1E1E1E0F",
                            }}
                        >
                            User Affiliate Code
                        </div>
                        <div
                            className="border-[#27262594] text-[16px]  bg-[#21201F] border p-1.5 pt-2  rounded-[12px]"
                            style={{
                                boxShadow: "0px 7px 5.8px -5px #1E1E1E0F",
                            }}
                        >
                            mjolnir
                        </div>
                    </div>
                </div>

                <Button
                    variant={"secondary"}
                    className="w-full"
                    onClick={() => {
                        show;
                    }}
                >
                    APPLY CHANGES
                </Button>
            </div>
        </DialogContent>
    );
};

export default InspectUserDialog;
