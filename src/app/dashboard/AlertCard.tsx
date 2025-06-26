import { AlertCircle, ShoppingBag } from "lucide-react";
import React from "react";
import InsuranceRenewal from "./InsuranceRenewal";
import RoadWorthy from "./RoadWorthy";
import CarServicing from "./CarServicing";
import MaintenanceRequired from "./MaintenanceRequired";
import { Rating } from "@mui/material";

const AlertCard = () => {
  return (
    <div className="bg-white shadow-md rounded pb-2  row-span-3 xl:row-span-6">
      <h3 className="text-lg font-semibold px-2 pt-2 pb-2">System Notifications</h3>
      <hr />
      <div className="overflow-auto h-56 p-1 scrollbar-hide">
        <CarServicing />
        <CarServicing />
        <CarServicing />
        <CarServicing />
        <CarServicing />
        <CarServicing />
        <CarServicing />
        <CarServicing />
        <CarServicing />
        <CarServicing />
      </div>
    </div>
  );
};

export default AlertCard;
// <div className="border border-gray-200 p-1 mr-1 bg-white rounded shadow-sm w-64 h-44 flex flex-col">
//      {/* Header with urgent indicator */}
//      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
//        <div className="flex items-center space-x-2">
//          <AlertCircle className="w-5 h-5 text-red-500" />
//          <p className="text-sm font-semibold text-gray-800"> Alerts</p>
//        </div>
//        <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded-full">
//          3 Urgent
//        </span>
//      </div>
//
//      {/* Scrollable alerts container */}
//      <div className="flex-1 overflow-y-auto mt-2 scrollbar-hide space-y-2 pr-2">
//        {/* Vehicle Registration Renewal */}
//        <CarServicing />
//        {/* Insurance Renewal */}
//        <InsuranceRenewal />
//
//        {/* Roadworthy Certification */}
//        <RoadWorthy />
//
//        {/* General Maintenance */}
//        <MaintenanceRequired />
//      </div>
//
//      {/* Footer */}
//      <div className="pt-1 border-t border-gray-100">
//        <p className="text-[10px] text-gray-400 text-center">
//          Last updated: {new Date().toLocaleDateString()}
//        </p>
//      </div>
//    </div>
