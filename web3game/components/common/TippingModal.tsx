import React from "react";
import { DropdownMenuContent } from "../ui/DropDown";
import { Button } from "../ui/Button";

const TippingModal = () => {
  return (
    <DropdownMenuContent className="p-[16px] max-w-[182px]  gap-[6px] rounded-[16px] flex flex-col bg-[#1A1A19] border border-[#272625] mx-[116px] my-[22px]">
      <h3 className={"text-base text-[16px] font-normal tracking-wide font-stopbuck"}>TIPPING:MJONIR</h3>
      <div className="flex flex-col gap-[23px] pt-[25px]">
        <div className="gap-[10px]">
            <p className="font-foredoka font-light text-[14px]">Enter Amount</p>
          <div className="bg-[#21201F] border border-[#292828] rounded-xl gap-2 w-fit">
            <input
              type="text"
              className="w-full h-[37px] pl-[34px] relative p-[8px] outline-none placeholder:text-[16px] placeholder:text-[#9c9c9c] bg-inherit"
              placeholder="$$$"
            />
            <img src="./assets/images/tools.png" alt="image" className="absolute w-5 h-5 object-cover ml-[8px] -mt-[28px]" />
          </div>
        </div>
        <Button variant={"secondary"}>SEND TIP</Button>
      </div>
    </DropdownMenuContent>
  );
};

export default TippingModal;
