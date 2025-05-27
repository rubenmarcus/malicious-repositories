import Image from "next/image";
import React from "react";
import Discord from "@/public/assets/svg/discord.svg";
import Twitter from "@/public/assets/svg/twitter.svg";
import { cn } from "@/utils/tw-merge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
const footers = [
  {
    title: "Lorem",
    bottoms: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    title: "Lorem",
    bottoms: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    title: "Lorem",
    bottoms: ["Lorem ipsum", "Lorem ipsum"],
  },
];

const Footer = () => {
  return (
    <div className="flex justify-between px-10 2xl:pr-[324px] pt-8 pb-4  border-t-2 border-[#222222] text-[#B4B4B4] text-[14px] bg-gradient-to-t from-[#191716] to-[#181616] z-40">
      <div className="flex flex-col items-center md:items-start max-w-[524px] gap-[11px]">
        <Image src={"/logo.png"} height={150} width={143} alt="logo" />
        <div>Lorem ipsum dolor sit amet</div>
        <div className="text-center md:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          posuere suscipit elit id suscipit. Vivamus et dolor vitae metus
          pulvinar feugiat vel at est.
        </div>
        <div>&copy; All rights reserved 2021 - {new Date().getFullYear()}</div>
        <div className="flex gap-4">
          <Button
            size="icon"
            asChild
            className="border-[#21201F] rounded-xl border p-3"
          >
            <a href={"https://x.com"}>
              <Twitter />
            </a>
          </Button>
          <Button
            size="icon"
            className="border-[#21201F] rounded-xl border p-3"
            asChild
          >
            <a href="https://discord.com">
              <Discord />
            </a>
          </Button>
        </div>
      </div>
      <div className=" hidden md:flex gap-[47px]">
        {footers.map((footer, index) => (
          <div key={index} className="flex flex-col gap-[15px]">
            <div className={'font-stopbuck'}>{footer.title}</div>
            <div className="flex flex-col text-white gap-[11px]">
              {footer.bottoms.map((bottom, index) => (
                <Link href={bottom.toLowerCase().replace(/ /, "-")} key={index}>
                  {bottom}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
