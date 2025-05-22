"use client";
import React from 'react'
import PaginationControl from '../students/PaginationControl'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation';

const ExpensePage = () => {
  const router = useRouter();
  return (
   <div className="max-w-full ">
      <div className="mt-4 ml-72 mr-4   bg-white rounded-md p-4">
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-3xl font-medium">Expense Records</h4>
          <div className="flex flex-row items-center">
            <button className="w-24 m-1 text-sm font-medium  border-black rounded-md cursor-pointer py-2 border-2">
              Filters
            </button>
            <button className="w-24 m-1 text-sm font-medium  border-black  rounded-md cursor-pointer py-2 border-2">
              Search
            </button>
            <button className="w-36 justify-center flex flex-row items-center bg-[#302394] text-white m-1 text-sm rounded-md cursor-pointer py-2 border" onClick={()=>router.push("/recordpayment")}>
              <Plus className="w-5" />
              Record Expense
            </button>
          </div>
        </div>
        {/*Info Cards */}
        <div className="flex flex-row justify-between">
          {/*<InfoCard />*/}
          {/*<InfoCard />*/}
          {/*<InfoCard />*/}
        </div>

        {/*main table */}
        <div className="relative overflow-x-auto mt-3 h-96 scrollbar-hide 2xl:h-[700px]  mb-2 rounded-lg">
          <table className="w-full rounded-lg text-sm h-96 text-left rtl:text-right scrollbar-hide overflow-y-scroll bg-white border text-gray-500 ">
            <thead className="text-xs  text-white  bg-[#302394] sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Student Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Student ID
                </th>
                <th scope="col" className="px-6 py-4">
                  Amount
                </th>
                <th scope="col" className="px-6 py-4">
                  Payment Method
                </th>
                <th scope="col" className="px-6 py-4">
                  Description/Reason
                </th>
                <th scope="col" className="px-6 py-4">
                  Recorded By
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right hover:underline underline-black hover:text-black">
                  view Profile
                </td>
              </tr>
              <tr className="bg-white border-b  border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
                  Apple MacBook Pro 17
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
              <tr className="bg-white border-b  border-gray-200 ">
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
        <PaginationControl />
      </div>
    </div>
  )
}

export default ExpensePage
