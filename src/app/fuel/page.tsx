"use client";
import { Eye, Plus } from "lucide-react";
import React, { useMemo, useState } from "react";
import RecordForm from "./recordForm";
import { useGetFuelRecordsQuery } from "@/state/api";

const FuelPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const queryParams = useMemo(
    () => ({
      startDate: startDate || undefined,
      endDate: endDate || undefined,
    }),
    [startDate, endDate]
  );

  const {
    data: fuelRecords,
    isLoading,
    isError,
  } = useGetFuelRecordsQuery(queryParams);

  return (
    <div className="p-4 bg-gray-100 ">
      <div className="bg-white rounded shadow-md p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Fuel Records
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center gap-2 bg-[#302394] hover:bg-[#1f176e] text-white text-sm px-4 py-2 rounded-md transition duration-150"
          >
            {showForm ? (
              <Eye className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
            <span className="whitespace-nowrap">
              {showForm ? "View Records" : "Record Fuel"}
            </span>
          </button>
        </div>

        {/* Date Filters */}
        {!showForm && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Start Date</label>
              <input
                type="date"
                className="border px-3 py-2 rounded-md text-sm"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">End Date</label>
              <input
                type="date"
                className="border px-3 py-2 rounded-md text-sm"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Table or Form */}
        <div className="w-full">
          {showForm ? (
            <div className="bg-gray-50 border rounded-md p-4 sm:p-6">
              <RecordForm />
            </div>
          ) : isLoading ? (
            <div className="text-center py-10 text-gray-500">
              Loading fuel records...
            </div>
          ) : isError ? (
            <div className="text-center py-10 text-red-500">
              Failed to load records.
            </div>
          ) : (
            <div className="w-full overflow-x-auto h-80 scrollbar-hide">
              <table className="min-w-full text-sm divide-y divide-gray-200">
                <thead className="bg-gray-50 text-left whitespace-nowrap">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-600">#</th>
                    <th className="px-4 py-3 font-semibold text-gray-600">
                      Car Number
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-600">
                      Refilled By
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-600">
                      Amount Loaded (₵)
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-600">
                      Litres
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-600">
                      Date Purchased
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {fuelRecords?.data?.map((record, index) => (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">
                        {record.carRegistrationNumber}
                      </td>
                      <td className="px-4 py-3">{record.refilledBy}</td>
                      <td className="px-4 py-3">₵{record.amountloaded}</td>
                      <td className="px-4 py-3">{record.litres}</td>
                      <td className="px-4 py-3">
                        {new Date(record.createdAt).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {fuelRecords?.data?.length === 0 && (
                <div className="text-center text-gray-500 py-6">
                  No fuel records found.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FuelPage;
