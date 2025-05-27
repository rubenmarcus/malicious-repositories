import { Input } from "@/components/ui/Input";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import UserIcon from "@/public/assets/icons/user.svg";
import { Button } from "@/components/ui/Button";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import UserDialog from "@/components/common/UserDialog";
import {
  ColumnDef,
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
interface UserTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  limit: number;
  additionalTitles?: JSX.Element;
}

const UserDatabase = <TData, TValue>({
  data,
  columns,
  page,
  limit,
}: UserTableProps<TData, TValue>) => {
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
    <div className="bg-[#1A1A19] shrink-[3] border border-[#272625] rounded-[22px] p-4 pt-2 gap-[19px] flex flex-col">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-[7px]">
          <div className="flex justify-between items-center">
            <div
              className={
                "font-stopbuck text-[18px] leading-[18.6px] text-[#C9C9C9]"
               }
            >
              USER DATABASE
            </div>
            <Dialog>
              <DialogTrigger asChild>

                <div className="bg-[#1A1A19] cursor-pointer  border border-[#272625] p-[12px] rounded-[8px] leading-[16.8px] text-[13px] text-[#EEEEEE]">
                  View more
                </div>
              </DialogTrigger>
              <UserDialog page={1} limit={4} data={[]} columns={[]}  />
            </Dialog>

          </div>
          <div className="flex items-center bg-[#181716] pl-3 border-[#1E1D1B] border rounded-[8px]">
            <CiSearch />
            <Input
              className=" placeholder:text-[#686868] border-none bg-none focus-visible:ring-0"
              placeholder="Search by User, Code..."
            />
          </div>
        </div>
        <div className="grid grid-cols-3 2xl:grid-cols-4 gap-[9px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#21201F] border-[#292828] border gap-[4px] flex flex-col rounded-[16px] py-1.5  px-2"
              style={{
                boxShadow: "0px 5px 10.4px -4px #00000012",
              }}
            >
              <div className="flex justify-between items-center gap-[5px]">
                <div
                  className="border-[#27262594] border p-1 pt-2 pb-0 rounded-[12px] items-center flex justify-center"
                  style={{
                    boxShadow: "0px 7px 5.8px -5px #1E1E1E0F",
                  }}
                >
                  <UserIcon />
                </div>
                <div>user008</div>
              </div>
              <div className="text-[14px] pl-4 py-1 text-[#686868] leading-[16.8px] border-[#272625] border bg-[#1A1A19] rounded-[8px]">
                Inspect User
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
              className={`rounded-xl !font-fredoka border leading-[16.8px] border-[#292828] px-[15px]  ${
                table.getState().pagination.pageIndex === idx
                  ? "bg-[#1A1A19] text-white bordering"
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

export default UserDatabase;
