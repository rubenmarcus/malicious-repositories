"use client";

import React from "react";
import ToolsImage from "@/public/assets/images/tools.png";
import Image from "next/image";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import Dollar from "@/public/assets/icons/dollar.svg";
import dynamic from "next/dynamic";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserDatabase from "./_partials/user-database";
import LiveTransactions from "./_partials/live-transactions";
import AffiliateTable from "./_partials/affiliate-table";
const AreaGraph = dynamic(() => import("./_partials/area-graph"), {
  ssr: false,
});

const AdminPage = () => {
  const wagered = [
    0, 201201, 301202.34, 95000, 460000, 250000, 590000, 410000, 430000, 350000,
    520000, 380000, 270000, 0,
  ];
  const tabs = ["Today", "Weekly", "Monthly", "Yearly", "All time"];

  return (
    <div className="flex flex-col gap-[60px] pb-32">
      <div className="flex justify-between gap-[25px]">
        <div className="flex flex-col gap-[10px] w-full">
          <div className="bg-[#1A1A19] pt-4 border border-[#272625] rounded-[22px] flex flex-col gap-[13px]">
            <div className="flex lg:px-0 px-4 items-center justify-between">
              <div
                className={
                  "text-[18px] leading-[21.6px] font-stopbuck"
                }
              >
                <span>total wagered: </span>
                <span className="text-[#00FF19]">$550,114.24</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-[12px] leading-[18px] text-[#00FF19]">
                  +52.52%
                </div>
                <IoMdTrendingUp color="#00FF19" />
              </div>
            </div>
            <AreaGraph data={wagered} />
          </div>
          <Tabs defaultValue="Today">
            <TabsList className="bg-[#1A1A19] p-1.5 border w-full border-[#272625] rounded-[22px] justify-between">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab}
                  key={tab}
                  className="text-[#686868] font-medium leading-[16.8px] text-[14px] border-[#292828] bg-[#21201F] data-[state=active]:text-white px-2.5 py-0.5 rounded-[18px]"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="flex flex-col gap-[10px] w-full">
          <div className="bg-[#1A1A19] pt-4 border border-[#272625] rounded-[22px] flex flex-col gap-[13px]">
            <div className="flex px-4 items-center justify-between">
              <div
                className={
                  "text-[18px] leading-[21.6px] font-stopbuck"}
              >
                <span>Profit: </span>
                <span className="text-[#00FF19]">$610,204.22</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-[12px] leading-[18px] text-[#00FF19]">
                  +22.48%
                </div>
                <IoMdTrendingUp color="#00FF19" />
              </div>
            </div>
            <AreaGraph data={wagered} />
          </div>
          <Tabs defaultValue="Today">
            <TabsList className="bg-[#1A1A19] p-1.5 border w-full border-[#272625] rounded-[22px] justify-between">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab}
                  key={tab}
                  className="text-[#686868] font-medium leading-[16.8px] text-[14px] border-[#292828] bg-[#21201F] data-[state=active]:text-white px-2.5 py-0.5 rounded-[18px]"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="bg-[#1A1A19] flex flex-col gap-[13px] rounded-[22px] p-3 border border-[#272625]">
            <div
              className={
                "font-stopbuck text-[#C9C9C9] text-[18px] text-center leading-[21.6px] whitespace-nowrap"}
            >
              TOTAL User Balance
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={ToolsImage} height={30} width={30} alt="tools" />
                <div className="text-[#EEEEEE] leading-[21.6px] text-[18px] font-medium">
                  2,3487
                </div>
              </div>
              <div className="flex items-center gap-[4px]">
                <div className="text-[#DB1A28] leading-[18px] text-[12px]">
                  +15.68%
                </div>
                <IoMdTrendingDown color="#DB1A28" />
              </div>
            </div>
          </div>
          <div className="bg-[#1A1A19] flex flex-col gap-[13px] rounded-[22px] p-4 border border-[#272625]">
            <div
              className={
                "font-stopbuck text-[#C9C9C9] text-[18px] leading-[21.6px] whitespace-nowrap"}
            >
              total SHOP HOLDINGS
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-[8px] items-center">
                <Dollar />
                <div className="text-[#EEEEEE] text-[18px] leading-[21.6px] font-medium">
                  $2,3487
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-[#00FF19] text-[12px] leading-[18px]">
                  +22.48%
                </div>
                <IoMdTrendingUp color="#00FF19" />
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <Image src={ToolsImage} height={30} width={30} alt="tools" />
              <div className="text-[14px] leading-[16.8px] text-[#C9C9C9]">
                2,321
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-[25px]">
        <div className="flex flex-col gap-[10px] grow-[2]">
          <div className="bg-[#1A1A19] pt-4 border border-[#272625] rounded-[22px] flex flex-col gap-[13px]">
            <div className="flex px-4 items-center justify-between">
              <div
                className={
                  "text-[18px] leading-[21.6px] font-stopbuck"
                 }
              >
                <span>TOTAL DEPOSITS:: </span>
                <span className="text-[#00FF19]">$550,134.12</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-[12px] leading-[18px] text-[#00FF19]">
                  +52.00%
                </div>
                <IoMdTrendingUp color="#00FF19" />
              </div>
            </div>
            <AreaGraph data={wagered} />
          </div>
          <Tabs defaultValue="Today">
            <TabsList className="bg-[#1A1A19] p-1.5 border w-full border-[#272625] rounded-[22px] justify-between">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab}
                  key={tab}
                  className="text-[#686868] font-medium leading-[16.8px] text-[14px] border-[#292828] bg-[#21201F] data-[state=active]:text-white px-2.5 py-0.5 rounded-[18px]"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="flex flex-col gap-[10px] grow-[2]">
          <div className="bg-[#1A1A19] pt-4 border border-[#272625] rounded-[22px] flex flex-col gap-[13px]">
            <div className="flex px-4 items-center justify-between">
              <div
                className={
                  "text-[18px] leading-[21.6px] font-stopbuck"
                 }
              >
                <span>Total User Balance: </span>
                <span className="text-[#00FF19]">$550,134.12</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-[12px] leading-[18px] text-[#00FF19]">
                  +20.00%
                </div>
                <IoMdTrendingUp color="#00FF19" />
              </div>
            </div>
            <AreaGraph data={wagered} />
          </div>
          <Tabs defaultValue="Today">
            <TabsList className="bg-[#1A1A19] p-1.5 border w-full border-[#272625] rounded-[22px] justify-between">
              {tabs.map((tab) => (
                <TabsTrigger
                  value={tab}
                  key={tab}
                  className="text-[#686868] font-medium leading-[16.8px] text-[14px] border-[#292828] bg-[#21201F] data-[state=active]:text-white px-2.5 py-0.5 rounded-[18px]"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <UserDatabase page={1} limit={4} data={[]} columns={[]}  />
      </div>
      <div className="flex gap-[25px] items-start">
        <LiveTransactions />
        <AffiliateTable page={1} limit={4} data={[]} columns={[]}  />
      </div>
    </div>
  );
};

export default AdminPage;
