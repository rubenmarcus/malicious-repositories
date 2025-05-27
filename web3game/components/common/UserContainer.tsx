import React from "react";
import Image from "next/image";
import { User } from "@/lib/types/User";
import { Button } from "../ui/Button";
import { displayNumbers } from "@/utils/usableFunc";
import tools from "@/public/assets/images/tools.png";
import Link from "next/link";
import { Dialog, DialogTrigger } from "../ui/dialog";
import PurchaseScrapDialog from "./PurchaseScrapDialog";
import NotificationButton from "./NotificationButton";
import ShopButton from "./ShopButton";

const UserContainer = ({ user }: { user: User | null }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <div className=" hidden md:flex px-2 gap-2 py-[7px] bg-[#1A1A19] border border-[#272625] rounded-xl">
          <div className="flex items-center gap-[9px]">
            <Image src={tools} alt="image" className="w-5 h-5 object-cover" />
            <h2 className="text-base font-medium leading-[19.2px]">
              {displayNumbers(user?.balance)}
            </h2>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="!h-7 !rounded-lg" variant={"secondary"}>
                <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
                  Deposit
                </h2>
              </Button>
            </DialogTrigger>
            <PurchaseScrapDialog />
          </Dialog>
        </div>
        <NotificationButton />
        <div className=" hidden md:block">
          <ShopButton />
        </div>
      </div>
      <Link
        href={"/profile"}
        className="flex items-center gap-1 bg-[#1A1A19] border border-[#272625] p-1 rounded-lg"
      >
        <Image
          src={user?.image}
          className="h-8 w-8 rounded-[10px] object-cover"
          height={32}
          width={32}
          alt="userImage"
        />
        <h2 className="font-medium text-sm leading-[16.8px] font-fredoka">
          {user?.username}
        </h2>
        <div className="py-[1.5px] rounded-sm px-[5.5px] text-[10px] font-normal text-[#21201F] bg-gradient-to-t from-[#949494] to-[#FFFFFF]">
          223
        </div>
      </Link>
    </div>
  );
};

export default UserContainer;
