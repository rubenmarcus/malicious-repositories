"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/common/DataTable";
import { columnsH, columnsT } from "./columns";
import { TransactionData } from "@/config/constants/transactionData";
import { HistoryData } from "@/config/constants/historyData";
import { useAppSelector } from "@/store/store";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import InventoryDialog from "../../../../components/common/InventoryDialog";

const HistoryTable = () => {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(6);
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const isAuthenticated = useAppSelector(
        (state) => state.auth.isAuthenticated
    );
    const handleshowDropDown = (e: string) => {
        if (e === "trigger") setShowDropDown((prev) => !prev);
    };
    const handleDialogOpen = (e: string) => {
        if (e === "dialog") setShowDialog(true);
    };

    return (
        <div>
            <Tabs defaultValue="history">
                <TabsList className=" bg-[#21201F] gap-4">
                    <TabsTrigger
                        id="trigger"
                        value="transactions"
                        className="datebtn relative"
                        onClick={(e) => handleshowDropDown(e.currentTarget.id)}
                    >
                        Transactions
                        <div
                            className={`flex flex-col z-50 w-[117px] absolute left-10 bg-[#1A1A19] border border-[#272625] rounded-lg py-2 px-[4.91px] gap-2 ${
                                showDropDown
                                    ? "translate-y-10 scale-x-100 opacity-100"
                                    : "-translate-y-8 scale-0 opacity-0"
                            } transition-all duration-150`}
                        >
                            <div className="!bg-[#1A1A19] !border px-[10px] h-8 !border-[#272625] rounded-lg flex items-center gap-1 whitebtn">
                                <FaArrowUpFromBracket fontSize={14} />
                                <h2 className="pl-1 font-fredoka text-[14px] font-normal text-[#7F7F7F]  hover:text-[#eeeeee]">
                                    Deposit
                                </h2>
                            </div>
                            <div className="!bg-[#1A1A19]  !border px-[10px] h-8 !border-[#272625] rounded-lg flex items-center gap-1 whitebtn">
                                <FaArrowUpFromBracket
                                    fontSize={14}
                                    className="rotate-180"
                                />
                                <h2 className="pl-1 font-fredoka text-[14px] font-normal text-[#7F7F7F]  hover:text-[#eeeeee]">
                                    Withdraw
                                </h2>
                            </div>
                        </div>
                    </TabsTrigger>
                    <TabsTrigger
                        value="history"
                        className="datebtn rounded-lg"
                        onClick={() => setShowDropDown(false)}
                    >
                        Game history
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="transactions">
                    <DataTable
                        columns={columnsT}
                        data={TransactionData}
                        page={page}
                        limit={limit}
                    />
                </TabsContent>
                <TabsContent value="history">
                    <DataTable
                        columns={columnsH}
                        data={HistoryData}
                        page={page}
                        limit={limit}
                    />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default HistoryTable;
