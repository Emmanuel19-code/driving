import React from "react";

const DeductionManager = () => {
  const deductions = [
    {
      id: 1,
      name: "Federal Tax",
      type: "Percentage",
      amount: "15%",
      appliesTo: "All",
    },
    {
      id: 2,
      name: "State Tax",
      type: "Percentage",
      amount: "5%",
      appliesTo: "All",
    },
    {
      id: 3,
      name: "Health Insurance",
      type: "Fixed",
      amount: "$120",
      appliesTo: "Full-time",
    },
    {
      id: 4,
      name: "Uniform Fee",
      type: "Fixed",
      amount: "$50",
      appliesTo: "Instructors",
    },
  ];

  return (
    <div className="p-2">
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Deductions</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            + Add Deduction
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Deduction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Applies To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deductions.map((deduction) => (
                <tr key={deduction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {deduction.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {deduction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {deduction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {deduction.appliesTo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeductionManager;
