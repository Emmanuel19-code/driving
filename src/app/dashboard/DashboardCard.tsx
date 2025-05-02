import { Info } from "lucide-react";
import React from "react";

interface CardProps {
  label: string;
  totalNumber: number;
}

const DashboardCard = ({ label, totalNumber }: CardProps) => {
  return (
    <div className="border w-64 p-2.5 rounded-lg m-1.5">
      <div className="flex flex-row">
        <div>
          <div className="flex flex-row items-center space-x-2">
            <h4 className="font-medium text-lg">{label}</h4>
            <p className="py-0.5 bg-[#AFFF5E] text-[#64AE1A] bg-opacity-10  text-xs px-3">+20</p>
            <Info className="w-3 h-3 text-gray-500" />
          </div>

          <p className="text-xs text-slate-500">New students added</p>
        </div>
      </div>
      <h4 className="font-bold text-5xl">350</h4>
      <div className="flex flex-row items-center mt-4">
        <p className="bg-lime-700 bg-opacity-10 text-lime-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
          Male <span>57.14%</span>
        </p>
        <p className="bg-lime-700 bg-opacity-10 text-lime-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
          Female <span>57.14%</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
