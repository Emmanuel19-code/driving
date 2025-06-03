import { Info } from "lucide-react";
import React from "react";

const ImportantNotice = () => {
  return (
    <div className="w-72 h-48 border p-2 m-2 bg-white">
      <div>
        <div className="flex space-x-1 flex-row items-center">
          <Info />
          <h4>Important Notice</h4>
        </div>
        <hr className="mt-2" />
      </div>
      <div>
        <p className="text-[#302394] hover:text-[#2c284d] hover:font-medium text-end cursor-pointer">
          View All
        </p>
      </div>
    </div>
  );
};

export default ImportantNotice;
