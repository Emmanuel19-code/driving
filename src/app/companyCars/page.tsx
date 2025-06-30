"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useGetAllCarDataQuery, useUpdateCarDataMutation } from "@/state/api";
import { Plus } from "lucide-react";

const CompanyCarPage = () => {
  const router = useRouter();
  const { data: cars = [], isLoading, isError } = useGetAllCarDataQuery();
  const [updateCar, { isLoading: isUpdating }] = useUpdateCarDataMutation();
  const [editingCar, setEditingCar] = useState<any>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleEditClick = (car: any) => {
    setEditingCar({ ...car });
    setOpenEditDialog(true);
  };

  const handleChange = (field: string, value: string) => {
    setEditingCar((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await updateCar(editingCar).unwrap();
      setOpenEditDialog(false);
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "carModel", headerName: "Model", width: 150 },
    { field: "carColour", headerName: "Colour", width: 130 },
    { field: "carRegistrationNumber", headerName: "Reg. Number", width: 180 },
    { field: "carTransmissionType", headerName: "Transmission", width: 160 },
    { field: "carRoadWorthyExpiry", headerName: "Roadworthy Expiry", width: 180 },
    { field: "carInsuaranceExpiry", headerName: "Insurance Expiry", width: 180 },
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
          {/* Header with Register Car Button */}
          <div className="flex items-center justify-between">
            <h4 className="text-3xl font-medium">Company Cars</h4>
            <Button
              className="w-48 flex items-center justify-center bg-[#302394] text-white text-sm rounded-md py-2"
              onClick={() => router.push("/companyCars/registerCar")}
              variant="contained"
              sx={{ backgroundColor: "#302394", textTransform: "none" }}
            >
              <Plus className="w-5 mr-1" />
              Register Car
            </Button>
          </div>

          {/* Table */}
          <div className="mt-6" style={{ height: 420, width: "100%" }}>
            {isLoading ? (
              <div className="flex justify-center py-6">
                <CircularProgress />
              </div>
            ) : isError ? (
              <div className="text-red-500 text-center">Failed to fetch cars</div>
            ) : (
              <DataGrid
                rows={cars}
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
        <DialogTitle>Edit Car</DialogTitle>
        <DialogContent>
          <Box className="flex flex-col gap-4 mt-1">
            <TextField
              label="Colour"
              variant="outlined"
              value={editingCar?.carColour || ""}
              onChange={(e) => handleChange("carColour", e.target.value)}
              fullWidth
              size="small"
            />
            <TextField
              label="Roadworthy Expiry"
              variant="outlined"
              value={editingCar?.carRoadWorthyExpiry || ""}
              onChange={(e) => handleChange("carRoadWorthyExpiry", e.target.value)}
              fullWidth
              size="small"
              placeholder="e.g. 20th September 2025"
            />
            <TextField
              label="Insurance Expiry"
              variant="outlined"
              value={editingCar?.carInsuaranceExpiry || ""}
              onChange={(e) => handleChange("carInsuaranceExpiry", e.target.value)}
              fullWidth
              size="small"
              placeholder="e.g. 20"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave} disabled={isUpdating}>
            {isUpdating ? "Saving..." : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CompanyCarPage;
