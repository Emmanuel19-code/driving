"use client";
import { Plus } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllPaymentsQuery } from "@/state/api";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "studentName", headerName: "Student Name", width: 150 },
  {
    field: "amountPaid",
    headerName: "Amount Paid",
    width: 150
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    width: 150,
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Date",
    width: 180,
    valueGetter: (params) =>
      new Date(params?.row?.createdAt).toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
  },
];


const PaymentPage = () => {
  const router = useRouter();
 const {data:payments,isError,isLoading} = useGetAllPaymentsQuery();
 console.log(payments);
 
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

       

        <div className="h-[550px] w-full">
          <DataGrid
            columns={columns}
            rows={payments?.data ?? []}
            getRowId={(row) => row.paymentId}
            className="bg-white border border-gray-200 text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
