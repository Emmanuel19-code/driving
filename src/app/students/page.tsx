"use client";
import React, { useState } from "react";
import StudentOverviewHeader from "./StudentOverviewHeader";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetStudentsQuery } from "@/state/api";



const columns: GridColDef[] = [
  { field: "studentId", headerName: "Student Id", width: 100 },
  { field: "firstName", headerName: "First Name", width: 100 },
  { field: "lastName", headerName: "First Name", width: 100 },
  { field: "otherName", headerName: "First Name", width: 100 },
  { field: "email", headerName: "Email", width: 100 },
  { field: "gender", headerName: "Gender", width: 100 },
  {
    field: "phoneOne",
    headerName: "Phone One",
    width: 100,
  },
  {
    field: "phoneTwo",
    headerName: "Phone Two",
    width: 100,
  },
  {
    field: "serviceType",
    headerName: "Service Registered",
    width: 100,
    valueGetter: (value, row) => (row.serviceType ? row.serviceType : "N/A"),
  },
  {
    field: "dateCompleted",
    headerName: "Date Completed",
    width: 100,
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
];

const StudentPage = () => {
  const { data: students, isError, isLoading } = useGetStudentsQuery();
  const [searchValue,setSearchValue] = useState("");
  const router = useRouter();
   const handleChildData = (search:string) => {
    setSearchValue(search);
  };
  return (
    <div className="max-w-full ">
      <div className="mt-2 flex flex-1">
        <div className="mt-4 ml-2 mr-4 bg-white h-full rounded-md p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold">Students</h4>
            <div className="flex items-center space-x-2">
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
          {/* Student Header */}
          <StudentOverviewHeader onSendData={handleChildData}/>
          {/* Student display */}
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              columns={columns}
              //getRowId={(row)=>row.}
              rows={students}
              className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;


