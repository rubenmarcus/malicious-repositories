import { History } from "@/lib/types/History";
import { Transaction } from "@/lib/types/Transaction";
import { displayNumbers } from "@/utils/usableFunc";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
export const columnsH: ColumnDef<History>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <h2 className="text-sm font-fredoka font-light text-[#DDDDDD]">
        <span className="text-[#686868]">#</span>
        {row.original.id}
      </h2>
    ),
  },
  {
    accessorKey: "gameWager",
    header: "GAME WAGER",
  },
  {
    accessorKey: "credited",
    header: "CREDITED",
    cell: ({ row }) => (
      <h2
        className={`${
          row.original.credited <= 0 ? "text-[#DB1A28]" : "text-[#00FF19]"
        }`}
      >
        {row.original.credited <= 0 ? "" : "+"}
        {displayNumbers(row.original.credited)}
      </h2>
    ),
  },
  {
    accessorKey: "winChance",
    header: "WIN CHANCE",
    cell: ({ row }) => (
      <h2 className={`${row.original.credited <= 0 ? "" : "text-[#DB1A28]"}`}>
        {row.original.winChance}%
      </h2>
    ),
  },
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => (
      <h2>{moment(row.original.date).format("D/M/YY")}</h2>
    ),
  },
  {
    accessorKey: "time",
    header: "TIME",
    cell: ({ row }) => (
      <h2 className="text-sm text-[#DDDDDD] font-normal">
        {moment(row.original.date).format("h:mm")}
      </h2>
    ),
  },
];


export const columnsT: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <h2 className="text-sm font-fredoka font-light text-[#DDDDDD]">
        <span className="text-[#686868]">#</span>
        {row.original.id}
      </h2>
    ),
  },
  {
    accessorKey: "provider",
    header: "PROVIDER",
  },
  {
    accessorKey: "credited",
    header: "CREDITED",
    cell: ({ row }) => (
      <h2
        className={`${
          row.original.credited <= 0 ? "text-[#DB1A28]" : "text-[#00FF19]"
        }`}
      >
        {row.original.credited <= 0 ? "" : "+"}
        {displayNumbers(row.original.credited)}
      </h2>
    ),
  },
  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => (
      <h2>{moment(row.original.date).format("D/M/YY")}</h2>
    ),
  },
  {
    accessorKey: "time",
    header: "TIME",
    cell: ({ row }) => (
      <h2 className="text-sm text-[#DDDDDD] font-normal">
        {moment(row.original.date).format("h:mm")}
      </h2>
    ),
  },
];
