"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Paper,
  Grid,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import {
  useGetStudentNamesAndIdQuery,
  useMakePaymentMutation,
} from "@/state/api";

const paymentReasons = [
  { label: "Driving School Service", value: "service_payment" },
  { label: "Driver’s License Fee", value: "license_fee" },
  { label: "Other", value: "other" },
];

const RecordPayment = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    amountPaid: "",
    paymentMethod: "",
    phoneNumber: "",
    reason: "",
    otherReasonText: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const { data: studentInfo } = useGetStudentNamesAndIdQuery();
  const [makePayment] = useMakePaymentMutation();

  const students = studentInfo?.success ? studentInfo.data : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent) {
      setSnackbar({
        open: true,
        message: "Please select a student.",
        severity: "error",
      });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...formData,
        studentId: selectedStudent.studentId,
        reason:
          formData.reason === "other"
            ? formData.otherReasonText
            : formData.reason,
      };

      const response = await makePayment(payload).unwrap();

      if (response.success) {
        setSnackbar({
          open: true,
          message: "✅ Payment recorded successfully!",
          severity: "success",
        });

        // Optionally reset form
        setFormData({
          amountPaid: "",
          paymentMethod: "",
          phoneNumber: "",
          reason: "",
          otherReasonText: "",
        });
        setSelectedStudent(null);
      } else {
        throw new Error(response.error || "Payment failed");
      }
    } catch (error: any) {
      setSnackbar({
        open: true,
        message: error?.message || "❌ An error occurred.",
        severity: "error",
      });
    } finally {
      setLoading(false);
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
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#302394", mb: 2 }}>
          Record Payment
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                value={selectedStudent}
                onChange={(event, newValue) => setSelectedStudent(newValue)}
                options={students}
                getOptionLabel={(option) => option.fullName || ""}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Student"
                    variant="outlined"
                    sx={{ minWidth: 300 }}
                  />
                )}
                isOptionEqualToValue={(option, value) =>
                  option.studentId === value.studentId
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="amountPaid"
                label="Amount Paid"
                value={formData.amountPaid}
                onChange={handleInputChange}
                sx={{ minWidth: 300 }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                select
                name="paymentMethod"
                label="Payment Method"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                sx={{ minWidth: 300 }}
              >
                <MenuItem value="">Select Method</MenuItem>
                <MenuItem value="cash">Cash</MenuItem>
                <MenuItem value="mobile_money">Mobile Money</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                InputLabelProps={{ shrink: true }}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                sx={{ minWidth: 300 }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                select
                name="reason"
                label="Reason for Payment"
                value={formData.reason}
                onChange={handleInputChange}
                sx={{ minWidth: 300 }}
              >
                {paymentReasons.map((reason) => (
                  <MenuItem key={reason.value} value={reason.value}>
                    {reason.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {formData.reason === "other" && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="otherReasonText"
                  label="Specify Other Reason"
                  multiline
                  rows={3}
                  value={formData.otherReasonText}
                  onChange={handleInputChange}
                  sx={{ minWidth: 600 }}
                />
              </Grid>
            )}
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#302394" }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Save Payment"
              )}
            </Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
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

export default RecordPayment;
