import React from "react";
import Fair from "@/public/assets/icons/fair.svg";

const ProvablyFair = () => {
  return (
    <div className="pt-16">
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center gap-3">
          <Fair />
          <h2 className=" text-2xl sm:text-xl font-medium">Provably Fair</h2>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col px-[17px] py-[18px] gap-[14px] bg-[#21201F] rounded-xl border border-[#292828]">
            <h2 className="text-lg font-medium leading-[21.8px] text-[#EEEEEE]">
              What is provably fair?
            </h2>
            <p className="text-lg font-normal leading-[21.8px] text-[#B4B4B4]">
              Provably Fair is a system allowing players to verify that the site
              operates legitimately and doesn't tamper with game results. It
              leverages cryptography and third party input to generate random
              values. At the end of the game, players can verify that the
              outcome was indeed determined by the original seed and inputs,
              thus proving that the game was fair.
            </p>
          </div>
          <div className="flex flex-col h-[403px] px-[17px] py-[18px] gap-[14px] bg-[#21201F] rounded-xl border border-[#292828]">
            <h2 className="text-lg font-medium leading-[21.8px] text-[#EEEEEE]">
              Outcome Verifier
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvablyFair;
