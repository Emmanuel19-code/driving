import React from "react";

const SchedulesCard = () => {
  return (
    <div className="border border-gray-300 flex flex-col justify-between rounded-md h-28 w-64 p-2 m-1">
      <div>
        <div className="flex flex-row items-center space-x-2">
          <h4 className=" text-lg">Schedules Plan</h4>
          {/* 
          <p className="py-0.5 bg-[#AFFF5E] text-[#64AE1A] bg-opacity-10  text-xs px-3">
            +20
          </p>
          */}
        </div>
        {/*
            <p className="text-xs text-slate-500">Course teachers</p>
            
            */}
      </div>
      <h4 className="font-bold text-lg">20</h4>
      <div className="flex flex-row items-center space-x-2 ">
        <p className="text-[10px] bg-[#AFFF5E]/50 px-1 font-bold text-[#64AE1A]">
          Male <span>57.14%</span>
        </p>
        <p className="text-[10px] text-red-500 font-medium bg-red-300/50 px-1">
          Female <span>57.14%</span>
        </p>
      </div>
    </div>
  );
};

export default SchedulesCard;
