import React from "react";
import { DialogContent, DialogTrigger } from "../ui/dialog";
import Coins from "@/public/assets/images/coins.svg";
import Card from "@/public/assets/images/card.svg";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import CryptoDialog from "./CryptoDialog";
import PurchaseCardDialog from "./PurchaseCardDialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "../ui/Button";

const item = {
    times: 5,
    amount: 12435.56,
};

const PurchaseScrapDialog = () => {
    const itemsArray = Array.from({ length: 40 });
    return (
        <DialogContent className=" w-[90%] md:w-fit border-none flex items-center justify-center">
            <VisuallyHidden>
                <DialogTitle>PurchaseScrapDialog</DialogTitle>
            </VisuallyHidden>
            <div className=" w-full sm:w-[70%] md:w-fit flex flex-col items-center bg-[#1A1A19] border border-[#272625] rounded-2xl">
                <div className="flex items-center justify-center py-[14px] border-b border-b-[#272625]">
                    <h2 className="leading-[19.2px] font-fredoka">
                        Purchase Scrap
                    </h2>
                </div>
                <div className="flex gap-5 md:px-[133px] justify-center py-[12px]">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className=" flex flex-col rounded-xl bg-[#21201F] border border-[#292828] w-[100px] h-[100px] datebtn p-2">
                                <div className="flex flex-col items-center">
                                    <div>
                                        <Coins className="h-[75px] -mt-3 object-cover object-bottom" />
                                    </div>
                                    <h2 className="text-[12px] leading-[21.6px]">
                                        Crypto
                                    </h2>
                                </div>
                            </div>
                        </DialogTrigger>
                        <CryptoDialog />
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className=" p-2 flex flex-col pt-4 rounded-xl bg-[#21201F] border border-[#292828] w-[100px] h-[100px] datebtn">
                                <div className="flex flex-col items-center h-full justify-between gap-3">
                                    <div className="flex-1">
                                        <Card className={"mt-3"} />
                                    </div>
                                    <div>
                                        <h2 className="text-[12px] leading-[21.6px]">
                                            Card
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </DialogTrigger>
                        <PurchaseCardDialog />
                    </Dialog>
                </div>

                <Button variant={"secondary"} className="w-[152px] mb-[12px]">
                    CONTINUE
                </Button>
                <h2 className="font-fredoka text-[12px] text-[#686868] mb-[12px] flex">
                    View shop<p>&#129122;</p>
                </h2>
            </div>
        </DialogContent>
    );
};

export default PurchaseScrapDialog;
