import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/utils/tw-merge";
import React from "react";
import EquityImage from "@/public/assets/images/equity.png";
import LuhImage from "@/public/assets/images/imperial.png";
import MjhonirImage from "@/public/assets/images/mjolnir.png";
import PncImage from "@/public/assets/images/pnc.png";
import SalImage from "@/public/assets/images/sal.png";
import Image from "next/image";
import Spinner from "./_partials/Spinner";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import PurchaseScrapDialog from "@/components/common/PurchaseScrapDialog";
import ShopDialogJoinContent from "@/components/common/ShopDialogJoinContent";
import InventoryDialog from "@/components/common/InventoryDialog";
const wins = ["biggest", "recent", "lucky"];
const history = [
    {
        name: "luh twan",
        payout: 1291,
        image: LuhImage,
    },
    {
        name: "equity",
        payout: 321,
        image: EquityImage,
    },
    {
        name: "sal",
        payout: 5121,
        image: SalImage,
    },
    {
        name: "pnc",
        payout: 412,
        image: PncImage,
    },
    {
        name: "mjolnr",
        payout: 812,
        image: MjhonirImage,
    },
    {
        name: "luh twan",
        payout: 1291,
        image: LuhImage,
    },
    {
        name: "equity",
        payout: 321,
        image: EquityImage,
    },
    {
        name: "sal",
        payout: 5121,
        image: SalImage,
    },
    {
        name: "pnc",
        payout: 412,
        image: PncImage,
    },
    {
        name: "sal",
        payout: 5121,
        image: SalImage,
    },
    {
        name: "pnc",
        payout: 412,
        image: PncImage,
    },
    {
        name: "mjolnr",
        payout: 812,
        image: MjhonirImage,
    },
];

const players = [
    {
        name: "luh twan",
        image: LuhImage,
        bet: 203.21,
        items: 4,
    },
    {
        name: "sal",
        image: SalImage,
        bet: 501,
        items: 2,
    },
    {
        name: "imperial",
        image: EquityImage,
        bet: 4303.21,
        items: 3,
    },
    {
        name: "pnc",
        image: PncImage,
        bet: 203.21,
        items: 3,
    },
];

const JackpotPage = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-6 mb-32">
            <div className="flex flex-col gap-[24px]">
                <div className="border border-[#272625] bg-[#1A1A19] flex flex-col items-center rounded-[38px] p-4 gap-[23px]">
                    <div
                        className={"text-[22px] leading-[26.4px] font-stopbuck"}
                    >
                        spinning...
                    </div>
                    <div className="flex flex-col gap-[58px] items-center">
                        <Spinner />
                        <div className="flex flex-col gap-[5px] items-center">
                            <div className={"text-[70px] font-stopbuck"}>
                                $328.67
                            </div>
                            <div className="flex flex-col items-center gap-[3px]">
                                <div className="text-[#9C9C9C] text-[12px] leading-[14.4px]">
                                    Max 275
                                </div>
                                <div className="text-[#DDDDDD] text-[28px] leading-[33.6px]">
                                    4/15
                                </div>
                                <div className="border-2 text-[12px] text-[#9C9C9C] border-[#272625] bg-[#1A1A19] rounded-[6px] px-1.5 py-1">
                                    Starting in 0s
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex-col  hidding hidden bg-[#1A1A19] border-[#272625] border gap-[13px] p-4 rounded-[22px]">
                    <div
                        className={"text-[22px] leading-[26.4px] font-stopbuck"}
                    >
                        4 Players
                    </div>
                    <div className="flex flex-col justify-between h-[410px]">
                        <div className="flex flex-col gap-[17px]">
                            {players.map((player, index) => (
                                <div
                                    key={index}
                                    className="border-[#292828] items-center border bg-[#21201F] pt-1 pb-2 px-1.5 rounded-[18px] flex gap-[10px]"
                                >
                                    <Image
                                        src={player.image}
                                        alt={player.name}
                                        className={cn(
                                            "rounded-[8px] border-2 border-solid w-[50px] mt-2 h-[50px] object-cover",
                                            index % 2 === 1
                                                ? "border-[#1DD6FF]"
                                                : "border-[#ED3440]"
                                        )}
                                        height={40}
                                        width={50}
                                    />
                                    <div className="flex flex-col gap-[8px] w-full">
                                        <div className="flex justify-between">
                                            <div>{player.name}</div>
                                            <div className="flex items-center gap-[5px]">
                                                {Array.from({
                                                    length: player.items,
                                                }).map((_, i) => (
                                                    <div
                                                        className="border-[#272625] border rounded-full p-3 bg-[#1A1A19]"
                                                        key={i}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between w-full items-center">
                                            <div className="flex text-[12px] leading-[14.4px] gap-[8px]">
                                                <div className="bg-[#1A1A19] border-2 border-[#272625] rounded-[8px] px-1.5 py-1">
                                                    <span className="text-[#7F7F7F]">
                                                        Bet:{" "}
                                                    </span>
                                                    <span className="text-[#DB1A28]">
                                                        ${player.bet}
                                                    </span>
                                                </div>
                                                <div className="bg-[#1A1A19] border-2 border-[#272625] rounded-[8px] px-1.5 py-1">
                                                    <span className="text-[#7F7F7F]">
                                                        Win:{" "}
                                                    </span>
                                                    <span className="text-[#00FF19]">
                                                        14.55%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-[12px] text-[#7F7F7F] leading-[14.4px]">
                                                {player.items} Items
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-[12px]">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant={"secondary"}
                                        className="w-[210px]"
                                    >
                                        JOIN JACKPOT
                                    </Button>
                                </DialogTrigger>
                                <InventoryDialog />
                                {/* <PurchaseScrapDialog /> */}
                            </Dialog>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="!font-fredoka border border-[#272625] bg-[#1A1A19] p-[12px] rounded-[8px]">
                                        Buy Scrap
                                    </Button>
                                </DialogTrigger>
                                <ShopDialogJoinContent />

                                {/* <PurchaseScrapDialog /> */}
                            </Dialog>
                        </div>
                    </div>
                </div>
                <div className="flex bg-[#1A1A19] p-4 rounded-[22px] flex-col border gap-[46px] border-[#272625]">
                    <div className={"text-[22px] font-stopbuck"}>History</div>
                    <div className="flex flex-col gap-[34px]">
                        <Tabs defaultValue="recent">
                            <div className="flex gap-1.5 items-center mb-2">
                                <div className="font-fredoka">Sort By</div>
                                <TabsList className="flex gap-1.5">
                                    {wins.map((win, index) => (
                                        <TabsTrigger
                                            value={win}
                                            className="border cursor-pointer border-[#222120] rounded-full px-1 !bg-[#21201F] py-1 data-[state=active]:text-white text-[#686868]"
                                            key={index}
                                        >
                                            <div className="font-medium text-[12px] lg:text-[14px] capitalize font-fredoka lg:px-2 px-1 py-1 bg-black/20 rounded-full border border-[#2A2A28]">
                                                {win} wins
                                            </div>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>
                            {wins.map((win) => (
                                <TabsContent
                                    key={win}
                                    value={win}
                                    className="grid grid-cols-2 lg:grid-cols-4 gap-[31px] m-0"
                                >
                                    {history.map((hist, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-[13px]"
                                        >
                                            <Image
                                                src={hist.image}
                                                alt={hist.name}
                                                className={cn(
                                                    "rounded-[8px] border-2 border-solid w-[50px] mt-2 h-[50px] object-cover",
                                                    index % 2 === 1
                                                        ? "border-[#1DD6FF]"
                                                        : "border-[#ED3440]"
                                                )}
                                                height={40}
                                                width={50}
                                            />
                                            <div className="flex flex-col gap-1">
                                                <div>{hist.name}</div>
                                                <div className="border-2 text-[12px] px-2 py-1 leading-[14.4px] border-[#272625] bg-[#1A1A19] rounded-[6px]">
                                                    <span className="text-[#7F7F7F]">
                                                        Payout:{" "}
                                                    </span>
                                                    <span className="text-[#00FF19]">
                                                        +{hist.payout}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className=" flex-col  blocking  bg-[#1A1A19] border-[#272625] border gap-[13px] p-4 rounded-[22px]">
                <div className={"text-[22px] leading-[26.4px] font-stopbuck"}>
                    4 Players
                </div>
                <div className="flex flex-col justify-between h-[97%]">
                    <div className="flex flex-col gap-[17px]">
                        {players.map((player, index) => (
                            <div
                                key={index}
                                className="border-[#292828] items-center border bg-[#21201F] pt-1 pb-2 px-1.5 rounded-[18px] flex gap-[10px]"
                            >
                                <Image
                                    src={player.image}
                                    alt={player.name}
                                    className={cn(
                                        "rounded-[8px] border-2 border-solid w-[50px] mt-2 h-[50px] object-cover",
                                        index % 2 === 1
                                            ? "border-[#1DD6FF]"
                                            : "border-[#ED3440]"
                                    )}
                                    height={40}
                                    width={50}
                                />
                                <div className="flex flex-col gap-[8px] w-full">
                                    <div className="flex justify-between">
                                        <div>{player.name}</div>
                                        <div className="flex items-center gap-[5px]">
                                            {Array.from({
                                                length: player.items,
                                            }).map((_, i) => (
                                                <div
                                                    className="border-[#272625] border rounded-full p-3 bg-[#1A1A19]"
                                                    key={i}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between w-full items-center">
                                        <div className="flex text-[12px] leading-[14.4px] gap-[8px]">
                                            <div className="bg-[#1A1A19] border-2 border-[#272625] rounded-[8px] px-1.5 py-1">
                                                <span className="text-[#7F7F7F]">
                                                    Bet:{" "}
                                                </span>
                                                <span className="text-[#DB1A28]">
                                                    ${player.bet}
                                                </span>
                                            </div>
                                            <div className="bg-[#1A1A19] border-2 border-[#272625] rounded-[8px] px-1.5 py-1">
                                                <span className="text-[#7F7F7F]">
                                                    Win:{" "}
                                                </span>
                                                <span className="text-[#00FF19]">
                                                    14.55%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-[12px] text-[#7F7F7F] leading-[14.4px]">
                                            {player.items} Items
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-0 gap-[12px]">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant={"secondary"}
                                    className="w-[210px]"
                                >
                                    JOIN JACKPOT
                                </Button>
                            </DialogTrigger>
                            <InventoryDialog />
                            {/* <ShopDialogJoinContent /> */}
                        </Dialog>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="!font-fredoka border border-[#272625] bg-[#1A1A19] p-[12px] rounded-[8px]">
                                    Buy Scrap
                                </Button>
                            </DialogTrigger>
                            <PurchaseScrapDialog />
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JackpotPage;
