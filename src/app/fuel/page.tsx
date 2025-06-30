"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  CircularProgress,
} from "@mui/material";
import { Plus } from "lucide-react";
import { useGetFuelRecordsQuery, useUpdateFuelRecordMutation } from "@/state/api";
import RecordForm from "./recordForm"; // Your custom record form component

const FuelPage = () => {
  const { data: fuelRecords = { data: [] }, isLoading, isError } = useGetFuelRecordsQuery();
  const [updateFuelRecord, { isLoading: isUpdating }] = useUpdateFuelRecordMutation();
 console.log(fuelRecords)
  const [showForm, setShowForm] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingRecord, setEditingRecord] = useState<any>(null);

  const handleEditClick = (record: any) => {
    setEditingRecord({ ...record });
    setOpenEditDialog(true);
  };

  const handleChange = (field: string, value: string) => {
    setEditingRecord((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await updateFuelRecord(editingRecord).unwrap();
      setOpenEditDialog(false);
    } catch (error) {
      console.error("Failed to update record:", error);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "carRegistrationNumber",
      headerName: "Car Number",
      width: 180,
    },
    {
      field: "refilledBy",
      headerName: "Refilled By",
      width: 160,
    },
    {
      field: "amountloaded",
      headerName: "Amount Loaded (₵)",
      width: 180,
    },
    {
      field: "litres",
      headerName: "Litres",
      width: 120,
    },
    {
  field: "createdAt",
  headerName: "Date Purchased",
  width: 200,
  valueGetter: (params) =>
    params?.row?.createdAt
      ? new Date(params.row.createdAt).toLocaleString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "N/A",
}
,
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleEditClick(params.row)}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div className="max-w-full">
      <div className="mt-2 flex flex-1">
        <div className="mt-4 ml-2 mr-4 bg-white rounded-md p-4 w-full">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h4 className="text-3xl font-medium">Fuel Records</h4>
            <Button
              className="w-48 flex items-center justify-center bg-[#302394] text-white text-sm rounded-md py-2"
              onClick={() => setShowForm((prev) => !prev)}
              variant="contained"
              sx={{ backgroundColor: "#302394", textTransform: "none" }}
            >
              <Plus className="w-5 mr-1" />
              {showForm ? "Hide Form" : "Record Fuel"}
            </Button>
          </div>

          {/* Record Form */}
          {showForm && (
            <div className="mt-6 bg-gray-50 border rounded-md p-4">
              <RecordForm />
            </div>
          )}

          {/* Table */}
          <div className="mt-6" style={{ height: 420, width: "100%" }}>
            {isLoading ? (
              <div className="flex justify-center py-6">
                <CircularProgress />
              </div>
            ) : isError ? (
              <div className="text-red-500 text-center">Failed to fetch records</div>
            ) : (
              <DataGrid
                rows={fuelRecords.data}
                columns={columns}
                pageSizeOptions={[5]}
                className="bg-white shadow rounded-lg border border-gray-200 !text-gray-700"
              />
            )}
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog
        open={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Edit Fuel Record</DialogTitle>
        <DialogContent>
          <Box className="flex flex-col gap-4 mt-1">
            <TextField
              label="Amount Loaded"
              variant="outlined"
              value={editingRecord?.amountloaded || ""}
              onChange={(e) => handleChange("amountloaded", e.target.value)}
              fullWidth
              size="small"
            />
            <TextField
              label="Litres"
              variant="outlined"
              value={editingRecord?.litres || ""}
              onChange={(e) => handleChange("litres", e.target.value)}
              fullWidth
              size="small"
            />
            <TextField
              label="Refilled By"
              variant="outlined"
              value={editingRecord?.refilledBy || ""}
              onChange={(e) => handleChange("refilledBy", e.target.value)}
              fullWidth
              size="small"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={isUpdating}
          >
            {isUpdating ? "Saving..." : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FuelPage;
