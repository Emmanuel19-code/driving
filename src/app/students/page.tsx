"use client";
import React from "react";
import StudentOverviewHeader from "./StudentOverviewHeader";
import { useAppSelector } from "../redux";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "Student Id", width: 150 },
  { field: "name", headerName: "Student Name", width: 200 },
 
  {
    field: "stockQuantity",
    headerName: "Registered Service",
    width: 150,
    valueGetter: (value, row) => (row.rating ? row.stockQuantity : "N/A"),
  },
  {
    field: "totalSold",
    headerName: "Date Joinded",
    width: 150,
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "dateCompleted",
    headerName: "Date Completed",
    width: 150,
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
];

const StudentPage = () => {
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
          <h4 className="text-2xl font-bold">Students</h4>
          <div>
            <button className="w-32 m-1 text-sm text-[#302394] border-[#302394] rounded-md cursor-pointer py-2 border">
              Class to Practicals
            </button>
            <button
              className="w-32 bg-[#302394] text-white m-1 text-sm rounded-md cursor-pointer py-2 border"
              onClick={() => router.push("/students/registerStudent")}
            >
              Add Student
            </button>
          </div>
        </div>
        {/*Student Header */}
        <StudentOverviewHeader />
        {/*Student display */}

        <DataGrid
          columns={columns}
          className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        />
      </div>
    </div>
  );
};

export default StudentPage;
