import React from "react";
import { DialogClose, DialogContent, DialogTrigger } from "../ui/dialog";
import Pepe from "@/public/assets/images/pepe.png";
import tools from "@/public/assets/images/tools.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Searchbar from "./Searchbar";
import { Divide } from "lucide-react";
import Image from "next/image";
import { displayNumbers } from "@/utils/usableFunc";
import { Button } from "../ui/Button";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { text } from "stream/consumers";
import { Input } from "../ui/Input";
import AcceptTradeDialog from "./AcceptTradeDilaog";

const item = {
    times: 5,
    amount: 12435.56,
};

const CryptoDialog = () => {
    const itemsArray = Array.from({ length: 40 });
    return (
        <DialogContent className="w-[90%] sm:w-[486px] border-none flex justify-center items-center">
            <VisuallyHidden>
                <DialogTitle>CryptoDialog</DialogTitle>
            </VisuallyHidden>
            <div className="w-full sm:w-auto flex flex-col bg-[#1A1A19] border border-[#272625] rounded-2xl">
                <div className="flex items-center justify-center py-[14px] border-b border-b-[#272625]">
                    <h2 className="leading-[19.2px] font-fredoka">
                        Purchase with Card
                    </h2>
                </div>
                <div>
                    <div className="mx-[24px] my-[12px] border-none">
                        <div>
                            <div className="flex gap-2 mt-[9px]">
                                <h2 className="leading-[19.2px] font-semibold text-[14px] font-fredoka tracking-wider">
                                    $1 USD ={" "}
                                </h2>
                                <Image
                                    src={tools}
                                    alt="image"
                                    className="w-5 h-5 object-cover"
                                />
                                <h2 className="leading-[19.2px] font-semibold tracking-wider text-[14px] font-fredoka">
                                    1.43
                                </h2>
                            </div>
                            <h2 className="mt-[15px] leading-[19.2px] text-wrap tracking-normal text-[#686868] text-[12px] font-fredoka">
                                Pay
                            </h2>
                            <Input
                                type="number"
                                className="mt-2 text-[14px] tracking-wider hover:outline-none  text-[#686868] bg-[#21201F] relative border border-[#292828] py-[11.5px] pl-[30px] rounded-lg flex-1"
                                placeholder="123"
                            />
                            {/* <div className="flex justify-between text-[14px] top-[154px] w-[58%] ml-4 absolute">
                                {" "} */}
                            <div className="text-[#00FF19]  text-[14px] top-[154px]  ml-4 absolute">
                                $
                            </div>
                            <div className="flex bg-[#21201F]  text-[14px] top-[154px] right-[100px] ml-4 absolute text-[#686868] gap-[9px]">
                                <div>1/2</div>
                                <div>Max</div>
                            </div>
                            {/* </div> */}
                            <h2 className="mt-[15px] leading-[19.2px] text-wrap tracking-normal  text-[12px] font-fredoka">
                                Recieve
                            </h2>
                            <div className="bg-[#21201F] top-[232px] right-[95px] z-50 w-12 h-6 absolute"></div>
                            <Input
                                type="number"
                                className="mt-2 text-[14px] tracking-wider hover:outline-none relative  text-[#686868] bg-[#21201F] border border-[#292828] py-[11.5px] pl-[30px] rounded-lg flex-1"
                                placeholder="123"
                            />

                            <div className="flex justify-between text-[14px] top-[236px]  ml-2 absolute">
                                <Image
                                    src={tools}
                                    alt="image"
                                    className="w-4 h-4 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx-[26px] mb-[7px] text-[10px]  text-[#686868] mt-[23px] text-center font-light">
                        Your payments will be processed through Zen Payments
                    </div>
                    <div className="mx-[26px] mb-[12px] flex gap-[9px]">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant={"secondary"}
                                    className="w-[305px] h-[35px]"
                                >
                                    PAY WITH ZEN
                                </Button>
                            </DialogTrigger>
                            <AcceptTradeDialog />
                        </Dialog>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
};

export default CryptoDialog;
