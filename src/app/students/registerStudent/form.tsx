"use client";
import { StudentData } from "@/interfaces/student";
import { useGetServicesNameAndIdQuery } from "@/state/api";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

type FormProps = {
  onCreate: (formData: StudentData) => Promise<{ success: boolean; message: string }>;
};

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = ({ onCreate }: FormProps) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    gender: "",
    email: "",
    phoneOne: "",
    phoneTwo: "",
    serviceId: "",
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const { data: services } = useGetServicesNameAndIdQuery();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await onCreate(formData);
      setSnackbar({
        open: true,
        message: result.message,
        severity: result.success ? "success" : "error",
      });
      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          otherName: "",
          gender: "",
          email: "",
          phoneOne: "",
          phoneTwo: "",
          serviceId: "",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    }
    setLoading(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <form className="mb-2" onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="w-full md:w-[32%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">First name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="John"
            required
          />
        </div>
        <div className="w-full md:w-[32%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Last name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="Doe"
            required
          />
        </div>
        <div className="w-full md:w-[32%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Other names*</label>
          <input
            type="text"
            name="otherName"
            value={formData.otherName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="Michael"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <div className="w-full md:w-[32%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Gender*</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="Male"
            required
          />
        </div>
        <div className="w-full md:w-[32%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="john@example.com"
          />
        </div>
        <div className="w-full md:w-[32%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Main Number</label>
          <input
            type="text"
            name="phoneOne"
            value={formData.phoneOne}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="+233xxx"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-5">
        <div className="w-full md:w-[32%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Second Phone Number</label>
          <input
            type="text"
            name="phoneTwo"
            value={formData.phoneTwo}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            placeholder="+233xxx"
          />
        </div>
        <div className="w-full md:w-[32%]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Service Type</label>
          <select
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-1"
            required
          >
            <option value="">Select Service</option>
            {services?.data?.map((s) => (
              <option key={s.serviceId} value={s.serviceId}>
                {s.serviceType}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-end">
        <button
          type="button"
          onClick={() => router.push("/students")}
          className="text-[#302394] cursor-pointer border-[#302394] rounded border-2 py-1 px-5"
        >
          Go to Students Page
        </button>
        <button
          type="submit"
          className="w-full sm:w-32 bg-[#302394] text-white text-sm rounded cursor-pointer py-2 border flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <CircularProgress size={18} color="inherit" /> : "Save & Continue"}
        </button>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={snackbar.severity} onClose={handleCloseSnackbar}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default Form;
