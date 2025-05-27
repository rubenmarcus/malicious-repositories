import React from "react";
import { DropdownMenuContent } from "../ui/DropDown";
import { Button } from "../ui/Button";

const Notification = () => {
  return (
    <DropdownMenuContent className="p-3 max-w-[373px] gap-[17px] rounded-[16px] flex flex-col bg-[#1A1A19] border border-[#272625]">
      <div className="flex flex-col gap-[23px]">
        <h2 className="font-medium text-lg leading-[21.78px]">Notifications</h2>
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-sm font-normal leading-5 text-[#686868]">
            Today (1)
          </h2>
          <div className="bg-[#21201F] border border-[#292828] rounded-xl py-5 px-[15px] flex flex-col gap-[6px]">
            <h2 className="text-sm leading-[14px] text-[#9C9C9C]">
              Hey! Want to try your luck? Just click to flip the coin, I heard
              EL did a clean job on the new site.
            </h2>
            <h2 className="font-medium text-xs leading-5 text-[#686868]">
              2 hours ago
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-sm font-normal leading-5 text-[#686868]">
            Yesterday (2)
          </h2>
          <div className="bg-[#21201F] border border-[#292828] rounded-xl py-5 px-[15px] flex flex-col gap-[6px]">
            <h2 className="text-sm leading-[14px] text-[#9C9C9C]">
              Hey! Want to try your luck? Just click to flip the coin, I heard
              EL did a clean job on the new site.
            </h2>
            <h2 className="font-medium text-xs leading-5 text-[#686868]">
              2 hours ago
            </h2>
          </div>
          <div className="bg-[#21201F] border border-[#292828] rounded-xl py-5 px-[15px] flex flex-col gap-[6px]">
            <h2 className="text-sm leading-[14px] text-[#9C9C9C]">
              Hey! Want to try your luck? Just click to flip the coin, I heard
              EL did a clean job on the new site.
            </h2>
            <h2 className="font-medium text-xs leading-5 text-[#686868]">
              2 hours ago
            </h2>
          </div>
        </div>
        <Button variant={"secondary"}>mark all as read</Button>
      </div>
    </DropdownMenuContent>
  );
};

export default Notification;
