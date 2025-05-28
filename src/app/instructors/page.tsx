"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Define columns with appropriate fields
const columns: GridColDef[] = [
  { field: "id", headerName: "Staff ID", width: 150 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "gender", headerName: "Gender", width: 150 },
  { field: "phone", headerName: "Phone Number", width: 180 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "role", headerName: "Role", width: 150 },
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

const InstructorPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-full ">
      <div className="mt-2  flex flex-1  ">
        <div className="mt-4 ml-2 mr-4 bg-white  rounded-md p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-3xl font-medium">Instructors/Admins</h4>
            <div className="flex items-center space-x-2">
              <button className="w-24 text-sm font-medium border-black rounded-md py-2 border-2">
                Filters
              </button>
              <button className="w-24 text-sm font-medium border-black rounded-md py-2 border-2">
                Search
              </button>
              <button
                className="w-48 flex items-center justify-center bg-[#302394] text-white text-sm rounded-md py-2 border"
                onClick={() => router.push("/instructors/addStaff")}
              >
                <Plus className="w-5 mr-1" />
                Add Instructor/Admin
              </button>
            </div>
          </div>

          {/* Main Table */}
          <div className="mt-6" style={{ height: 400, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;
