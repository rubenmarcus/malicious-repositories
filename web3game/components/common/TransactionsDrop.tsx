import React from "react";
import { DropdownMenuContent } from "../ui/DropDown";
import { Button } from "../ui/Button";
import { FaArrowUpFromBracket } from "react-icons/fa6";

const TransactionsDrop = () => {
    return (
        <DropdownMenuContent className="p-[5px] max-w-[373px] gap-[17px] rounded-[13px] flex flex-col bg-[#1A1A19] border border-[#272625]">
            <div className="flex flex-col gap-[5px] rounded-full">
                <Button className="!bg-[#1A1A19] !border pl-[0px] h-8 !border-[#272625] rounded-lg flex items-center gap-1 whitebtn">
                    <FaArrowUpFromBracket fontSize={14} />
                    <h2 className="pl-1 font-fredoka text-[14px] font-normal  text-[#eeeeee]">
                        Deposit
                    </h2>
                </Button>
                <Button className="!bg-[#1A1A19] !border pl-[10px] h-8 !border-[#272625] rounded-lg flex items-center gap-1 whitebtn">
                    <FaArrowUpFromBracket fontSize={14} />
                    <h2 className="pl-1 font-fredoka text-[14px] font-normal text-[#eeeeee]">
                        Withdraw
                    </h2>
                </Button>
            </div>
        </DropdownMenuContent>
    );
};

export default TransactionsDrop;
