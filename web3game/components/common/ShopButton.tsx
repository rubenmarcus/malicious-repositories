import React from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/Button";
import ShopDialogContent from "./ShopDialogContent";

const ShopButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="!rounded-lg" variant={"secondary"}>
          <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
            shop
          </h2>
        </Button>
      </DialogTrigger>
      <ShopDialogContent />
    </Dialog>
  );
};

export default ShopButton;
