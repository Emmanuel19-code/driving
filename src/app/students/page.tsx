"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useGetStudentsQuery,
  useMarkClassStartedMutation,
} from "@/state/api";
import StudentOverviewHeader from "./StudentOverviewHeader";
import { Plus } from "lucide-react";
import { Button, CircularProgress } from "@mui/material";

const StudentPage = () => {
  const { data: students = [], isError, isLoading } = useGetStudentsQuery();
  const [markClassStarted, { isLoading: isMarking }] =
    useMarkClassStartedMutation();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleChildData = (search: string) => {
    setSearchValue(search);
  };

  const handleMarkClassStarted = async (studentId: string) => {
    try {
      await markClassStarted(studentId).unwrap();
    } catch (err) {
      console.error("Error marking class started:", err);
    }
  };

  const columns: GridColDef[] = [
    { field: "studentId", headerName: "Student Id", width: 120 },
    { field: "firstName", headerName: "First Name", width: 120 },
    { field: "lastName", headerName: "Last Name", width: 120 },
    { field: "otherName", headerName: "Other Name", width: 120 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "phoneOne", headerName: "Phone One", width: 130 },
    { field: "phoneTwo", headerName: "Phone Two", width: 130 },
    {
      field: "amountOwing",
      headerName: "Amount Owing",
      width: 130,
      
    },
    {
      field: "amountPaid",
      headerName: "Amount Paid",
      width: 130,
      valueGetter: (params) => params.row.amountPaid || "N/A",
    },
    {
      field: "serviceType",
      headerName: "Service Type",
      width: 180,
      valueGetter: (params) =>
        params.row.chosenServices?.[0]?.serviceInfo?.serviceType || "N/A",
    },
    {
      field: "startedClass",
      headerName: "Class Status",
      width: 150,
      valueGetter: (params) =>
        params.row.chosenServices?.[0]?.startedClass || "not_started",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: (params) => {
        const student = params.row;
        const started =
          student.chosenServices?.[0]?.startedClass === "started";

        return started ? (
          <span className="text-green-600 font-medium">Class Started</span>
        ) : (
          <Button
            variant="contained"
            size="small"
            disabled={isMarking}
            onClick={() => handleMarkClassStarted(student.studentId)}
          >
            {isMarking ? "Marking..." : "Mark Class Started"}
          </Button>
        );
      },
    },
  ];

  return (
    <div className="w-full px-2 sm:px-4">
      <div className="mt-2">
        <div className="mt-4 bg-white rounded-md p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <h4 className="text-2xl font-bold">Students</h4>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 gap-2 sm:gap-0">
              <button className="w-full sm:w-40 text-sm font-medium border-[#302394] text-[#302394] rounded-md py-2 border-2">
                Class to Practicals
              </button>
              <button
                className="w-full sm:w-48 flex items-center justify-center bg-[#302394] text-white text-sm rounded-md py-2"
                onClick={() => router.push("/students/registerStudent")}
              >
                <Plus className="w-5 mr-1" />
                Add Student
              </button>
            </div>
          </div>

          <StudentOverviewHeader onSendData={handleChildData} />

          <div className="mt-6 overflow-x-auto">
            <div style={{ minWidth: "1000px", height: 450 }}>
              {isLoading ? (
                <div className="flex justify-center py-6">
                  <CircularProgress />
                </div>
              ) : isError ? (
                <div className="text-red-500 text-center">
                  Failed to fetch students
                </div>
              ) : (
                <DataGrid
                  columns={columns}
                  rows={students}
                  className="bg-white shadow rounded-lg border border-gray-200 !text-gray-700"
                  pageSizeOptions={[5]}
                  getRowId={(row) => row.studentId}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
