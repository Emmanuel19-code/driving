import React from "react";

const ServiceTable = () => {
  return (
    <div className="relative overflow-x-auto h-96 scrollbar-hide mt-2">
      <table className="w-full text-sm  text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Service Type
            </th>
            <th scope="col" className="px-6 py-3">
              Tuition Fee
            </th>
            <th scope="col" className="px-6 py-3">
              Duration
            </th>
            <th scope="col" className="px-6 py-3">
              Practical
            </th>
          </tr>
        </thead>
        <tbody>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
