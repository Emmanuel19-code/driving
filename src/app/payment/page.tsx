"use client";
import { Plus } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "Student Id", width: 150 },
  { field: "name", headerName: "Student Name", width: 200 },
  {
    field: "price",
    headerName: "Amount",
    width: 150,
    type: "number",
    valueGetter: (_, row) => `$${row.price}`,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    width: 150,
    valueGetter: (_, row) => row.paymentMethod || "N/A",
  },
  {
    field: "description",
    headerName: "Description/Reason",
    width: 200,
    valueGetter: (_, row) => row.description || "N/A",
  },
  {
    field: "recordedBy",
    headerName: "Recorded By",
    width: 180,
    valueGetter: (_, row) => row.recordedBy || "N/A",
  },
];

const PaymentPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col p-6  mr-6 mt-4">
      <div className="flex flex-col gap-4 bg-white rounded-xl shadow p-6">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Payments Records</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm border border-black rounded-md">
              Filters
            </button>
            <button className="px-4 py-2 text-sm border border-black rounded-md">
              Search
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-[#302394] rounded-md"
              onClick={() => router.push("/recordpayment")}
            >
              <Plus className="w-4 h-4" />
              Record Payment
            </button>
          </div>
        </div>

        {/* Optional: info cards can be added here */}

        <div className="h-[550px] w-full">
          <DataGrid
            columns={columns}
            rows={[]} // Replace with your data
            className="bg-white border border-gray-200 text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
