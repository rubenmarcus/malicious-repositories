import React from "react";
import { DialogContent } from "../ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "../ui/Button";
import { DialogTitle } from "@radix-ui/react-dialog";
import MjhonirImage from "@/public/assets/images/mjolnir.png";
import Image from "next/image";

const AcceptTradeDialog = () => {
    return (
        <DialogContent className="w-[90%] sm:w-[486px] border-none flex justify-center items-center">
            <VisuallyHidden>
                <DialogTitle>AcceptTradeDialog</DialogTitle>
            </VisuallyHidden>
            <div className="w-full sm:w-auto flex flex-col bg-[#1A1A19] border border-[#272625] rounded-2xl">
                <div className="flex flex-col items-center justify-center gap-[14px] py-[14px] ">
                    <h2 className="leading-[19.2px] text-[18px] font-fredoka">
                        Accept your Trade here:
                    </h2>
                    <div className="flex gap-1">
                        <h2 className="leading-[19.2px] pt-2 text-[18px] font-fredoka">
                            User:
                        </h2>
                        <Image
                            src={MjhonirImage}
                            alt={"img"}
                            className="rounded-full  w-[29px] h-[29px] border-2 border-[#ED3440]"
                        />
                        <h2 className="leading-[19.2px]  pt-2 text-[18px] font-fredoka">
                            luh twan
                        </h2>
                    </div>
                </div>
                <div className="mx-[26px] mb-[12px] flex gap-[9px]">
                    <Button
                        variant={"secondary"}
                        className="w-[305px] text-[14px] font-normal tracking-wider h-[35px]"
                    >
                        Aceept Trade!
                    </Button>
                </div>
            </div>
        </DialogContent>
    );
};

export default AcceptTradeDialog;
