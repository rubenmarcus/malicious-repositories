import React from "react";
import Image from "next/image";
import Discord from "@/public/assets/svg/discord.svg";
import flyerbg from "@/public/assets/images/flyerbg.png";
import flyerstone from "@/public/assets/images/flyerstone.png";
import LightBeams from "@/public/assets/svg/Light beams.svg";
import RadialEllipse from "@/public/assets/svg/radialEllipse.svg";
import weapon2 from "@/public/assets/images/weapon2.png";
import weapon3 from "@/public/assets/images/flipWeapon3.png";
import { Button } from "@/components/ui/Button";

const SupportFlyer = ({ variant }: { variant: string }) => {
  return (
    <div className=" w-full bg-[#21201F] rounded-[22px] border border-[#292828] opacity-90 backdrop-blur-md">
        <Image
          src={weapon2}
          alt="weapon"
          className="absolute hidden md:block top-[-90px] w-[133px] h-[158px] -left-[3%]"
        />
      <div className="relative px-[41px] py-10 overflow-hidden w-full rounded-[22px]">
        <Image
          src={flyerbg}
          className="absolute hidden md:block -top-3 right-0 w-[280px]"
          alt="background"
        />
        <Image
          src={flyerstone}
          alt="background"
          className="absolute hidden md:block -top-6 right-6 h-[66.6px] w-[66.6px] opacity-25 backdrop-blur-sm blur-[3px]"
        />
        <LightBeams className="absolute -top-4 right-[20%]" />
        <RadialEllipse className="absolute top-[-130px] left-0" />
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-[19px]">
            <div className="w-fit flex flex-col relative">
              <h2
                className={
                  " text-[24px] md:text-[36px] leading-8 font-fredoka font-extrabold mb-1"
                }
              >
                {variant === "affiliates"
                  ? "Invite a friend and earn"
                  : "Get in Touch with us Through"}
                <Image
                  src={weapon3}
                  className="absolute hidden md:block w-[137px] h-[137px] object-cover -right-[27%] top-[-20px]"
                  alt="weapon"
                />
              </h2>
              <h2 className="text-[24px] md:text-[36px] leading-8 font-fredoka font-extrabold text-gradient bg-gradient-to-r from-[#F5A1A6] to-[#ED3440]">
                {variant === "affiliates" ? "passive Income" : "our Discord"}
              </h2>
            </div>
            <img src="./assets/images/Scrap1.png" alt="sss" className="w-[75px] hidden md:block  h-[72px] rotate-12 absolute -top-[35px] left-[435px]" />
            <p className="text-base text-[#b4b4b4] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          {variant === "affiliates" ? (
            <div className="bg-[#21201F] border border-[#292828] rounded-xl p-1 flex gap-2 w-fit">
              <input
                type="text"
                className="outline-none w-[98px] pl-2 placeholder:text-sm placeholder:text-[#9c9c9c] bg-inherit"
                placeholder="Referral Code"
              />
              <Button className="!font-fredoka font-normal !text-sm px-[20px] py-[9px] bg-[#1A1A19] rounded-lg">
                Save
              </Button>
            </div>
          ) : (
            <Button className="bg-[#21201F] border datebtn border-[#292828] rounded-xl px-2 flex gap-[9px] w-fit">
              <Discord className="w-[15px]" />
              <h2 className="text-sm font-medium font-fredoka">
                discord.gg/<span className="text-[#ee3440]">rustyflip</span>
              </h2>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportFlyer;
