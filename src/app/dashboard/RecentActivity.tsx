import { UserCircle } from 'lucide-react';
import React from 'react'

const RecentActivity = () => {
  return (
    <div className="p-2 bg-[#302394] rounded m-2 h-48 border w-72">
      <h4 className="text-lg text-white ">Recent Activity</h4>
      <hr className="bg-gray-500" />
      <div className="mt-2 ">
        <div className="flex flex-row m-1 items-center justify-between">
          <div className="flex flex-row items-center">
            <UserCircle className="text-white" />
            <p className="ml-2 text-sm text-white flex flex-wrap">
              Practicals Ended For Mee
            </p>
          </div>

          <p className="text-xs text-gray-400">2min ago</p>
        </div>
        <div className="flex flex-row m-1 items-center justify-between">
          <div className="flex flex-row items-center">
            <UserCircle className="text-white" />
            <p className="ml-2 text-sm text-white flex flex-wrap">
              Practicals Ended For Mee
            </p>
          </div>

          <p className="text-xs text-gray-400">2min ago</p>
        </div>
        <div className="flex flex-row m-1 items-center justify-between">
          <div className="flex flex-row items-center">
            <UserCircle className="text-white" />
            <p className="ml-2 text-sm text-white flex flex-wrap">
              Practicals Ended For Mee
            </p>
          </div>

          <p className="text-xs text-gray-400">2min ago</p>
        </div>
        <div className="flex flex-row m-1 items-center justify-between">
          <div className="flex flex-row items-center">
            <UserCircle className="text-white" />
            <p className="ml-2 text-sm text-white flex flex-wrap">
              Practicals Ended For Mee
            </p>
          </div>

          <p className="text-xs text-gray-400">2min ago</p>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity