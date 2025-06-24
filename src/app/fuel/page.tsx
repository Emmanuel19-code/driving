"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Eye, Plus } from "lucide-react";
import React, { useState } from "react";
import RecordForm from "./recordForm";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "carNumber", headerName: "Car Number", width: 150 },
  { field: "amount", headerName: "Amount Purchased (₵)", width: 200 },
  { field: "date", headerName: "Date Purchased", width: 200 },
];

// Sample data
const rows = [
  {
    id: 1,
    carNumber: "CAR-2024-001",
    amount: "₵250.00",
    date: "2025-06-22",
  },
  {
    id: 2,
    carNumber: "CAR-2024-002",
    amount: "₵150.00",
    date: "2025-06-20",
  },
];

const FuelPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Fuel Records
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center bg-[#302394] hover:bg-[#1f176e] text-white text-sm px-4 py-2 rounded-md transition duration-150"
          >
            {showForm ? <Eye className="w-5 h-5 mr-2" /> : <Plus className="w-5 h-5 mr-2" />}
            {showForm ? "View Records" : "Record Fuel"}
          </button>
        </div>

        <div className="w-full">
          {showForm ? (
            <div className="bg-gray-50 border rounded-md p-4">
              <RecordForm />
            </div>
          ) : (
            <div style={{ height: 430, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FuelPage;
