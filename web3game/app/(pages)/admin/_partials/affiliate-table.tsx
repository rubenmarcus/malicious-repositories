import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import ToolsImage from "@/public/assets/images/tools.png";
import Image from "next/image";
import {
  ColumnDef,
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
interface AffiliateTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  limit: number;
  additionalTitles?: JSX.Element;
}
const AffiliateTable = <TData, TValue>({
  data,
  columns,
  page,
  limit,
}: AffiliateTableProps<TData, TValue>) => {
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
    <div className="bg-[#1A1A19] border border-[#272625] rounded-[22px] p-4 flex flex-col gap-[17px]">
      <div className="flex flex-col gap-[10px]">
        <div
          className={
            "font-stopbuck text-[18px] leading-[21.6px] text-[#C9C9C9] text-center"
           }
        >
          AFFILIATES
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[11px]">
            <div className="flex mt-[9px] items-center bg-[#181716] pl-3 border-[#1E1D1B] border rounded-[8px]">
              <CiSearch />
              <Input
                className=" placeholder:text-[#686868] border-none bg-none focus-visible:ring-0"
                placeholder="Seed01"
              />
            </div>
            <div
              className="flex justify-between bg-[#21201F] rounded-[10px] p-[4px] gap-6"
              style={{
                borderWidth: "1px",
                borderColor: "#292828",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(0deg, #292828, #292828), linear-gradient(287.19deg, rgba(240, 221, 221, 0) 82.64%, rgba(240, 221, 221, 0.14) 100%)",
              }}
            >
              <div className="flex flex-col gap-[2px]">
                <div
                  className={
                    "text-[#DDDDDD] text-[16px] leading-[16.8px] font-stopbuck"}
                >
                  Total EARNINGS
                </div>
                <div className="flex gap-[9px] items-center">
                  <Image src={ToolsImage} height={25} width={25} alt="tools" />
                  <div className="text-[#EEEEEE] leading-[19.2px] text-[14px] font-medium">
                    +23,182
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <div
                  className={
                    "text-[#DDDDDD] text-[16px] leading-[16.8px] font-stopbuck"
                   }
                >
                  TIMES CLaimed
                </div>
                <div className="text-[#EEEEEE] leading-[19.2px] mt-[3px] text-[16px] font-medium">
                  3,182
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <div
                  className={
                    "text-[#DDDDDD] text-[16px] leading-[16.8px] font-stopbuck"}
                >
                  TOTAL WAGERED
                </div>
                <div className="flex gap-[9px] items-center">
                  <Image src={ToolsImage} height={25} width={25} alt="tools" />
                  <div className="text-[#EEEEEE] leading-[19.2px] text-[16px] font-medium">
                    +23,182
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mt-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#21201F] border-[#292828] border justify-between flex py-1 px-1 rounded-[16px]"
            >
              <div className="flex gap-[14px] ">
                <div
                  className="border-[#272625cb] border rounded-[12px] items-center justify-center flex"
                  style={{
                    boxShadow: "0px 7px 5.8px -5px #1E1E1E0F",
                  }}
                >
                  <img src="/assets/icons/user.svg" className="w-[45px] h-[45px] pt-2" />
                </div>
                <div className="flex flex-col">
                  <div className="leading-[16.2px] text-[16px] pl-1 pb-1 font-medium">
                     user001
                  </div>
                  <div className="bg-[#1A1A19] flex items-center gap-1 border border-[#272625] rounded-[6px] px-2 py-1.5 text-[14px] leading-[16.8px]">
                    <span className="text-[#7F7F7F]">Steam ID:</span>
                    <span>239221</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-1 gap-1 text-[#7F7F7F]">
                <div className="bg-[#1A1A19] flex items-center gap-1 border border-[#272625] rounded-[6px] px-1 py-0 text-[14px] leading-[16.8px]">
                  <span>Times Claimed:</span>
                  <span className="text-white">45</span>
                </div>
                <div className="bg-[#1A1A19] w-[85px] ml-[38px] text-end gap-1 border border-[#272625] rounded-[6px] px-1 py-0 text-[12px] leading-[16.8px]">
                  Wagered: 435
                </div>
              </div>
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
          {Array.from({ length: 3 }, (_, i) => i + 1).map((page, idx) => (
            <Button
              className={`rounded-xl !font-fredoka border leading-[16.8px] border-[#292828] px-[15px] py-3 ${
                table.getState().pagination.pageIndex === idx
                  ? "bg-[#1A1A19] text-white bordering "
                  : "bg-[#21201F] text-[#686868] "
              }`}
              key={idx}
              onClick={() => table.setPageIndex(idx)}
            >
              {page}
            </Button>
          ))}
          <Button
            className="p-[10px] bg-[#1A1A19] !font-fredoka border border-[#272625]"
            onClick={() => table.nextPage()}
            // disabled={!table.getCanNextPage()}
          >
            <FiChevronsRight className="text-[#7f7f7f]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AffiliateTable;
