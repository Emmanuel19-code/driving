import React from "react";

const RoadWorthy = () => {
  return (
    <div className="p-2 bg-blue-50 rounded-lg border-l-4 border-blue-500">
      <div className="flex justify-between items-start">
        <p className="font-medium text-xs text-blue-800">ROADWORTHY TEST</p>
        <span className="text-[8px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
          DUE IN 1 MONTH
        </span>
      </div>
      <p className="text-xs text-gray-600 mt-1">
        All training vehicles due for annual inspection
      </p>
    </div>
  );
};

export default RoadWorthy;
