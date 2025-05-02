import React from "react";
import DashboardCard from "./DashboardCard";
import RevenueSummary from "./RevenueSummary";

const DashboardPage = () => {
  return (
    <div className="max-w-full">
      <div className="mt-4 ml-72">
        <div className="bg-white rounded p-2">
          <h4>Overview</h4>
          <div>
            <p className="text-xs text-gray-400">Last updated</p>
          </div>

          <div className="flex mt-4 flex-row items-center">
             <DashboardCard label="Students"/>
             <DashboardCard label="Instructors"/>
             <DashboardCard label="Schedules Pending"/>
          </div>
        </div>
        <RevenueSummary/>
      </div>
    </div>
  );
};

export default DashboardPage;
