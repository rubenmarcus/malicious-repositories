"use client";

import React, { useState } from "react";
import Pepe from "@/public/assets/images/pepe.png";
import Image from "next/image";
import { displayNumbers } from "@/utils/usableFunc";
import { DialogContent } from "@/components/ui/dialog";
import Searchbar from "@/components/common/Searchbar";
import { Button } from "@/components/ui/Button";
import Inventory from "@/public/assets/svg/inventory.svg";
import { Dialog, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import PurchaseScrapDialog from "./PurchaseScrapDialog";
import StartGameDialog from "./StartGameDialog";

const item = {
    times: 5,
    amount: 12435.56,
};
const InventoryDialog = () => {
    const [selected, setSelected] = useState<number[]>([]);
    const itemsArray = Array.from({ length: 40 });

    const handleSelection = (idx: number) => {
        setSelected([...selected, idx]);
    };
    return (
        <DialogContent className="w-fit border-none coling flex flex-row">
            <VisuallyHidden>
                <DialogTitle>InventoryDialog</DialogTitle>
            </VisuallyHidden>
            <div className="flex flex-col bg-[#1A1A19] border border-[#272625] rounded-2xl">
                <div className="flex items-center justify-center py-[14px] border-b border-b-[#272625]">
                    <h2 className="leading-[19.2px] font-fredoka">Inventory</h2>
                </div>
                <div className="flex justify-center items-center px-[125px]">
                    <Searchbar />
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-10 gap-3 p-3">
                    {itemsArray.map((_, idx) => (
                        <div
                            onClick={() => handleSelection(idx)}
                            key={idx}
                            className={`py-[6.5px] relative px-[19px] bg-[#21201F] border border-[#292828] overflow-hidden rounded-xl ${
                                selected.findIndex((item) => item === idx) !==
                                -1
                                    ? "opacity-100 borderEffect"
                                    : "opacity-50"
                            }`}
                        >
                            {selected.findIndex((item) => item === idx) !==
                                -1 && (
                                <Inventory className="absolute top-0 left-0" />
                            )}
                            <h2 className="text-sm text-[#9C9C9C] leading-[16.8px] z-50">
                                x{item.times}
                            </h2>
                            <div className="flex flex-col gap-[6px]">
                                <Image
                                    src={Pepe}
                                    alt="pepe"
                                    height={62}
                                    className="object-cover"
                                    width={66}
                                />
                                <h2
                                    className={`text-sm font-normal leading-[16.8px] ${
                                        selected.findIndex(
                                            (item) => item === idx
                                        ) !== -1
                                            ? "text-white"
                                            : "text-[#9C9C9C]"
                                    }`}
                                >
                                    ${displayNumbers(item.amount)}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border border-[#272625]  h-fit flex flex-col rounded-xl overflow-hidden">
                <div className="flex items-center justify-center py-[14px] bg-[#1A1A19]">
                    <h2 className="text-base font-normal leading-[19.2px] text-center">
                        Play a Game
                    </h2>
                </div>
                <div className="p-[8px] flex flex-col pt-4 bg-[#21201F] border-t gap-[19px] border-t-[#272625]">
                    <div className="flex flex-col items-center gap-3">
                        <h2 className="text-lg leading-[21.6px]">
                            Available: $5,284.22
                        </h2>
                        <h2 className="text-lg leading-[21.6px] text-[#9C9C9C]">
                            Selected:{" "}
                            <span className="text-white">
                                {selected.length}
                            </span>
                        </h2>
                    </div>
                    <div className="flex w-full justify-center gap-1">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant={"secondary"}
                                    className="!h-[35px]"
                                >
                                    join jackpot
                                </Button>
                            </DialogTrigger>
                            <PurchaseScrapDialog />
                        </Dialog>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className="border border-[#292828] bg-[#21201F] rounded-[10px] tracking-widest"
                                >
                                    create coinflip
                                </Button>
                            </DialogTrigger>
                            <StartGameDialog />
                        </Dialog>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
};

export default InventoryDialog;
