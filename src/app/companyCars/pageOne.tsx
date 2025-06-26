"use client";

import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  TablePagination,
  Menu,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../redux";
import { useGetAllCarDataQuery } from "@/state/api";

const CompanyCarPage = () => {
  const router = useRouter();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const { data: cars, isError, isLoading } = useGetAllCarDataQuery();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editAnchorEl, setEditAnchorEl] = useState<null | HTMLElement>(null);
  const [editingCar, setEditingCar] = useState<any>(null);
  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditClick = (event: React.MouseEvent<HTMLElement>, car: any) => {
    setEditingCar({
      id: car.id,
      carColour: car.carColour || "",
      carRoadWorthyExpiry: car.carRoadWorthyExpiry || "",
      carInsuaranceExpiry: car.carInsuaranceExpiry || "",
    });
    setEditAnchorEl(event.currentTarget);
  };

  const handleEditFieldChange = (field: string, value: string) => {
    setEditingCar((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditSave = () => {
    console.log("Updated car fields:", editingCar);
    // TODO: Trigger update mutation here
    setEditAnchorEl(null);
  };

  return (
    <Box className={`mt-4 mr-4 ml-3`}>
      <Paper elevation={3} className="p-6">
        <Box className="flex justify-between items-center mb-4">
          <Typography variant="h5" fontWeight={600}>
            Company Cars
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#302394", textTransform: "none" }}
            onClick={() => router.push("/companyCars/registerCar")}
          >
            Register Car
          </Button>
        </Box>

        {isLoading ? (
          <Box className="flex justify-center py-8">
            <CircularProgress />
          </Box>
        ) : isError ? (
          <Typography color="error">Failed to load cars</Typography>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#302394" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Model</TableCell>
                    <TableCell sx={{ color: "white" }}>Colour</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      Registration Number
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>Transmission</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      Roadworthy Expiry
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>
                      Insurance Expiry
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cars &&
                    cars
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((car: any) => (
                        <TableRow key={car.id} hover>
                          <TableCell>{car.carModel}</TableCell>
                          <TableCell>{car.carColour}</TableCell>
                          <TableCell>{car.carRegistrationNumber}</TableCell>
                          <TableCell>{car.carTransmissionType}</TableCell>
                          <TableCell>{car.carRoadWorthyExpiry}</TableCell>
                          <TableCell>{car.carInsuaranceExpiry}</TableCell>
                          <TableCell align="right">
                            <Button
                              size="small"
                              variant="contained"
                              color="secondary"
                              onClick={(e) => handleEditClick(e, car)}
                            >
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              component="div"
              count={cars?.length || 0}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </>
        )}
      </Paper>

      {/* Inline Edit Menu */}
      <Menu
        anchorEl={editAnchorEl}
        open={Boolean(editAnchorEl)}
        onClose={() => setEditAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {editingCar && (
          <Box className="p-4 flex flex-col gap-3 min-w-[250px]">
            <TextField
              label="Car Colour"
              name="carColour"
              type="text"
              value={editingCar.carColour}
              onChange={(e) =>
                handleEditFieldChange("carColour", e.target.value)
              }
              fullWidth
              size="small"
            />
            <TextField
              label="Roadworthy Expiry"
              name="carRoadWorthyExpiry"
              value={editingCar.carRoadWorthyExpiry}
              onChange={(e) =>
                handleEditFieldChange("carRoadWorthyExpiry", e.target.value)
              }
              fullWidth
              size="small"
              placeholder="e.g. 2025-08-12"
            />
            <TextField
              label="Insurance Expiry"
              name="carInsuaranceExpiry"
              value={editingCar.carInsuaranceExpiry}
              onChange={(e) =>
                handleEditFieldChange("carInsuaranceExpiry", e.target.value)
              }
              fullWidth
              size="small"
              placeholder="e.g. 2025-10-01"
            />
            <Box className="flex justify-between">
              <Button
                size="small"
                color="inherit"
                onClick={() => setEditAnchorEl(null)}
              >
                Cancel
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleEditSave}
              >
                Save
              </Button>
            </Box>
          </Box>
        )}
      </Menu>
    </Box>
  );
};

export default CompanyCarPage;
