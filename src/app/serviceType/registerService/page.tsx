"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { AddServiceData } from "@/interfaces/service";
import { useAddServiceMutation } from "@/state/api";
import { useRouter } from "next/navigation";

const RegisterServicePage = () => {
  const [formData, setFormData] = useState<AddServiceData>({
    serviceType: "",
    serviceDescription: "",
    fee: "",
    totalDuration: "",
    noOfDaysInClass: "",
    noOfPracticalHours: 0,
    noOfTimesWeekly: 0,
    allowedDays: "",
  });
  const router = useRouter()
  const [addService] = useAddServiceMutation();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addService(formData).unwrap();
      setSnackbar({
        open: true,
        message: "Service registered successfully.",
        severity: "success",
      });
      setFormData({
        serviceType: "",
        serviceDescription: "",
        fee: "",
        totalDuration: "",
        noOfDaysInClass: "",
        noOfPracticalHours: 0,
        noOfTimesWeekly: 0,
        allowedDays: "",
      });
    } catch (error: any) {
      setSnackbar({
        open: true,
        message:
          error?.data?.message ||
          "An error occurred while registering the service.",
        severity: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        mt: 2,
        px: { xs: 2, md: 8 },
        pb: 4,
        maxHeight: "90vh",
        overflowY: "auto",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          borderRadius: 1,
          p: 3,
          backgroundColor: "#f9f9f9",
        }}
      >
         <Button
      variant="outlined"
      size="small"
      onClick={() => router.push("/serviceType")}
      sx={{ mb: 2, borderColor: "#302394", color: "#302394", textTransform: "none" }}
    >
      ← Back to Services
    </Button>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          Register New Service
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Service Type"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Service Description"
                name="serviceDescription"
                value={formData.serviceDescription}
                onChange={handleChange}
                fullWidth
                size="small"
                multiline
                rows={3}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Fee (GHS)"
                name="fee"
                type="text"
                value={formData.fee}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Total Duration"
                name="totalDuration"
                value={formData.totalDuration}
                onChange={handleChange}
                fullWidth
                size="small"
                placeholder="e.g. 3 months"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Class Duration"
                name="noOfDaysInClass"
                value={formData.noOfDaysInClass}
                onChange={handleChange}
                fullWidth
                size="small"
                placeholder="e.g. 2 weeks"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Practical Hours"
                name="noOfPracticalHours"
                type="number"
                value={formData.noOfPracticalHours}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="No. of Times Weekly"
                name="noOfTimesWeekly"
                type="number"
                value={formData.noOfTimesWeekly}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                select
                label="Allowed Days"
                name="allowedDays"
                value={formData.allowedDays}
                onChange={handleChange}
                fullWidth
                size="small"
                SelectProps={{
                  native: true,
                }}
              >
                <option value=""> </option>
                <option value="Mon - Fri.">Mon - Fri</option>
                <option value="Saturdays Only">Saturdays Only</option>
              </TextField>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#302394",
                  textTransform: "none",
                  px: 4,
                  "&:hover": {
                    backgroundColor: "#251a79",
                  },
                }}
              >
                Save Service
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegisterServicePage;
