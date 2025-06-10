import React from "react";

const InsuranceRenewal = () => {
  return (
    <div className="p-2 bg-amber-50 rounded-lg border-l-4 border-amber-500">
      <div className="flex justify-between items-start">
        <p className="font-medium text-xs text-amber-800">INSURANCE RENEWAL</p>
        <span className="text-[8px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
          DUE IN 2 WEEKS
        </span>
      </div>
      <p className="text-xs text-gray-600 mt-1">
        Hyundai i20 (TRN-8910) expires 30/08/2023
      </p>
    </div>
  );
};

export default InsuranceRenewal;
