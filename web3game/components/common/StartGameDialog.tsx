"use client"
import React, { useState } from "react";
import { DialogContent, DialogTrigger } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import StartCoinModal from "./StartCoinModal";
import RandomCoinModal from "./RandomCoinModal";

const item = {
    times: 5,
    amount: 12435.56,
};

const StartGameDialog = () => {
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
                <DialogTitle>StartGameDialog</DialogTitle>
            </VisuallyHidden>
            <div className="flex flex-col bg-[#1A1A19] pt-[13px] pb-[18.5px] px-[32.58px] border border-[#272625] rounded-2xl">
                <Image
                    src={"/logo.png"}
                    height={41}
                    width={102}
                    className="mx-[20px]"
                    alt="logo"
                />
                <div className="items-center justify-center flex flex-col my-[20px]">
                    <Image
                        src={"/assets/icons/blackCoin.png"}
                        height={135}
                        width={135}
                        className={isSelect.white ? selClass : disClass}
                        alt="Bcoin"
                        onClick={() => {
                            setIsSelect({
                                ...isSelect,
                                white: "white",
                                red: "",
                            });
                        }}
                    />
                    <h2 className="mt-[15px] font-stopbuck text-[#686868] font-extrabold leading-[19.2px] text-[14px] ">
                        BLACK?
                    </h2>
                </div>
                <div className="items-center justify-center flex flex-col mt-[20px] mb-[56px]">
                    <Image
                        src={"/assets/icons/redCoin.png"}
                        height={135}
                        width={135}
                        className={isSelect.red ? selClass : disClass}
                        alt="Rcoin"
                        onClick={() => {
                            setIsSelect({ ...isSelect, red: "red", white: "" });
                        }}
                    />
                    <h2 className="mt-[15px] font-stopbuck text-[#686868] font-extrabold leading-[19.2px] text-[14px] ">
                        RED?
                    </h2>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant={"secondary"}
                            className="w-[152px]"
                            onClick={() => {
                                show;
                            }}
                        >
                            START!
                        </Button>
                    </DialogTrigger>
                    {(isSelect.red !== "" || isSelect.white !== "") &&
                    !isSelect.isModal ? (
                        <RandomCoinModal />
                    ) : (
                        ""
                    )}
                </Dialog>
            </div>
        </DialogContent>
    );
};

export default StartGameDialog;
