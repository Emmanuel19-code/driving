"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { AddCarData } from "@/interfaces/car";
import { useAddCarInSystemMutation } from "@/state/api";

const RegisterCarPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<AddCarData>({
    carModel: "",
    carColour: "",
    carRegistrationNumber: "",
    carRoadWorthyExpiry: "",
    carInsuaranceExpiry: "",
    carTransmissionType: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
 const [addCar] = useAddCarInSystemMutation()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addCar(formData).unwrap();
      setSnackbar({
        open: true,
        message: "Service registered successfully.",
        severity: "success",
      });
      setFormData({
        carModel: "",
        carColour: "",
        carRegistrationNumber: "",
        carRoadWorthyExpiry: "",
        carInsuaranceExpiry: "",
        carTransmissionType: "",
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
          onClick={() => router.push("/companyCars")}
          sx={{
            mb: 2,
            borderColor: "#302394",
            color: "#302394",
            textTransform: "none",
          }}
        >
          ← All Cars
        </Button>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          Add New Car
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Car Model"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Car Colour"
                name="carColour"
                type="text"
                value={formData.carColour}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Car Registration Number"
                name="carRegistrationNumber"
                value={formData.carRegistrationNumber}
                onChange={handleChange}
                fullWidth
                size="small"
                placeholder="e.g. 3 months"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Next RoadWorth Expiry Date"
                name="carRoadWorthyExpiry"
                value={formData.carRoadWorthyExpiry}
                onChange={handleChange}
                fullWidth
                size="small"
                placeholder="e.g. 2 weeks"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Next Insurance Expiry Date"
                name="carInsuaranceExpiry"
                type="number"
                value={formData.carInsuaranceExpiry}
                onChange={handleChange}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                select
                label="Car Transmission Type"
                name="carTransmissionType"
                value={formData.carTransmissionType}
                onChange={handleChange}
                fullWidth
                size="small"
                SelectProps={{
                  native: true,
                }}
              >
                <option value=""> </option>
                <option value="Mon - Fri.">Manual</option>
                <option value="Saturdays Only">Automatic</option>
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
                Save Car
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

export default RegisterCarPage;
