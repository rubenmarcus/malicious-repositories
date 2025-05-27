import { Input } from "@/components/ui/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/utils/tw-merge";
import React from "react";
import { CiSearch } from "react-icons/ci";
import dayjs from "dayjs";

const LiveTransactions = () => {
  const tabs = ["card", "crypto"];
  const transactions = [
    {
      id: 239221,
      amount: 121,
      issuer: "Etherium",
      date: new Date("01/10/2023"),
      deposit: false,
    },
    {
      id: 239221,
      amount: 90,
      issuer: "LiteCoin",
      date: new Date("01/10/2023"),
      deposit: false,
    },
    {
      id: 239221,
      amount: 379,
      issuer: "BitCoin",
      deposit: true,
      date: new Date("01/10/2023"),
    },
    {
      id: 239221,
      amount: 2379,
      issuer: "Litecoin",
      deposit: true,

      date: new Date("01/10/2023"),
    },
    {
      id: 239221,
      amount: 4279,
      issuer: "USDC",
      date: new Date("01/10/2023"),
    },
  ];

  return (
    <div className="bg-[#1A1A19] border border-[#272625] rounded-[22px] p-4">
      <div
        className={
          "font-stopbuck text-[18px] leading-[21.6px] text-[#C9C9C9]"}
      >
        LIVE TRANSACTIONS
      </div>
      <Tabs defaultValue="crypto">
        <TabsList className=" bg-[#21201F] mt-[12px] gap-4">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="datebtn rounded-lg capitalize"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab} value={tab}>
            <div className="flex mt-[9px] items-center bg-[#181716] pl-3 border-[#1E1D1B] border rounded-[8px]">
              <CiSearch />
              <Input
                className=" placeholder:text-[#686868] border-none bg-none focus-visible:ring-0"
                placeholder="Search by ID, Amount..."
              />
            </div>
            <div className="flex gap-[10px] flex-col mt-[25px]">
              {transactions.map((trans, index) => (
                <div
                  key={index}
                  className="bg-[#21201F] flex items-center justify-between gap-10 rounded-[16px] border-[#292828] border py-1.5 pl-2 pr-2"
                  style={{
                    boxShadow: "0px 5px 10.4px -4px #00000012",
                  }}
                >
                  <div className="flex flex-col gap-[9px]">
                    <div className="flex items-center gap-1">
                      <span
                        className={cn(
                          "font-medium text-[18px] leading-[21.6px]",
                          trans.deposit ? "text-[#00FF19]" : "text-[#DB1A28]"
                        )}
                      >
                        ${trans.amount}
                      </span>
                      <span className="text-[#686868] leading-[16.8px] text-[14px]">
                        - {trans.issuer}
                      </span>
                    </div>
                    <div className="flex items-center gap-[9px]">
                      <div className="bg-[#1A1A19] border cursor-pointer border-[#272625] rounded-[7px] p-1 text-[16px] leading-[19.2px] text-[#7F7F7F]">
                        {trans.deposit ? "Deposit" : "Withdrawal"}
                      </div>
                      <div
                        onClick={() => {}}
                        className="bg-[#1A1A19] border cursor-pointer border-[#272625] hover:text-white rounded-[7px] p-1 text-[16px] leading-[19.2px] text-[#7F7F7F]"
                      >
                        Copy TX ID
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-[6px]">
                    <div className="text-[12px] text-[#7F7F7F] leading-[14.4px]">
                      {dayjs(trans.date).format("hh:mm | DD/M/YY")}
                    </div>
                    <div className="bg-[#1A1A19] border cursor-pointer border-[#272625] rounded-[7px] p-1 text-[16px] leading-[19.2px] text-[#7F7F7F]">
                      ID: <span className="text-white">{trans.id}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default LiveTransactions;
