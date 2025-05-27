import React from "react";
import { DialogContent } from "../ui/dialog";
import Image from "next/image";
import Levelcard from "./Levelcard";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "../ui/Button";
const item = {
    times: 5,
    amount: 12435.56,
};
interface SettingProps {
    color: Boolean;
}
const RandomCoinModal = () => {
    const itemsArray = Array.from({ length: 40 });
    return (
        <DialogContent className="w-fit border-none flex flex-col">
            <VisuallyHidden>
                <DialogTitle>RandomCoinModal</DialogTitle>
            </VisuallyHidden>
            <div className="flex flex-col justify-center align-middle items-center bg-[#1A1A19] pt-[16px] pb-[18.5px] px-[32.58px] border border-[#272625] rounded-2xl">
                <Image
                    src={"/logo.png"}
                    height={41}
                    width={102}
                    className=" mb-[30px]"
                    alt="logo"
                />
                <Button className="!rounded-lg my-[34px]" variant={"secondary"}>
                    <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
                        Call A BOt
                    </h2>
                </Button>
                {/* <Image
                    src={"/assets/icons/redCoin.png"}
                    height={105}
                    width={105}
                    alt="Rcoin"
                /> */}
                {/* {color ? (
                    <Image
                        src={"/assets/icons/blackCoin.png"}
                        height={105}
                        width={105}
                        alt="Bcoin"
                    />
                ) : (
                    <Image
                        src={"/assets/icons/redCoin.png"}
                        height={105}
                        width={105}
                        alt="Rcoin"
                    />
                )} */}
                <div className="absolute top-[185px]  px-[22.5px] ">
                    <div className="flex justify-between gap-[150px] lg:gap-[407px]">
                        <div className="relative py-[6px] px-6 flex flex-col gap-1 pt-2 rounded-xl bg-[#21201F] redgradient ">
                            <div className="flex gap-3">
                                <h2 className="text-[16px] font-fredoka font-medium leading-[21.6px] ">
                                    pnc
                                </h2>
                                <Levelcard number={45} variant="primary" />
                            </div>
                            <h2 className="text-[#DB1A28] text-[14px] text-center">
                                40%
                            </h2>
                            <div className=" absolute -top-5 left-[-100px] rounded-full w-[104px] h-[104px] border-none bg-redliear p-[4px]">
                                <img
                                    src="/assets/images/pnc.png"
                                    className="rounded-full w-24 h-24"
                                    alt="R"
                                />
                            </div>
                        </div>
                        <div className=" relative py-[6px] px-6 flex flex-col gap-1 pt-2 rounded-xl bg-[#21201F] bluegradient ">
                            <div className="flex gap-3">
                                <h2 className="text-[16px] font-fredoka font-medium leading-[21.6px] ">
                                    waiting...
                                </h2>
                                <Levelcard number={0} variant="primary" />
                            </div>
                            <h2 className="text-[#1D4FFF] text-[14px] text-center">
                                0%
                            </h2>
                            <div className=" absolute -top-5 -right-24 rounded-full w-[104px] h-[104px] border-none  bg-[#21201F]  p-[4px]">
                                {/* <img
                                    src="/assets/images/equity.png"
                                    className="rounded-full w-24 h-24"
                                    alt="R"
                                /> */}
                                <h2 className="text-[50px] text-center w-full pt-3">
                                    ?
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2  mt-10 mx-10 rounded-xl border-[#292828] border-[1.5px] p-2">
                    <h2 className="text-[14px] px-[10px] py-1 rounded-[7px] font-fredoka font-normal leading-[21.6px] bg-[#21201F] border border-[#292828] ">
                        1 Item(s)
                    </h2>
                    <h2 className="text-[14px] px-[10px] py-1 rounded-[7px] font-fredoka font-normal leading-[21.6px] text-[#00FF19] bg-[#21201F] border border-[#292828] ">
                        $4,592.2
                    </h2>

                    <h2 className="text-[14px] pl-[6px] flex pr-[10px] mx-[120px] py-1 rounded-[7px] font-fredoka font-normal leading-[21.6px] text-[#7F7F7F] bg-[#21201F] border border-[#292828] ">
                        <img
                            src="/assets/icons/Vectorthumb.png"
                            className="w-[10px] h-[11px] mt-[5px] mr-[10px]"
                            alt="thumb"
                        />
                        29292843728282746272742
                    </h2>

                    <h2 className="text-[14px] px-[10px] py-1 rounded-[7px] font-fredoka font-normal leading-[21.6px] text-[#00FF19] bg-[#21201F] border border-[#292828] ">
                        $14,592.2
                    </h2>
                    <h2 className="text-[14px] px-[10px] py-1 rounded-[7px] font-fredoka font-normal leading-[21.6px] bg-[#21201F] border border-[#292828] ">
                        5 Item(s)
                    </h2>
                </div>
            </div>
            <div className="flex gap-8 flex-col lg:flex-row">
                <div className=" bg-[#1A1A19] border border-[#272625] rounded-2xl p-[14px]">
                    <div className="relative py-[6px] px-6 flex flex-col gap-1 pt-2 rounded-xl bg-[#21201F] redgradient w-[120px] h-[60px] left-[50px]">
                        <div className=" absolute top-0  rounded-full w-[64px] h-[64px] border-none bg-redliear p-[2px] left-[-50px]">
                            <img
                                src="/assets/images/pnc.png"
                                className="rounded-full w-[60px] h-[60px]"
                                alt="R"
                            />
                        </div>
                        <div className="flex gap-3">
                            <h2 className="text-[16px] font-fredoka font-medium leading-[21.6px] ">
                                pnc
                            </h2>
                            <Levelcard number={45} variant="primary" />
                        </div>
                        <h2 className="text-[#DB1A28] text-[14px] text-center">
                            40%
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-[15px] p-[15px]">
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                    </div>
                </div>
                <div className="relative bg-[#1A1A19] border border-[#272625] rounded-2xl">
                    <div className=" absolute py-[6px] px-6 flex flex-col gap-1 pt-2 rounded-xl   w-[120px] h-[60px] right-[50px] m-[14px]">
                        <div className="flex gap-3">
                            <h2 className="text-[16px] font-fredoka font-medium leading-[21.6px] "></h2>
                            {/* <Levelcard number={45} variant="secondary" /> */}
                        </div>
                        <h2 className="text-[#1D4FFF] text-[14px] text-center"></h2>
                        <div className="absolute top-0 rounded-full w-[64px] h-[64px] border-none bg-[#21201F] p-[4px] right-[-50px]">
                            <div className="rounded-full w-[60px] h-[60px]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-[15px] p-[15px] mt-[74px]">
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                        <div className=" rounded-xl bg-[#21201F] border border-[#292828] w-[134px] h-[134px]"></div>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
};

export default RandomCoinModal;
