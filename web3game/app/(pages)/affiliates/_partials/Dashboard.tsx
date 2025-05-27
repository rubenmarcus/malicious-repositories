"use client";
import React from "react";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/Button";
import { MdInsertLink } from "react-icons/md";
import { displayNumbers } from "@/utils/usableFunc";
import Image from "next/image";
import tools from "@/public/assets/images/tools.png";
import { CiSearch } from "react-icons/ci";
import { Input } from "../../../../components/ui/Input";
import { userTitle } from "@/config/constants/affiliatestitle";
import { userTable } from "@/config/constants/affiliates";
const Dashboard = () => {
    return (
        <div className="mt-[70px] flex w-full gap-7">
            <div className="flex flex-col gap-5 sm:gap-12 w-full sm:w-auto">
                <div className="flex flex-col gap-[17px]">
                    <h2 className="text-base font-medium leading-[19.2px]">
                        Create Affiliate Code
                    </h2>
                    <div className="flex flex-col gap-2">
                        <div className="bg-[#21201F] border border-[#292828] rounded-xl p-1 flex justify-between gap-2 sm:w-fit">
                            <input
                                type="text"
                                className="outline-none pl-2 w-[140px] placeholder:text-sm placeholder:text-[#9c9c9c] bg-inherit"
                                placeholder="Enter Code"
                            />
                            <Button variant={"secondary"}>
                                <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
                                    save
                                </h2>
                            </Button>
                        </div>
                        <div className="bg-[#21201F] border border-[#292828] rounded-xl p-1 flex items-center justify-between pl-2 gap-2 sm:w-fit">
                            <h2 className="text-sm leading-[16.8px] text-[#9C9C9C]">
                                rustflip.com/re/
                            </h2>
                            <Button className="!font-fredoka  !text-sm px-[10px] py-[9px] bg-[#1A1A19] rounded-lg">
                                <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
                                    copy
                                </h2>
                                <MdInsertLink
                                    fontSize={16}
                                    className="-rotate-45 ml-2"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center p-[14px] gap-8 rounded-[10px] bg-[#21201F] border border-[#292828]">
                    <div className="flex flex-col items-center gap-[10px]">
                        <h2 className="text-base font-medium leading-[19.2px]">
                            Available Earnings
                        </h2>
                        <div className="flex items-center gap-[9px]">
                            <Image
                                src={tools}
                                alt="image"
                                className="w-5 h-5  object-cover"
                            />
                            <h2 className="text-base font-medium leading-[19.2px]">
                                {displayNumbers(0.23)}
                            </h2>
                        </div>
                    </div>
                    <Button variant={"secondary"}>
                        <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF]">
                            claim earnings
                        </h2>
                    </Button>
                </div>
            </div>
            <div className=" hidden sm:block flex-1 mt-6">
                <div className="flex justify-between">
                    <h2 className="text-base pt-4 font-medium leading-[19.2px]">
                        User
                    </h2>
                    <div
                        className={`bg-[#181716] border border-[#1E1D1B] flex items-center gap-3 pl-3 rounded-lg`}
                    >
                        <CiSearch fontSize={24} />
                        <Input
                            type="search"
                            placeholder="Search for a user"
                            className="outline-none  border-none focus:border-none"
                        />
                    </div>
                </div>
                <table className="bg-[#21201F] rounded-xl w-full mt-2">
                    <tr className="flex px-16 justify-between py-4">
                        {userTitle.map((item, index) => (
                            <th key={index} className="w-1/4 text-left">
                                {item}
                            </th>
                        ))}
                    </tr>
                    <tbody className="flex flex-col gap-1 px-6 h-60 overflow-y-auto scrollbar">
                        {userTable.length > 0 ? (
                            userTable.map((item, index) => (
                                <tr
                                    key={index}
                                    className="flex justify-between px-10 py-3 rounded-xl bg-[#272625]"
                                >
                                    <td className="font-normal text-[14px] text-start w-1/4">
                                        {item.user}
                                    </td>
                                    <td className="font-normal text-[14px] px-2 text-start w-1/4">
                                        <u className="text-[#00FF19] decoration-transparent">
                                            $
                                        </u>
                                        {item.totalwagered}
                                    </td>
                                    <td className="font-normal text-[14px] px-2 text-start w-1/4">
                                        <u className="text-[#00FF19] decoration-transparent">
                                            $
                                        </u>
                                        {item.totaldeposited}
                                    </td>
                                    <td className="font-normal text-[14px] px-2 text-start w-1/4 text-[#00FF19]">
                                        +{item.commissionearned}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* <Tabs defaultValue="week">
            <div className="flex justify-between">
              <h2 className="text-base font-medium leading-[19.2px]">
                User
              </h2>
              <TabsList className=" bg-[#21201F] gap-4">
                <TabsTrigger value="week" className="datebtn rounded-lg">
                  week
                </TabsTrigger>
                <TabsTrigger value="month" className="datebtn rounded-lg">
                  month
                </TabsTrigger>
                <TabsTrigger value="year" className="datebtn rounded-lg">
                  year
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              value="week"
              className="bg-[#21201F] py-2 px-4 mt-[8px] rounded-[10px] border border-[#292828] h-[287px]"
            >Dashboard for week</TabsContent>
            <TabsContent
              value="month"
              className="bg-[#21201F] py-2 px-4 rounded-[10px] border border-[#292828] h-[287px]"
            >Dashboard for month</TabsContent>
            <TabsContent
              value="year"
              className="bg-[#21201F] py-2 px-4 rounded-[10px] border border-[#292828] h-[287px]"
            >Dashboard for year</TabsContent>
          </Tabs>   */}
            </div>
        </div>
    );
};

export default Dashboard;
