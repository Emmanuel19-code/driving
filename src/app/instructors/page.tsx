"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";

// Sample data
const initialRows = [
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
  const [rows, setRows] = useState(initialRows);
  const [editingRow, setEditingRow] = useState<any>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleEditClick = (row: any) => {
    setEditingRow({ ...row });
    setOpenEditDialog(true);
  };

  const handleFieldChange = (field: string, value: string) => {
    setEditingRow((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === editingRow.id ? editingRow : row))
    );
    setOpenEditDialog(false);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Staff ID", width: 150 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "gender", headerName: "Gender", width: 150 },
    { field: "phone", headerName: "Phone Number", width: 180 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 150 },
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
          <div className="mt-6" style={{ height: 420, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]} />
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
        <DialogTitle>Edit Staff Member</DialogTitle>
        <DialogContent>
          <Box className="flex flex-col gap-4 mt-1">
            <TextField
              label="Name"
              value={editingRow?.name || ""}
              onChange={(e) => handleFieldChange("name", e.target.value)}
              fullWidth
              size="small"
            />
            <TextField
              label="Phone"
              value={editingRow?.phone || ""}
              onChange={(e) => handleFieldChange("phone", e.target.value)}
              fullWidth
              size="small"
            />
            <TextField
              label="Email"
              value={editingRow?.email || ""}
              onChange={(e) => handleFieldChange("email", e.target.value)}
              fullWidth
              size="small"
            />
            <TextField
              label="Role"
              value={editingRow?.role || ""}
              onChange={(e) => handleFieldChange("role", e.target.value)}
              fullWidth
              size="small"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InstructorPage;
