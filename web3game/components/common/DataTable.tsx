"use client";

import React, { useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/Button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  limit: number;
  additionalTitles?: JSX.Element;
}

const DataTable = <TData, TValue>({
  data,
  columns,
  page,
  limit,
}: DataTableProps<TData, TValue>) => {
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
    <div className="bg-[#1A1A19] pb-3 mb-5 px-3 rounded-2xl border border-[#272625] mt-5 ">
      <div className="rounded-lg overflow-hidden w-full">
        <Table className="!border-none border-separate rowspacing2 min-w-[924px]">
          <TableHeader className="bg-inherit !border-none">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="!border-none">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="!pt-3 !px-[13.5px] !rounded-2xl !bg-[#21201F]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`!border-none`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`${
                        cell.column.id === "id"
                          ? "!rounded-l-[16px]"
                          : cell.column.id === "time"
                          ? "!rounded-r-[16px]"
                          : ""
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-[250px] pl-6 py-4 pr-4 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center w-full mt-[17px] mb-[12px]">
        <div className="flex items-center gap-3">
          <Button
            className="p-[10px] bg-[#1A1A19] !font-fredoka border border-[#272625]"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <FiChevronsLeft className="text-[#7f7f7f]" />
          </Button>
          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
            (page, idx) => (
              <Button
                className={`rounded-xl !font-fredoka border leading-[16.8px] border-[#292828] px-[15px] py-3 ${
                  table.getState().pagination.pageIndex === idx
                    ? "bg-[#1A1A19] text-white bordering bordring"
                    : "bg-[#21201F] text-[#686868] "
                }`}
                onClick={() => table.setPageIndex(idx)}
              >
                {page}
              </Button>
            )
          )}
          <Button
            className="p-[10px] bg-[#1A1A19] !font-fredoka border border-[#272625]"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <FiChevronsRight className="text-[#7f7f7f]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
