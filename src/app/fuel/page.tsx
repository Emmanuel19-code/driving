"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Eye, Plus } from "lucide-react";
import React, { useState } from "react";
import RecordForm from "./recordForm";

const columns: GridColDef[] = [
  { field: "id", headerName: "Staff ID", width: 150 },
  { field: "gender", headerName: "Car Number", width: 150 },
  { field: "name", headerName: "Amount Purchased", width: 200 },
  { field: "phone", headerName: "Date Purchased", width: 180 },
];

// Sample data
const rows = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    phone: "123-456-7890",
    email: "john@example.com",
    role: "Instructor",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    phone: "987-654-3210",
    email: "jane@example.com",
    role: "Admin",
  },
];

const FuelPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="max-w-full  ">
      <div className="mt-2  flex flex-1  ">
        <div className="mt-4 ml-2 mr-4 bg-white flex-1 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-3xl font-medium">Fuel Records</h4>
            <div className="flex items-center space-x-2">
              <button
                className="w-48 flex items-center justify-center bg-[#302394] text-white text-sm rounded-md py-2 border"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm}
                {
                  showForm? <Eye className="w-5 mr-1"/> :<Plus className="w-5 mr-1" />
                }
                
                {showForm ? "View Records" :  "Record Fuel"}
              </button>
            </div>
          </div>

          {/* Main Table */}
          <div className="mt-6" style={{ height: 400, width: "100%" }}>
            {showForm ? (
              <RecordForm />
            ) : (
              <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelPage;
