"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Box,
  Button,
  TextField,
  Collapse,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import {
  useGetAllServicesQuery,
  useUpdateServiceMutation,
} from "@/state/api";

// Alert wrapper for Snackbar
const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Define type for a service
interface Service {
  id: number;
  serviceId: string;
  serviceType: string;
  fee: string;
  totalDuration: string;
  noOfDaysInClass: string;
  noOfPracticalHours: number;
  noOfTimesWeekly: number;
  allowedDays: string;
  serviceDescription: string;
  createdAt: string;
  updatedAt: string;
}

const ServiceTable = () => {
  const { data, isError, isLoading, refetch } = useGetAllServicesQuery();
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation();

  const services: Service[] = (data as any)?.data ?? [];

  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Service>>({});

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Typography color="error">Failed to load services</Typography>;

  const handleEditClick = (serviceId: string, service: Service) => {
    setExpandedRowId(expandedRowId === serviceId ? null : serviceId);
    setFormData(service);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!formData.serviceId) return;

    try {
      const response = await updateService(formData).unwrap();
      if (response?.success) {
        setSnackbarMessage("Service updated successfully");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        refetch();
        setExpandedRowId(null);
      } else {
        setSnackbarMessage(response?.error || "Update failed");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error: any) {
      setSnackbarMessage(error?.data?.error || "Something went wrong while updating");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ width: "100%", overflowX: "auto", mt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button variant="outlined" color="primary" onClick={() => refetch()}>
          Refresh Services
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><strong>Service ID</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Fee (₵)</strong></TableCell>
              <TableCell><strong>Duration</strong></TableCell>
              <TableCell><strong>Class Duration</strong></TableCell>
              <TableCell><strong>Practical Hours</strong></TableCell>
              <TableCell><strong>Days/Week</strong></TableCell>
              <TableCell><strong>Allowed Days</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <React.Fragment key={service.serviceId}>
                <TableRow>
                  <TableCell>{service.serviceId}</TableCell>
                  <TableCell>{service.serviceType}</TableCell>
                  <TableCell>₵{Number(service.fee).toLocaleString()}</TableCell>
                  <TableCell>{service.totalDuration}</TableCell>
                  <TableCell>{service.noOfDaysInClass}</TableCell>
                  <TableCell>{service.noOfPracticalHours}</TableCell>
                  <TableCell>{service.noOfTimesWeekly}</TableCell>
                  <TableCell>{service.allowedDays}</TableCell>
                  <TableCell>{service.serviceDescription}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() =>
                        handleEditClick(service.serviceId, service)
                      }
                    >
                      {expandedRowId === service.serviceId ? "Cancel" : "Edit"}
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={10} sx={{ p: 0 }}>
                    <Collapse
                      in={expandedRowId === service.serviceId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box
                        sx={{
                          p: 2,
                          display: "grid",
                          gap: 2,
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        }}
                      >
                        <TextField
                          label="Service Type"
                          name="serviceType"
                          value={formData.serviceType || ""}
                          onChange={handleInputChange}
                          fullWidth
                        />
                        <TextField
                          label="Fee"
                          name="fee"
                          type="number"
                          value={formData.fee || ""}
                          onChange={handleInputChange}
                          fullWidth
                        />
                        <TextField
                          label="Total Duration"
                          name="totalDuration"
                          value={formData.totalDuration || ""}
                          onChange={handleInputChange}
                          fullWidth
                        />
                        <TextField
                          label="Class Duration"
                          name="noOfDaysInClass"
                          value={formData.noOfDaysInClass || ""}
                          onChange={handleInputChange}
                          fullWidth
                        />
                        <TextField
                          label="Practical Hours"
                          name="noOfPracticalHours"
                          type="number"
                          value={formData.noOfPracticalHours || ""}
                          onChange={handleInputChange}
                          fullWidth
                        />
                        <TextField
                          label="Days/Week"
                          name="noOfTimesWeekly"
                          type="number"
                          value={formData.noOfTimesWeekly || ""}
                          onChange={handleInputChange}
                          fullWidth
                        />
                        <TextField
                          label="Allowed Days"
                          name="allowedDays"
                          value={formData.allowedDays || ""}
                          onChange={handleInputChange}
                          fullWidth
                        />
                        <TextField
                          label="Description"
                          name="serviceDescription"
                          value={formData.serviceDescription || ""}
                          onChange={handleInputChange}
                          fullWidth
                          multiline
                          rows={3}
                        />
                        <Box sx={{ gridColumn: "1 / -1", textAlign: "right" }}>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={handleSave}
                            disabled={isUpdating}
                          >
                            {isUpdating ? "Saving..." : "Save Changes"}
                          </Button>
                        </Box>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ServiceTable;
