import React from "react";

const Levelcard = ({
  number,
  variant,
}: {
  number: number;
  variant: string;
}) => {
  return (
    <div
      className={`py-[3px] rounded-sm px-[15px] text-[10px] font-normal text-[#21201F]
      ${
        variant === "secondary"
          ? "bg-gradient-to-t from-[#9F4D00] to-[#FF8515]"
          : "bg-gradient-to-t from-[#7DACC6] to-[#CEE8F6]"
      }
    `}
    >
      {number}
    </div>
  );
};

export default Levelcard;
