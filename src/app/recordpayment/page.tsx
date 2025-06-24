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
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useGetStudentNamesAndIdQuery } from "@/state/api";

const RecordPayment = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    amountPaid: "",
    paymentMethod: "",
    phoneNumber: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const {
    data: studentInfo,
    isError,
    isLoading,
  } = useGetStudentNamesAndIdQuery();

 const students = studentInfo?.success ? studentInfo.data : [];
 console.log(selectedStudent)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
    } catch (err) {
      setMessage("❌ An error occurred.");
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
        {" "}
        {/* reduced padding from 4 to 2 */}
        <Typography variant="h5" gutterBottom sx={{ color: "#302394", mb: 2 }}>
          Record Payment
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={1}>
            {" "}
            {/* reduced spacing from 2 to 1 */}
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
                sx={{ minWidth: 300 }} // increased width
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
                sx={{ minWidth: 300 }} // increased width
              >
                <option value="">Select Method</option>
                <option value="cash">Cash</option>
                <option value="mobile_money">Mobile Money</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                
                name="phoneNumber"
                label="Enter PhoneNumber"
                InputLabelProps={{ shrink: true }}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                sx={{ minWidth: 300 }} // increased width
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="reason"
                label="Reason for Payment"
                multiline
                rows={3}
                value={formData.reason}
                onChange={handleInputChange}
                sx={{ minWidth: 600 }} // wider for multiline
              />
            </Grid>
          </Grid>

          {message && (
            <Typography sx={{ mt: 2 }} color="secondary">
              {message}
            </Typography>
          )}

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
    </Box>
  );
};

export default RecordPayment;
