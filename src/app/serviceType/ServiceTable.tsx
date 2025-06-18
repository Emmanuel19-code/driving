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
} from "@mui/material";
import { useGetAllServicesQuery } from "@/state/api";

const ServiceTable = () => {
  const { data: services, isError, isLoading } = useGetAllServicesQuery();
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography color="error">Failed to load services</Typography>;

  const handleEditClick = (serviceId: string, service: any) => {
    setExpandedRowId(expandedRowId === serviceId ? null : serviceId);
    setFormData(service); // preload existing values
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    console.log("Saving changes:", formData);
    setExpandedRowId(null);
    // Connect API mutation here
  };

  return (
    <Box sx={{ width: "100%", overflowX: "auto", mt: 2 }}>
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
            {services?.map((service) => (
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
                      onClick={() => handleEditClick(service.serviceId, service)}
                    >
                      {expandedRowId === service.serviceId ? "Cancel" : "Edit"}
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={10} sx={{ p: 0 }}>
                    <Collapse in={expandedRowId === service.serviceId} timeout="auto" unmountOnExit>
                      <Box
                        sx={{
                          p: 2,
                          display: "grid",
                          gap: 2,
                          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                          <Button variant="contained" size="small" onClick={handleSave}>
                            Save Changes
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
    </Box>
  );
};

export default ServiceTable;
