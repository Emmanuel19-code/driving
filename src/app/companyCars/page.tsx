"use client";
import PaginationControl from '@/components/PaginationControl'
import React from 'react'
import { useAppSelector } from '../redux';
import { useRouter } from 'next/navigation';

const CompanyCarPage = () => {
     const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
      );
      const router = useRouter();
  return (
   <div className="max-w-full">
      <div
        className={`mt-4 ${
          isSidebarCollapsed ? "ml-36" : "ml-72"
        }  mr-4 bg-white rounded-md p-4`}
      >
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-2xl font-bold">Company Cars</h4>
          <div>
            
            <button
              className="w-32 bg-[#302394] text-white m-1 text-sm rounded-md cursor-pointer py-2 border"
              onClick={() => router.push("/students/registerStudent")}
            >
              Register Car
            </button>
          </div>
        </div>
        {/*Student Header */}
        
        {/*Student display */}

        <div className="relative overflow-x-auto mt-3 scrollbar-hide h-96 2xl:h-[700px] mb-2 rounded-lg">
          <table className="w-full rounded-lg text-sm h-96 text-left rtl:text-right scrollbar-hide overflow-y-scroll bg-white border text-gray-500 ">
            <thead className="text-xs  text-white  bg-[#302394] sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Car Brand
                </th>
                <th scope="col" className="px-6 py-4">
                  Year of Registration
                </th>

                <th scope="col" className="px-6 py-4">
                  Color
                </th>
                <th scope="col" className="px-6 py-4">
                  Transmission Type
                </th>
                <th scope="col" className="px-6 py-4">
                  Assigned To
                </th>
                <th scope="col" className="px-6 py-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right hover:underline underline-black hover:text-black">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className=" ">
                    view Profile
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/**Pagination Controls */}
        <PaginationControl />
      </div>
    </div>
  )
}

export default CompanyCarPage
