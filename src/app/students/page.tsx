import { Button } from "@/components/ui/button";
import { Pagination, Stack } from "@mui/material";
import { Filter, Search } from "lucide-react";
import React from "react";

const StudentPage = () => {
  return (
    <div className="max-w-full">
      <div className="mt-4 ml-72 mr-4 bg-white rounded-md p-4">
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-2xl font-bold">Students</h4>
          <div>
            <button className="w-32 m-1 text-sm text-[#302394] border-[#302394] rounded-md cursor-pointer py-2 border">
              Class to Practicals
            </button>
            <button className="w-32 bg-[#302394] text-white m-1 text-sm rounded-md cursor-pointer py-2 border">
              Add Student
            </button>
          </div>
        </div>
        <div className="flex mt-2 flex-row justify-between items-center">
          <div className="flex space-x-4 flex-row items-center">
            <div className="flex items-center">
              <p className="underline underline-offset-8 flex items-center">
                All Students
                <span className="text-xs px-3 rounded-lg bg-[#D9D9D9] ml-1">
                  300
                </span>
              </p>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <p>Class</p>
              <span className="text-xs px-3 rounded-lg bg-[#D9D9D9]">300</span>
            </div>
            <div className="flex flex-row items-center space-x-1">
              <p>Practicals</p>
              <span className="text-xs px-3 rounded-lg bg-[#D9D9D9]">300</span>
            </div>
            <div className="flex flex-row items-center space-x-1">
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
        <div className="mt-4 flex flex-row items-center justify-between">
          <div className="flex space-x-2 flex-row items-center">
            <p className="text-sm font-medium">Item per Page</p>

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="border border-black text-black  font-medium rounded text-sm px-5 py-0.5 text-center inline-flex items-center"
              type="button"
            >
              1
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Stack spacing={2}>
             <Pagination count={24}/>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
