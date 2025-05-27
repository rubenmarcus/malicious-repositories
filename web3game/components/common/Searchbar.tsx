import React from "react";
import { CiCircleList } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsTags } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { Input } from "../ui/Input";


const Searchbar = () => {
  return (
    <div className="flex gap-[50px] justify-between w-full md:max-w-[800px]">
      <div className="py-[10.5px] hidden md:flex items-center gap-3 ">
        <TfiReload fontSize={24} />
        <CiCircleList fontSize={24} />
      </div>
      <div className={`bg-[#181716] border border-[#1E1D1B] w-full 2xl:w-[483px] flex items-center gap-3 pl-3 rounded-lg`}>
        <CiSearch fontSize={24} />
        <Input type="search" placeholder="Search rewards inventory" className="outline-none  border-none focus:border-none" />
      </div>
      <div className=" hidden md:flex items-center justify-center">
        <BsTags fontSize={24} />
      </div>
    </div>
  );
};
export default Searchbar;
