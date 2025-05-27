import React from "react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/DropDown";
import { Button } from "../ui/Button";
import { BiSolidBell } from "react-icons/bi";
import Notification from "./Notification";

const NotificationButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="!bg-[#1A1A19] !border !border-[#272625] !w-[42px] !h-[42px] !p-0 flex items-center justify-center !rounded-xl">
          <BiSolidBell className="text-[#c52d2d] -rotate-12" fontSize={24} />
        </Button>
      </DropdownMenuTrigger>
      <Notification />
    </DropdownMenu>
  );
};

export default NotificationButton;
