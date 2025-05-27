"use client";

import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CoinFlipType } from "@/lib/types/CoinFlip";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi";
import redCoin from "@/public/assets/icons/redCoin.png";
import blackCoin from "@/public/assets/icons/blackCoin.png";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/tw-merge";
import { displayNumbers } from "@/utils/usableFunc";
import UserPlaceHolder from "@/public/assets/images/userPlaceholder.svg";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import StartGameDialog from "@/components/common/StartGameDialog";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    Row,
    useReactTable,
} from "@tanstack/react-table";
import StartCoinModal from "@/components/common/StartCoinModal";
const CompetitorCard = ({
    image,
    coin,
    row,
}: {
    image: string;
    coin: string;
    row?: Row<CoinFlipType>;
}) => {
    return (
        <div
            className={cn(
                "relative p-[6px] rounded-2xl bg-[#1A1A19] border border-[#272625]"
            )}
        >
            {image ? (
                <Image
                    src={image}
                    className={cn(
                        "rounded-[11px] border border-[#000000] w-[46px] h-[46px]",
                        row?.original.completed &&
                            row?.original.winner?.username !==
                                row?.original.competitors[1].username
                            ? "opacity-35"
                            : ""
                    )}
                    alt="competitorcard"
                />
            ) : (
                <div className="w-[px] h-[46px] rounded-[11px] flex items-center justify-center pt-[8px] border border-[#ED3440]">
                    <UserPlaceHolder />
                </div>
            )}
            <Image
                src={coin === "red" ? redCoin : blackCoin}
                className="absolute -top-1.5 -right-2.5 w-4 h-4"
                alt="coin"
            />
        </div>
    );
};

const WeaponCard = ({ weapon }: { weapon: string }) => {
    return (
        <div className="flex justify-center items-center  rounded-[13px] bg-[#1A1A19] border border-[#2A2928] w-[45px] h-[45px]">
            <Image src={weapon} alt="weapon" className="w-[26px] h-[26px]" />
        </div>
    );
};

interface DataTableProps<TData> {
    data: TData[];
}
const columns: ColumnDef<CoinFlipType>[] = [
    {
        accessorKey: "value",
        cell: ({ row }) => {
            const competitors = row.original.competitors;
            return (
                <div className="flex flex-col gap-[21px] pr-10 sm:pr-0">
                    <div className="flex items-center gap-[25px] w-fit">
                        <div className="hidden sm:flex flex-col justify-center items-center">
                            <h2 className="text-xs font-normal text-[#595140]">
                                Total value
                            </h2>
                            <div className="bg-[#1A1A19] border border-[#272625] flex items-center justify-center p-[6px] rounded-lg">
                                <h2 className="text-xs text-[#00FF19]">
                                    ${displayNumbers(row.original.value)}
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[203px]">
                            <CompetitorCard
                                image={competitors[0].image}
                                coin={competitors[0].coin}
                            />

                            <Button
                                variant={"secondary"}
                                className="!w-8 !h-8 !rounded-[9px] border !border-[#FF313E]"
                            >
                                VS
                            </Button>
                            <CompetitorCard
                                row={row}
                                image={competitors[1].image}
                                coin={competitors[1].coin}
                            />
                        </div>
                        <div className="px-[5.5px] py-1 bg-[#1A1A19] text-[#686868] border border-[#272625] rounded-lg text-[12px] font-normal text-nowrap hidden sm:block ">
                            Created by:
                            {row.original.creator.username.substring(0, 2)}...
                        </div>
                    </div>
                    <div className=" sm:hidden flex items-center justify-end gap-5">
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="rounded-lg bg-[#1A1A19] border border-[#272625] h-10 w-10 flex items-center justify-center">
                                    <HiOutlineEye
                                        className="text-[#686868]"
                                        fontSize={24}
                                    />
                                </div>
                            </DialogTrigger>
                            <StartCoinModal />
                        </Dialog>

                        {row.original.completed && row.original.winner ? (
                            <Button className="gap-3 border border-[#272625] rounded-[13px] bg-[#1A1A19] !pr-0">
                                <h2 className={"font-stopbuck"}>Winner</h2>
                                <div className="relative rounded-2xl bg-[#1A1A19] border border-[#272625]">
                                    <Image
                                        src={row.original.winner.image}
                                        className="rounded-[11px] border border-[#000000] w-[34px] h-[34px] my-[6px] mr-[6.9px]"
                                        alt="competitorcard"
                                    />
                                    <Image
                                        src={
                                            row.original.winner.coin === "red"
                                                ? redCoin
                                                : blackCoin
                                        }
                                        className="absolute top-[-9px] right-[-7px] w-3 h-3 "
                                        alt="coin"
                                    />
                                </div>
                            </Button>
                        ) : (
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant={"secondary"}
                                        className="text-base"
                                        disabled={row.original.started}
                                    >
                                        <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF] px-[6px]">
                                            join battle
                                        </h2>
                                    </Button>
                                </DialogTrigger>
                                <StartCoinModal />
                            </Dialog>
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "wapons",
        cell: ({ row }) => (
            <div className="flex flex-col gap-[21px]">
                <div className="flex items-center gap-[10px] py-[10px] px-3 bg-gradient-to-l from-[#ED3440]/0 to-[#ED3440]/5 rounded-[18px] bg-inherit border border-[#ED3440]/5">
                    {row.original.wapons.slice(0, 4).map((weapon, indx) => (
                        <WeaponCard key={indx} weapon={weapon} />
                    ))}
                    {row.original.wapons.length > 5 && (
                        <h2 className="text-[14px] font-normal text-[#686868]">
                            +{row.original.wapons.length - 4}
                        </h2>
                    )}
                </div>
                <div className="flex gap-[21px] sm:hidden items-center">
                    <div className="sm:hidden flex flex-col justify-center items-center">
                        <h2 className="text-xs font-normal text-[#595140]">
                            Total value
                        </h2>
                        <div className="bg-[#1A1A19] border border-[#272625] flex items-center justify-center p-[6px] rounded-lg">
                            <h2 className="text-xs text-[#00FF19]">
                                ${displayNumbers(row.original.value)}
                            </h2>
                        </div>
                    </div>
                    <div className="px-[5.5px] py-1 bg-[#1A1A19] text-[#686868] border border-[#272625] rounded-lg text-[12px] h-fit font-normal text-nowrap sm:hidden block ">
                        Created by:
                        {row.original.creator.username.substring(0, 2)}...
                    </div>
                </div>
            </div>
        ),
    },
    {
        accessorKey: "completed",
        cell: ({ row }) => (
            <div className=" hidden sm:flex items-center justify-end pr-3 gap-5">
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="rounded-lg bg-[#1A1A19] border border-[#272625] h-10 w-10 flex items-center justify-center">
                            <HiOutlineEye
                                className="text-[#686868]"
                                fontSize={24}
                            />
                        </div>
                    </DialogTrigger>
                    <StartCoinModal />
                </Dialog>

                {row.original.completed && row.original.winner ? (
                    <Button className="gap-[5px] border border-[#272625] bg-[#1A1A19] rounded-[13px] h-[46px] pr-[10px] pl-[8px]">
                        <h2 className="text-[17px] px-[2px]  text-gradient bg-gradient-to-t from-[#cacaca] to-[#FFFF] font-light">
                            Winner
                        </h2>
                        <div className="relative rounded-2xl bg-[#1A1A19] border border-[#272625]">
                            <Image
                                src={row.original.winner.image}
                                className="rounded-[11px] border border-[#000000] w-[34px] h-[34px]"
                                alt="competitorcard"
                            />
                            <Image
                                src={
                                    row.original.winner.coin === "red"
                                        ? redCoin
                                        : blackCoin
                                }
                                className="absolute top-[-9px] right-[-10px] w-3 h-3 "
                                alt="coin"
                            />
                        </div>
                    </Button>
                ) : (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant={"secondary"}
                                className="text-base"
                                disabled={row.original.started}
                            >
                                <h2 className="text-gradient bg-gradient-to-t from-[#FFB9BE] to-[#FFFF] px-[6px]">
                                    join battle
                                </h2>
                            </Button>
                        </DialogTrigger>
                        {/* <StartGameDialog /> */}
                        <StartCoinModal />
                    </Dialog>
                )}
            </div>
        ),
    },
];
export function CoinflipTable<TData, TValue>({ data }: DataTableProps<TData>) {
    const table = useReactTable({
        data,
        columns: columns as unknown as ColumnDef<TData, TValue>[],
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <div className="w-full h-auto">
            <Table className="border-separate rowspacing">
                <TableBody className="">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                className="!border-none bg-[#21201F] !w-fit"
                            >
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <TableCell
                                            key={cell.id}
                                            className={`!p-[10px] ${
                                                cell.column.id === "value"
                                                    ? "!w-[441.98px] rounded-l-[18px]"
                                                    : ""
                                            }
                      ${
                          cell.column.id === "completed"
                              ? "!pl-24 rounded-r-[18px]"
                              : ""
                      }
                      `}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
