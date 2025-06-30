"use client";
import React from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "Expense Id", width: 150 },
  { field: "name", headerName: "Expense Name", width: 200 },
  {
    field: "price",
    headerName: "Amount",
    width: 150,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Payment Method",
    width: 150,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: " Description/Reason",
    width: 150,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.stockQuantity : "N/A"),
  },
  {
    field: "totalSold",
    headerName: "Recorded By",
    width: 150,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
];

const ExpensePage = () => {
  const router = useRouter();
  return (
    <div className="p-4 bg-gray-100 ">
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-3xl font-medium">Expense Records</h4>
          <div className="flex flex-row items-center">
            <button className="w-24 m-1 text-sm font-medium  border-black rounded-md cursor-pointer py-2 border-2">
              Filters
            </button>
            <button className="w-24 m-1 text-sm font-medium  border-black  rounded-md cursor-pointer py-2 border-2">
              Search
            </button>
            <button
              className="w-36 justify-center flex flex-row items-center bg-[#302394] text-white m-1 text-sm rounded-md cursor-pointer py-2 border"
              onClick={() => router.push("/recordexpense")}
            >
              <Plus className="w-5" />
              Record Expense
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="w-full">
          
            <div className="w-full overflow-x-auto">
              <div style={{ minWidth: "100px", height: 430 }}>
                <DataGrid
                 /// rows={fuelRecords?.data || []}
                  columns={columns}
                  pageSizeOptions={[5]}
                  disableRowSelectionOnClick
                />
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};
export default ExpensePage;
