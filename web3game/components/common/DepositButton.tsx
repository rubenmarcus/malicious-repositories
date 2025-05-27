import React from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/Button";
import PurchaseScrapDialog from "./PurchaseScrapDialog";

const DepositButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="!rounded-lg" variant={"secondary"}>
          <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
            Deposit
          </h2>
        </Button>
      </DialogTrigger>
      <PurchaseScrapDialog />
    </Dialog>
  );
};

export default DepositButton;
