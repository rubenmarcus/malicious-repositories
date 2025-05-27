import React from "react";

import { Button } from "@/components/ui/Button";
import Pepe from "@/public/assets/images/pepe.png";
import Image from "next/image";
import Tool from "@/public/assets/images/tool.png";
import Progress from "@/components/common/Progress";
import Rank from "@/components/common/Rank";
import Homebg from "@/public/assets/svg/homebg.svg";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import ShopDialogJoinContent from "@/components/common/ShopDialogJoinContent";
import BackVideoPlayer from "@/components/common/ReactPlayer";
import InventoryDialog from "@/components/common/InventoryDialog";
import StartCoinModal from "@/components/common/StartCoinModal";
import StartGameDialog from "@/components/common/StartGameDialog";
import Link from "next/link";
const Welcome = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-4">
            <div className="relative md:w-1/2">
                <Image
                    src={Pepe}
                    alt="pepe"
                    height={111}
                    className="absolute hidden md:block -top-7 z-50 -left-14 rotate-[-12.45deg]"
                    width={100}
                />
                <div className="flex flex-col z-30 overflow-hidden relative gap-[34px] p-6 pl-[35px] bg-[#21201F] border-[#292828] border rounded-[32px]">
                    <Image
                        src={Tool}
                        alt="tools"
                        height={120}
                        className="absolute -bottom-0 -right-0 z-10 hidden md:block"
                        width={120}
                    />
                    <div className="absolute w-full h-8 backcolor bottom-0 right-0 z-20" />
                    <Homebg className="absolute top-0 right-0 z-10 hidden md:block" />
                    <div className="flex gap-[31px] flex-col">
                        <div className="font-medium text-[26px] lg:text-[30px] lg:py-2">
                            Welcome back, admin01
                        </div>
                        <div className="flex items-center gap-7">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="secondary">
                                        <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
                                            create your coinflip
                                        </h2>
                                    </Button>
                                </DialogTrigger>
                                {/* <StartGameDialog /> */}
                                <InventoryDialog />
                                {/* <ShopDialogJoinContent/> */}
                            </Dialog>
                            <div className="flex gap-[5px] font-medium text-[14px]">
                                <div>Feeling</div>
                                <div className="text-[#DB1A28]">Lucky?</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div className="w-[76px] hidden md:flex items-center justify-center">
                            <Rank level={245} />
                        </div>
                        <div className="flex flex-col gap-1 w-full md:w-[60%] relative">
                            <Progress done={34.56} height={13} />
                            <div className="flex justify-between mt-[14px]">
                                <div className="text-[#686868] text-xs leading-[14.4px]">
                                    Current XP Progress
                                </div>
                                <div className="text-sm leading-[16.8px] text-[#EEEEEE]">
                                    34.56%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-[32px] hidden md:block absolute -bottom-[10px] z-10 bg-[#21201F] w-[89%] left-8 h-[18px]"></div>
            </div>
            <div className="relative md:w-1/2">
                <div className="h-full px-2 z-30 relative gap-[34px] bg-[#21201F] border-[#292828] border rounded-[32px]">
                    <Link href={"/jackpot"} className="z-50">
                        <BackVideoPlayer />
                    </Link>
                </div>
                <div className="rounded-[32px] hidden md:block absolute -bottom-[10px] z-10 bg-[#21201F] w-[89%] left-8 h-[18px]"></div>
            </div>
        </div>
    );
};

export default Welcome;
