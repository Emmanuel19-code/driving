"use client";
import { Download } from "lucide-react";
import React from "react";
import InstructorCard from "./InstructorCard";
import SchedulesCard from "./SchedulesCard";
import StudentCard from "./StudentCard";
import RevenueSummary from "./RevenueSummary";


const DashboardPage = () => {
  return (
    <div className="max-w-full ">
      <div className="mt-2  flex flex-1 flex-row">
        <div className="w-9/12">
          <div className="bg-white shadow p-2 m-2 h-44  rounded w-full">
            <div className="flex flex-row ml-2 justify-between items-center">
              <div>
                <h4 className="text-lg font-medium">Overview</h4>
                <p className="text-[8px] text-gray-400">
                  {" "}
                  Last updated June 20, 7:30am
                </p>
              </div>
              <div className="flex cursor-pointer flex-row items-center w-24 justify-between px-2 rounded border-black border">
                <p>Report</p>
                <Download className="w-4" />
              </div>
            </div>
            <div className="flex flex-row  justify-between mt-2.5">
              <StudentCard />
              <InstructorCard />
              <SchedulesCard />
            </div>
          </div>
          <RevenueSummary/>
          <div className="bg-white p-2 shadow m-2 h-40 rounded w-full">
            <div className="flex flex-row justify-between items-center">
              <div>
                <h4 className="text-lg font-medium">Overview</h4>
                <p className="text-[8px] text-gray-400">
                  {" "}
                  Last updated June 20, 7:30am
                </p>
              </div>
              <div className="flex flex-row items-center w-24 justify-between px-2 rounded border-black border">
                <p>Report</p>
                <Download className="w-4" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardPage;
