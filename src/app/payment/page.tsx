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

const PaymentPage = () => {
  const router = useRouter();
  return (
    <div className="max-w-full ">
      <div className="mt-4 ml-72 mr-4   bg-white rounded-md p-4">
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-3xl font-medium">Payments Records</h4>
          <div className="flex flex-row items-center">
            <button className="w-24 m-1 text-sm font-medium  border-black rounded-md cursor-pointer py-2 border-2">
              Filters
            </button>
            <button className="w-24 m-1 text-sm font-medium  border-black  rounded-md cursor-pointer py-2 border-2">
              Search
            </button>
            <button
              className="w-36 justify-center flex flex-row items-center bg-[#302394] text-white m-1 text-sm rounded-md cursor-pointer py-2 border"
              onClick={() => router.push("/recordpayment")}
            >
              <Plus className="w-5" />
              Record Payment
            </button>
          </div>
        </div>
        {/*Info Cards */}
        <div className="flex flex-row justify-between">
          {/*<InfoCard />*/}
          {/*<InfoCard />*/}
          {/*<InfoCard />*/}
        </div>

        {/*main table */}
        <DataGrid
          columns={columns}
          className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        />
      </div>
    </div>
  );
};

export default PaymentPage;
