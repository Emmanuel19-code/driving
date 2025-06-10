"use client";
import { DollarSign, Calendar, User, Download } from "lucide-react";

const PayrollDashboard = () => {
  return (
    <div className="p-2">
      <div className="space-y-6">
        {/* Payroll Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Current Payroll</p>
                <p className="text-2xl font-bold mt-1">$24,850</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">For 15 employees</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Pay Period</p>
                <p className="text-2xl font-bold mt-1">15 Aug - 30 Aug</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Next payroll in 3 days</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Instructors</p>
                <p className="text-2xl font-bold mt-1">12</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <User className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">3 on leave</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Admin Staff</p>
                <p className="text-2xl font-bold mt-1">3</p>
              </div>
              <div className="p-2 bg-amber-100 rounded-full">
                <User className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">All active</p>
          </div>
        </div>

        {/* Payroll Processing Section */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Current Payroll Run</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Download className="w-4 h-4" />
              Export Payroll
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Gross Pay
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Deductions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Net Pay
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Sample row - Instructor */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium">John Smith</p>
                        <p className="text-xs text-gray-500">ID: DS-001</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Instructor
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">86.5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    $25/hr
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    $2,162.50
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                    $325.80
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
                    $1,836.70
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                </tr>

                {/* Sample row - Admin */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs text-gray-500">ID: DS-012</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Admin</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">160</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    $18/hr
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    $2,880.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">
                    $432.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
                    $2,448.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payroll History */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-bold mb-6">Payroll History</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium">Payroll #{item} - August 2023</p>
                  <p className="text-sm text-gray-500">
                    Processed on August 15, 2023
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold">$24,850.00</p>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollDashboard;
