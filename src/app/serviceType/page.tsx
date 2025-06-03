"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ServiceTable from "./ServiceTable";

const ServiceType = () => {
  const router = useRouter();
  return (
    <div className="max-w-full ">
      <div className="mt-2 flex flex-1">
        <div className="mt-4 ml-2 mr-4 w-full bg-white h-full rounded-md p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold">Services</h4>
            <div className="flex items-center space-x-2">
              <button
                className="w-32 bg-[#302394] text-white m-1 text-sm rounded-md cursor-pointer py-2 border"
                onClick={() => router.push("/students/registerStudent")}
              >
                Register Service
              </button>
            </div>
          </div>
          <ServiceTable />
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
