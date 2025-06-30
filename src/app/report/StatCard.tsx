"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon?: JSX.Element;
  extraInfo?: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, extraInfo }) => {
  return (
    <div className="bg-white shadow rounded cursor-pointer p-4 flex items-center gap-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-xl font-semibold">{value}</p>
        {extraInfo && <p className="text-xs text-gray-400">{extraInfo}</p>}
      </div>
    </div>
  );
};

export default StatCard;