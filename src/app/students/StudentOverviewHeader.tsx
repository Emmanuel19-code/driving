import { Filter, Search } from 'lucide-react'
import React from 'react'

const StudentOverviewHeader = () => {
  return (
    <div className="flex mt-2 flex-row justify-between items-center">
          <div className="flex space-x-4 flex-row items-center">
            <div className="flex items-center cursor-pointer">
              <p className="underline underline-offset-8 flex items-center">
                All Students
                <span className="text-xs px-3 rounded-lg bg-[#D9D9D9] ml-1">
                  300
                </span>
              </p>
            </div>

            <div className="flex flex-row items-center cursor-pointer space-x-1">
              <p>Class</p>
              <span className="text-xs px-3 rounded-lg bg-[#D9D9D9]">300</span>
            </div>
            <div className="flex flex-row items-center cursor-pointer space-x-1">
              <p>Practicals</p>
              <span className="text-xs px-3 rounded-lg bg-[#D9D9D9]">300</span>
            </div>
            <div className="flex flex-row cursor-pointer items-center space-x-1">
              <p>Past Students</p>
              <span className="text-xs px-3 rounded-lg bg-[#D9D9D9]">300</span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="flex space-x-1 flex-row border px-4 py-1 rounded-md border-black items-center">
              <Filter className="w-4 " />
              <p>Filters</p>
            </div>
            <div className="flex space-x-1 flex-row border px-4 py-1 rounded-md border-black items-center">
              <Search className="w-4 " />
              <p>Search</p>
            </div>
          </div>
        </div>
  )
}

export default StudentOverviewHeader