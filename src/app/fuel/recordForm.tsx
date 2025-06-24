"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useGetAllCarsQuery, useRecordFuelMutation } from "@/state/api";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RecordForm = () => {
  const { data: cars, isError, isLoading } = useGetAllCarsQuery();
  const [recordFuel] = useRecordFuelMutation();

  const [formData, setFormData] = useState({
    carRegistrationNumber: "",
    amountloaded: "",
    litres: "",
    refilledBy: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as AlertColor,
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    

    try {
      const response = await recordFuel(formData).unwrap();
      setSnackbar({
        open: true,
        message: "Fuel record saved successfully!",
        severity: "success",
      });
      setFormData({
        carRegistrationNumber: "",
        amountloaded: "",
        litres: "",
        refilledBy: "",
      });
    } catch (error: any) {
      setSnackbar({
        open: true,
        message: error?.data?.error || "Failed to save fuel record.",
        severity: "error",
      });
    }
  };

  return (
    <div>
      <form className="mb-2" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="w-full md:w-[32%]">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select Car
            </label>
            <select
              name="carRegistrationNumber"
              value={formData.carRegistrationNumber}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
              required
            >
              <option value="">Choose car</option>
              {cars?.map((car, index) => (
                <option key={index} value={car.carRegistrationNumber}>
                  {car.carRegistrationNumber}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="w-full md:w-[32%]">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Amount Loaded (₵) *
            </label>
            <input
              type="text"
              name="amountloaded"
              value={formData.amountloaded}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="w-full md:w-[32%]">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Litres *
            </label>
            <input
              type="text"
              name="litres"
              value={formData.litres}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
              placeholder="Enter litres"
              required
            />
          </div>

          <div className="w-full md:w-[32%]">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Refilled By *
            </label>
            <input
              type="text"
              name="refilledBy"
              value={formData.refilledBy}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
              placeholder="Enter name"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-end">
          <button type="button" className="text-[#302394] cursor-pointer border-[#302394] rounded border-2 py-1 px-5">
            Save & Exit
          </button>
          <button
            type="submit"
            className="w-full sm:w-32 bg-[#302394] text-white text-sm rounded cursor-pointer py-2 border"
          >
            Save & Continue
          </button>
        </div>
      </form>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RecordForm;
