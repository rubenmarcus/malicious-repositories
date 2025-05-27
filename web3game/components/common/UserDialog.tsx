import React, { useState } from "react";
import UserIcon from "@/public/assets/icons/user.svg";
import InspectUserDialog from "./InspectUserDialog";
import { DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/Button";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/Input";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import {
    ColumnDef,
    PaginationState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

interface UserProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    page: number;
    limit: number;
    additionalTitles?: JSX.Element;
}
const item = {
    times: 5,
    amount: 12435.56,
};

const UserDialog = <TData, TValue>({
    data,
    columns,
    page,
    limit,
}: UserProps<TData, TValue>) => {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: page,
        pageSize: limit,
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    });

    return (
        <DialogContent className="w-fit border-none flex flex-col bg-[#1A1A19] border-[1px] border-[#272625]">
            <VisuallyHidden>
                <DialogTitle>UserDialog</DialogTitle>
            </VisuallyHidden>
            <div
                className={
                    "text-[18px] leading-[21.6px] text-[#C9C9C9] text-start font-stopbuck"
                }
            >
                EXPANDED USER DATABASE
            </div>
            <div
                className={`bg-[#181716] border border-[#1E1D1B] w-full  flex items-center gap-3 pl-3 rounded-lg`}
            >
                <CiSearch fontSize={24} />
                <Input
                    type="search"
                    placeholder="Search by User, code..."
                    className="outline-none border-none focus:border-none"
                />
            </div>
            <div>
                <div className="grid grid-cols-6 2xl:grid-cols-8 gap-[9px]">
                    {Array.from({ length: 48 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#21201F] border-[#292828] border gap-[6px] flex flex-col rounded-[16px] py-1.5  px-2"
                            style={{
                                boxShadow: "0px 5px 10.4px -4px #00000012",
                            }}
                        >
                            <div className="flex justify-between items-center gap-[5px]">
                                <div
                                    className="border-[#27262594] border p-1.5 pt-2  rounded-[12px] items-center flex justify-center"
                                    style={{
                                        boxShadow:
                                            "0px 7px 5.8px -5px #1E1E1E0F",
                                    }}
                                >
                                    <UserIcon />
                                </div>
                                <div>user008</div>
                            </div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="text-[14px] py-1 pl-4 text-[#686868] leading-[16.8px] cursor-pointer border-[#272625] border bg-[#1A1A19] rounded-[8px]">
                                        Inspect User
                                    </div>
                                </DialogTrigger>
                                <InspectUserDialog />
                            </Dialog>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center w-full ">
                <div className="flex items-center gap-3">
                    <Button
                        className="p-[10px] bg-[#1A1A19] !font-fredoka border border-[#272625]"
                        onClick={() => table.previousPage()}
                        // disabled={!table.getCanPreviousPage()}
                    >
                        <FiChevronsLeft className="text-[#7f7f7f]" />
                    </Button>
                    {Array.from({ length: 3 }, (_, i) => i + 1).map(
                        (page, idx) => (
                            <Button
                                className={`rounded-xl !font-fredoka border leading-[16.8px] border-[#292828] px-[15px]  ${
                                    table.getState().pagination.pageIndex ===
                                    idx
                                        ? "bg-[#1A1A19] text-white bordering "
                                        : "bg-[#21201F] text-[#686868] "
                                }`}
                                key={idx}
                                onClick={() => table.setPageIndex(idx)}
                            >
                                {page}
                            </Button>
                        )
                    )}
                    <Button
                        className="p-[10px] bg-[#1A1A19] !font-fredoka border border-[#272625]"
                        onClick={() => table.nextPage()}
                        // disabled={!table.getCanNextPage()}
                    >
                        <FiChevronsRight className="text-[#7f7f7f]" />
                    </Button>
                </div>
            </div>
        </DialogContent>
    );
};

export default UserDialog;
