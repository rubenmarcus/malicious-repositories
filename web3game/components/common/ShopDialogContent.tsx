import React, { useState } from "react";
import { DialogContent } from "../ui/dialog";
import Pepe from "@/public/assets/images/pepe.png";
import Image from "next/image";
import { displayNumbers } from "@/utils/usableFunc";
import { Button } from "../ui/Button";
import Inventory from "@/public/assets/svg/inventory.svg";
import { TfiReload } from "react-icons/tfi";
import { CiCircleList, CiSearch } from "react-icons/ci";
import { Input } from "../ui/Input";
import { BsTags } from "react-icons/bs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

const item = {
    times: 5,
    amount: 12435.56,
};

const ShopDialogContent = () => {
    const [selected, setSelected] = useState<number[]>([]);
    const itemsArray = Array.from({ length: 40 });

    const handleSelection = (idx: number) => {
        setSelected([...selected, idx]);
    };
    return (
        <DialogContent className="w-fit border-none flex flex-col lg:flex-row">
            <VisuallyHidden>
                <DialogTitle>ShopDialogContent</DialogTitle>
            </VisuallyHidden>
            <div className="flex flex-col bg-[#1A1A19] border border-[#272625] rounded-2xl">
                <div className="flex items-center justify-center py-[14px] border-b border-b-[#272625]">
                    <h2 className="leading-[19.2px] font-fredoka">Shop</h2>
                </div>
                <div className="flex justify-center items-center mt-3 px-[30px] md:px-[125px]">
                    <div className="flex gap-[50px] justify-between w-full md:max-w-[862px]">
                        <div className="py-[10.5px] hidden md:flex items-center gap-3 ">
                            <TfiReload fontSize={24} />
                            <CiCircleList fontSize={24} />
                        </div>
                        <div
                            className={`bg-[#181716] border border-[#1E1D1B] w-full 2xl:w-[632px] flex items-center gap-3 pl-3 rounded-lg`}
                        >
                            <CiSearch fontSize={24} />
                            <Input
                                type="search"
                                placeholder="Search rewards inventory"
                                className="outline-none border-none focus:border-none"
                            />
                        </div>
                        <div className=" hidden md:flex items-center justify-center">
                            <BsTags fontSize={24} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-10 gap-3 p-3">
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
                            <h2 className="text-sm text-[#9C9C9C] leading-[16.8px]">
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
            <div className=" p-[14px] flex flex-col pt-4 rounded-xl bg-[#21201F] border border-[#292828] w-full sm:w-[330px] gap-[19px] h-fit">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-lg leading-[21.6px]">
                        Available: $5,284.22
                    </h2>
                    <h2 className="text-lg leading-[21.6px] text-[#9C9C9C]">
                        Selected:
                        <span className="text-white">{selected.length}</span>
                    </h2>
                </div>
                <Button variant={"secondary"}>Buy now</Button>
            </div>
        </DialogContent>
    );
};

export default ShopDialogContent;
