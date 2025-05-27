import React from "react";
import Swords from "@/public/assets/svg/swords.svg";
import { Button } from "@/components/ui/Button";
import { CoinflipTable } from "./CoinflipTable";
import { coinflipData } from "@/config/coinflip";
import Image from "next/image";
import blackCoin from "@/public/assets/images/blackcoin.png";
import redCoin from "@/public/assets/images/redcoin.png";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import ShopDialogJoinContent from "@/components/common/ShopDialogJoinContent";
import InventoryDialog from "@/components/common/InventoryDialog";
type Coin = "black" | "red";

const CoinFlip = () => {
    const coins: Coin[] = [
        "black",
        "red",
        "black",
        "red",
        "black",
        "black",
        "black",
        "black",
        "black",
        "black",
        "red",
        "black",
        "red",
        "black",
        "red",
        "black",
        "red",
        "black",
    ];
    return (
        <div className="flex flex-col mt-7 gap-[45px]">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-2.5">
                            <Swords />
                            <div className="font-medium text-[16px]">
                                Coinflip on RustyFlip
                            </div>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="secondary">
                                    <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
                                        Start A Game
                                    </h2>
                                </Button>
                            </DialogTrigger>
                            <InventoryDialog />
                            {/* <ShopDialogJoinContent /> */}
                        </Dialog>
                    </div>
                    <div className="text-[#9C9C9C] text-[14px] md:max-w-[539px] mt-[11px]">
                        Rustflips is an exciting project for Rust enthusiasts,
                        offering a thrilling coinflip mode. Dive into the
                        Rustyflips universe and wager your way to riches with
                        just a flip of a coin.
                    </div>
                </div>

                <div className="mt-[17px] gap-[18px] w-full bg-[#21201F] overflow-x-auto scrollbar flex py-1.5 pr-1 pl-2 rounded-xl">
                    <div className="flex flex-col items-center text-[#EEEEEE] text-[12px]">
                        <div className="text-[#595140]">Total amount</div>
                        <div className="border-[#21201F] bg-[#1A1A19] text-[12px] rounded-[8px] border px-3 py-1">
                            $212
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-[#EEEEEE] text-[12px]">
                        <div className="text-[#595140]">Active games</div>
                        <div className="border-[#21201F] bg-[#1A1A19] text-[12px] rounded-[8px] border px-3 py-1">
                            22
                        </div>
                    </div>
                    <div className="vertical"></div>
                    <div className="flex gap-1 items-center">
                        {coins.map((coin, index) => (
                            <Image
                                key={index}
                                className="object-cover w-[27px] h-[27px]"
                                alt={coin}
                                src={coin === "black" ? blackCoin : redCoin}
                            />
                        ))}
                    </div>
                </div>
                <div className="line mt-[23px]"></div>
            </div>
            {/* the table */}
            <div className="">
                <CoinflipTable data={coinflipData} />
            </div>
        </div>
    );
};

export default CoinFlip;
